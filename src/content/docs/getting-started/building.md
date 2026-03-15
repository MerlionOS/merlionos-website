---
title: Building from Source
description: Detailed build instructions for MerlionOS.
---

## Toolchain Setup

MerlionOS uses Rust nightly with a custom target. The `rust-toolchain.toml` in the repo manages the toolchain version automatically.

```sh
# Install Rust (if not already installed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Required components
rustup component add rust-src --toolchain nightly
rustup component add llvm-tools --toolchain nightly

# Bootimage tool
cargo install bootimage
```

## QEMU

### macOS
```sh
brew install qemu
```

### Ubuntu/Debian
```sh
sudo apt install qemu-system-x86
```

### Arch Linux
```sh
sudo pacman -S qemu-full
```

## Building

```sh
git clone https://github.com/MerlionOS/merlion-kernel.git
cd merlion-kernel

# Build the bootable image
make build

# The output is at target/x86_64-merlion/debug/bootimage-merlion-kernel.bin
```

## Project Structure

```
src/
├── main.rs          # Kernel entry point
├── acpi.rs          # ACPI shutdown and reboot
├── allocator.rs     # Kernel heap
├── driver.rs        # Kernel driver framework
├── gdt.rs           # GDT + TSS
├── interrupts.rs    # IDT, exceptions, IRQs, syscall
├── ipc.rs           # IPC channels
├── keyboard.rs      # PS/2 scancode decoder
├── log.rs           # Kernel log ring buffer
├── memory.rs        # Page tables, frame allocator
├── process.rs       # User processes + page tables
├── serial.rs        # UART serial driver
├── shell.rs         # Interactive kernel shell
├── syscall.rs       # Syscall dispatch
├── task.rs          # Task management + context switching
├── timer.rs         # PIT tick counter
├── vfs.rs           # Virtual filesystem
└── vga.rs           # VGA console with ANSI color
```
