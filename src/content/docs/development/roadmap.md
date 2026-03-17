---
title: Roadmap
description: MerlionOS development phases and future plans.
---

:::note[v100 Reached!]
MerlionOS has reached **v100** — 132,670 lines of Rust across 360 modules. The OS is now self-hosting: it includes a Rust subset compiler, x86_64 assembler, and ELF linker. Thank you for following this journey from zero to self-hosting!
:::

## Completed — v1 through v100

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

### Phase 1: Real Hardware (v78-v82)

| Version | Focus | Lines |
|---------|-------|-------|
| v78-v82 | USB keyboard, multiple NICs, SATA, framebuffer display, font rendering, USB mouse, touchpad, keyboard layouts, USB mass storage, NTFS read-only, auto-mount, ACPI S3 sleep/wake, real CPU frequency scaling, battery readout | ~100K |

### Phase 2: User Experience (v83-v87)

| Version | Focus | Lines |
|---------|-------|-------|
| v83-v87 | Window compositor, desktop environment, GPU-accelerated terminal with Unicode, graphical file manager, network manager, unified system settings | ~121K |

### Networking Roadmap (N1-N9) — Completed

| Phase | Focus |
|-------|-------|
| N1 | QUIC transport protocol |
| N2 | HTTP/3 over QUIC |
| N3 | gRPC framework |
| N4 | OSPF routing protocol |
| N5 | BGP routing protocol |
| N6 | iptables firewall and NAT |
| N7 | eBPF packet filtering |
| N8 | DPDK-style fast path |
| N9 | Network performance testing |

**Milestone: v87** — 330 modules, 121,157 lines of Rust. Window compositor, desktop environment, full networking stack with QUIC/HTTP/3, gRPC, OSPF/BGP, iptables/NAT, eBPF, and DPDK. 450+ shell commands.

### Phase 3: Application Ecosystem (v88-v92) — COMPLETE

| Version | Focus | Lines |
|---------|-------|-------|
| v88-v92 | HTML/CSS web browser, email client (SMTP/IMAP), music player, enhanced vim + debugger, network package manager | ~125K |

### Phase 4: System Maturity (v93-v97) — COMPLETE

| Version | Focus | Lines |
|---------|-------|-------|
| v93-v97 | PAM authentication, per-user encryption, OCI container runtime, KVM virtualization (VT-x), NFS client, performance optimization | ~129K |

### Phase 5: AI Evolution & Self-Hosting (v98-v100) — COMPLETE

| Version | Focus | Lines |
|---------|-------|-------|
| v98 | LLM inference — INT4/INT8 quantized, in-kernel neural network | ~130K |
| v99 | AI system administration — monitoring, diagnostics, auto-tuning | ~131K |
| v100 | Self-hosting — Rust subset compiler, x86_64 assembler, ELF linker | 132,670 |

**Milestone: v100** — 360 modules, 132,670 lines of Rust. Self-hosting OS with Rust compiler, assembler, and linker. 480+ shell commands. 100 releases.

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
v82   ~100,000 lines   — real hardware support
v87   121,157 lines    — desktop environment, networking roadmap complete
v92   ~125,000 lines   — application ecosystem
v97   ~129,000 lines   — system maturity, containers, KVM
v100  132,670 lines    — SELF-HOSTING! Rust compiler, assembler, linker
```

## Post-v100 Directions

MerlionOS has reached its v100 milestone. Future work may include:

- Real hardware validation on more machines and all 4 architectures
- Community contributions and ecosystem growth
- Expanded self-hosting capabilities (more Rust language features)
- LoongArch SMP support
- System installer for bare-metal deployment
