---
title: Roadmap
description: MerlionOS development phases and future plans.
---

## Completed — v1 through v77

### Foundation (v1-v10) — From Zero to Boot

| Version | Focus | Lines |
|---------|-------|-------|
| v1-v5 | Boot, VGA, serial, GDT/IDT, PIT, keyboard, heap | ~3K |
| v6-v10 | Multitasking, syscalls, IPC, VFS, ACPI, shell | ~7K |

### Growth (v11-v15) — Real Hardware & Networking

| Version | Focus | Lines |
|---------|-------|-------|
| v11-v15 | RTC, framebuffer, PCI, networking (IPv4/UDP), SMP | ~15K |

### Expansion (v16-v26) — Full OS Features

| Version | Focus | Lines |
|---------|-------|-------|
| v16-v20 | Modules, virtio, FAT16, ELF, TCP/IP, HTTP | ~30K |
| v21-v26 | Containers, AI shell, SSH, DNS, MQTT, WebSocket, scripts | ~41K |

### System Hardening (v27-v30)

| Version | Focus | Lines |
|---------|-------|-------|
| v27 | Permissions & Security — capabilities, seccomp, audit | 42.5K |
| v28 | Logging & Audit — structured logs, rotation, remote syslog | 43.6K |
| v29 | Performance Profiling — alloc tracker, syscall stats | 44.2K |
| v30 | Stability Hardening — panic recovery, fuzzing framework | 44.9K |

### Network Services (v31-v35)

| Version | Focus | Lines |
|---------|-------|-------|
| v31-v35 | HTTP middleware, SCP, DNS zones, MQTT broker (QoS), WebSocket rooms | 46.4K |

### AI Platform (v36-v40)

| Version | Focus | Lines |
|---------|-------|-------|
| v36 | Neural network inference (INT32, no floats) | 47.5K |
| v37 | ML training — linear regression, decision tree, KNN | 48.0K |
| v38 | Vector store — semantic search, cosine similarity | 48.3K |
| v39 | AI workflow engine — task orchestration | 48.5K |
| v40 | Self-evolution — code analysis, patch generation | 48.5K |

### Hardware Extensions (v41-v45)

| Version | Focus | Lines |
|---------|-------|-------|
| v41 | GPU compute — software shaders, benchmarks | 49.5K |
| v42 | Bluetooth — HCI, L2CAP, device pairing | 50.0K |
| v43 | Distributed FS — Raft consensus, remote mount | 50.5K |
| v44 | Real-time scheduling — EDF, Rate Monotonic | 50.9K |
| v45 | Microkernel mode — service isolation, hot-restart | 50.9K |

### Audio, Userspace & GUI (v46-v50)

| Version | Focus | Lines |
|---------|-------|-------|
| v46 | Audio engine — mixer, WAV, synthesis, MIDI | 52.5K |
| v47 | Userspace — process manager, libc, /bin programs | 54.0K |
| v48 | GUI toolkit — widgets, layout, dialogs, themes | 55.5K |
| v49 | IPv6 + HTTPS — dual stack, reverse proxy, TLS | 56.7K |
| v50 | Packages — registry, dependency resolution, build system | 57.2K |

### Advanced Systems (v51-v55)

| Version | Focus | Lines |
|---------|-------|-------|
| v51 | ext4 filesystem — extents, journaling, htree | 58.0K |
| v52 | TCP congestion (Reno/Cubic/BBR) + WASI runtime | 59.3K |
| v53 | Container networking — veth pairs, network bridge | 60.1K |
| v54 | ELF dynamic linker + debug info parser | 60.9K |
| v55 | Extended crypto — AES-128, RSA, X.509, ChaCha20 | 61.3K |

### Kernel Internals (v56-v60)

| Version | Focus | Lines |
|---------|-------|-------|
| v56 | Comprehensive /proc filesystem (28 entries) | 62.5K |
| v57 | /sys filesystem + device model | 63.0K |
| v58 | tmpfs + enhanced pipes (named, bidirectional) | 63.4K |
| v59 | POSIX ACLs — per-user/group access control | 64.2K |
| v60 | Power management — P/C-states, thermal, battery | 65.1K |

### Platform Expansion (v61-v77)

| Version | Focus | Lines |
|---------|-------|-------|
| v61-v65 | WiFi, HDA audio, UEFI boot (Limine), vim, bash/zsh | 72K |
| v66-v70 | cgroups, multi-user, service manager, extended tooling | 78K |
| v71-v73 | aarch64 port (Raspberry Pi 3/4/5) — UART, GPIO, SD card | 82K |
| v74-v75 | riscv64 port (SiFive/StarFive) — OpenSBI, PLIC, CLINT | 84K |
| v76-v77 | loongarch64 port (Loongson 3A5000/6000) — UEFI, EIOINTC | 85.9K |

**Milestone: 4-architecture support** — x86_64, aarch64, riscv64, loongarch64 all boot in QEMU with shared kernel core and per-arch HAL layers. 253 modules, 85,928 lines of Rust.

## Growth Chart

```
v10     7,000 lines    — boots, shell, multitasking
v20    30,000 lines    — networking, graphics, drivers
v30    44,900 lines    — security, logging, profiling
v40    48,500 lines    — AI platform, self-evolution
v50    57,200 lines    — audio, GUI, IPv6, packages
v60    65,074 lines    — full OS platform
v70    78,000 lines    — multi-user, service manager
v77    85,928 lines    — 4-architecture support
```

## Future Directions

- System installer
- Real hardware validation on all 4 architectures
- LoongArch SMP support

## Future: v78-v100

### Phase 1: Real Hardware (v78-v82)
- Hardware compatibility (USB keyboard, multiple NICs, SATA auto-detect)
- Framebuffer display system with font rendering
- USB mouse, touchpad, keyboard layout switching
- USB mass storage, NTFS read-only, auto-mount
- ACPI S3 sleep/wake, real CPU frequency scaling, battery readout

### Phase 2: User Experience (v83-v87)
- Wayland-inspired window compositor with taskbar
- GPU-accelerated terminal emulator with Unicode
- Graphical file manager and network manager
- Unified system settings application

### Phase 3: Application Ecosystem (v88-v92)
- Simple HTML/CSS web browser
- Email client (SMTP/IMAP)
- Music player with real HDA audio output
- Enhanced development environment (vim + debugger)
- Network-enabled package manager

### Phase 4: System Maturity (v93-v97)
- PAM authentication, per-user encryption
- OCI-compatible container runtime
- KVM-like virtualization (VT-x)
- NFS client, performance optimization

### Phase 5: AI Evolution (v98-v100)
- Local LLM inference (INT4/INT8 quantized, <1B params)
- AI-driven system administration
- **v100: Self-hosting** — MerlionOS compiles itself

### Growth Projection
```
v77     82K lines    — current
v82     95K lines    — real hardware
v87    115K lines    — user experience
v92    140K lines    — applications
v97    170K lines    — system maturity
v100   200K lines    — self-hosting
```
