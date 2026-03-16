---
title: UEFI Boot & Real Hardware
description: Boot MerlionOS on real hardware via UEFI using the Limine bootloader.
---

MerlionOS supports UEFI boot via the [Limine](https://github.com/limine-bootloader/limine) bootloader, enabling it to run on real x86_64 hardware — not just QEMU.

## Prerequisites

- **macOS or Linux** build machine
- **Rust nightly** toolchain (via `rustup`)
- **xorriso** — ISO creation tool
- **QEMU** (optional, for testing before real hardware)

### Install on macOS

```sh
brew install xorriso qemu
```

### Install on Linux (Debian/Ubuntu)

```sh
sudo apt install xorriso qemu-system-x86 ovmf
```

## Build the UEFI Kernel

MerlionOS has two build targets:

| Target | Boot Method | Use Case |
|--------|------------|----------|
| `make build` | BIOS (bootloader 0.9) | QEMU development |
| `make iso` | UEFI (Limine) | Real hardware & UEFI QEMU |

### Build the ISO

```sh
git clone https://github.com/MerlionOS/merlion-kernel.git
cd merlion-kernel
make iso
```

This will:
1. Clone the Limine bootloader (v8.x) automatically
2. Build the kernel as a standard ELF binary for Limine
3. Create `merlionos.iso` — a hybrid BIOS+UEFI bootable ISO

## Test with QEMU UEFI

Before writing to USB, test in QEMU with UEFI firmware:

### macOS

```sh
make run-uefi-mac
```

### Linux

```sh
make run-uefi
```

You should see serial output showing all subsystems initializing:

```
[limine] _start reached!
MerlionOS v77.0.0 — Born for AI. Built by AI.
[limine] HHDM offset: 0xffff800000000000
[limine] Memory map: 37 entries
[limine] Total usable: 245 MiB
[limine] Framebuffer: 1280x800 bpp=32
[ok] GDT loaded
[ok] IDT + interrupts enabled
[ok] Heap ready (64K)
[e1000e] MAC: 52:54:00:12:34:56
[ok] Hardware drivers
[ok] Security + logging
[ok] Network services
[ok] AI platform
[ok] All subsystems initialized
```

## Write to USB Drive

### macOS

```sh
# 1. Identify your USB device
diskutil list

# 2. Unmount the USB drive (replace disk2 with your device)
diskutil unmountDisk /dev/disk2

# 3. Write the ISO (use rdisk for faster writes)
sudo dd if=merlionos.iso of=/dev/rdisk2 bs=4M status=progress

# 4. Eject
diskutil eject /dev/disk2
```

### Linux

```sh
# 1. Identify your USB device
lsblk

# 2. Write the ISO (replace sdX with your device)
sudo dd if=merlionos.iso of=/dev/sdX bs=4M status=progress && sync
```

### Windows

Use [Rufus](https://rufus.ie/):
1. Select `merlionos.iso`
2. Choose **DD Image mode** (not ISO mode)
3. Select your USB drive
4. Click Start

:::caution
Double-check the target device! `dd` will overwrite without confirmation.
:::

## Boot on Real Hardware

### HP Laptop

1. **Disable Secure Boot**:
   - Power on → Press **F10** for BIOS Setup
   - Navigate to **Security** → **Secure Boot Configuration**
   - Set **Secure Boot** to **Disabled**
   - Save and exit

2. **Boot from USB**:
   - Insert the USB drive
   - Power on → Press **F9** for Boot Menu
   - Select your USB device (usually shows as "UEFI: USB...")
   - MerlionOS will boot via Limine

### Other Manufacturers

| Brand | BIOS Key | Boot Menu Key |
|-------|----------|---------------|
| HP | F10 | F9 |
| Dell | F2 | F12 |
| Lenovo | F1 / Fn+F1 | F12 |
| ASUS | Del / F2 | F8 / Esc |
| Acer | F2 / Del | F12 |
| MSI | Del | F11 |

### General Steps

1. Disable Secure Boot in BIOS/UEFI settings
2. Ensure UEFI boot mode is enabled (not Legacy/CSM)
3. Set USB as first boot priority, or use the boot menu

## What to Expect

On successful boot, you'll see:

- **Serial output** (if connected via COM port or USB-serial adapter)
- **Framebuffer display** — MerlionOS uses the UEFI GOP framebuffer for graphics output. The resolution is set by the UEFI firmware (typically the display's native resolution).
- **Login prompt** — Enter username `root` (default password is empty, just press Enter)
- **Shell** — Type `help` for available commands

## Architecture: BIOS vs UEFI Boot Path

```
BIOS Boot (QEMU default):
  bootloader 0.9 → bootimage → kernel_main(BootInfo)

UEFI Boot (Limine):
  UEFI firmware → BOOTX64.EFI (Limine) → kernel.elf → _start()
    → reads HHDM, memory map, framebuffer from Limine responses
    → initializes all 243 modules
    → login → shell
```

## Troubleshooting

### "Secure Boot Violation" or boot fails
→ Secure Boot is still enabled. Disable it in BIOS.

### Black screen, no output
→ MerlionOS outputs to serial (COM1) first. Connect a serial adapter, or try a different display output.

### Limine shows menu but kernel doesn't load
→ Check that `limine.conf` is at `/boot/limine.conf` on the USB drive, and `kernel.elf` is at `/boot/kernel.elf`.

### Keyboard doesn't work
→ Some laptops need USB legacy support enabled in BIOS. MerlionOS uses PS/2 keyboard by default; USB keyboard support via xHCI is available but may not work on all hardware.

## Limine Configuration

The boot configuration is in `limine.conf`:

```
timeout: 3

/MerlionOS
    protocol: limine
    kernel_path: boot():/boot/kernel.elf
```

You can add kernel command line arguments:
```
/MerlionOS
    protocol: limine
    kernel_path: boot():/boot/kernel.elf
    kernel_cmdline: serial=on loglevel=debug
```
