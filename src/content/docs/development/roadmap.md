---
title: Roadmap
description: MerlionOS development phases and future plans.
---

## Completed — v1 through v60

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

## Growth Chart

```
v10     7,000 lines    — boots, shell, multitasking
v20    30,000 lines    — networking, graphics, drivers
v30    44,900 lines    — security, logging, profiling
v40    48,500 lines    — AI platform, self-evolution
v50    57,200 lines    — audio, GUI, IPv6, packages
v60    65,074 lines    — full OS platform
```

## Future Directions

- WiFi driver (802.11)
- Sound card driver (Intel HDA)
- Real hardware boot (UEFI via Limine)
- Multi-user login sessions
- System installer
- RISC-V port
