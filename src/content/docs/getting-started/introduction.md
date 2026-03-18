---
title: Introduction
description: What is MerlionOS and why does it exist?
---

MerlionOS is a Singapore-inspired AI-native hobby operating system kernel written in Rust for x86_64, aarch64, RISC-V, and LoongArch.

## Philosophy

**Born for AI. Built by AI.** (生于AI，成于AI)

MerlionOS explores what an operating system looks like when AI is a first-class citizen — not bolted on, but woven into the kernel itself. The entire OS was built using AI agents working in parallel, demonstrating that complex systems software can be created through human-AI collaboration.

## Features

| Category | Features |
|----------|----------|
| **Memory** | Frame allocator, 4-level page tables, demand paging, slab allocator, heap with leak detection |
| **Process** | Preemptive multitasking, context switching, per-process page tables, signals, process groups |
| **Filesystem** | VFS, FAT16, ext2, ext4 (extents/journaling), tmpfs, procfs, sysfs |
| **Storage** | virtio-blk, AHCI, NVMe, GPT partitions, NTFS read-only, software RAID 0/1/5, KV database |
| **Networking** | TCP (Reno/Cubic/BBR), UDP, IPv4+IPv6, ARP/NDP, DHCP, DNS, HTTP/HTTPS, TLS, WebSocket, MQTT, QUIC/HTTP/3, gRPC, OSPF/BGP, iptables/NAT, eBPF, DPDK |
| **Servers** | HTTP server, SSH server, DNS server, MQTT broker, HTTPS reverse proxy |
| **Security** | Capabilities (14 flags), seccomp, ACLs, file permissions, sudo, AES-128, RSA, X.509 |
| **AI** | NL shell, neural network inference (INT32), ML training, vector store, AI workflows, self-evolution, LLM inference (INT4/INT8), AI system administration, self-hosting compiler |
| **Userspace** | Ring 3 execution, 45 POSIX syscalls, ELF loader, per-process page tables |
| **GPU** | AMD + Intel compute drivers, NVIDIA/Ascend/Cambricon detection |
| **Audio** | Multi-channel mixer, WAV playback, tone synthesis, MIDI parser |
| **GUI** | Widget toolkit (10 types), layout engine, dialog system, themes |
| **Display** | Window compositor, desktop environment, framebuffer terminal |
| **Input** | USB mouse, keyboard layouts, touchpad |
| **Hardware** | SMP, APIC, HPET, PCI, USB (xHCI), Bluetooth (HCI/L2CAP), e1000e NIC |
| **Languages** | Forth, Lisp, WASM/WASI runtime, shell scripting (if/for/while/function) |
| **Containers** | Process isolation, veth pairs, network bridge, microkernel mode, OCI runtime, KVM virtualization |
| **Self-hosting** | Rust subset compiler, x86_64 assembler, ELF linker |
| **DevTools** | Kernel debugger, CPU profiler, alloc tracker, syscall stats, fuzzing framework |
| **Power** | CPU P-states/C-states, thermal management, battery simulation, ACPI events |

## Supported Architectures

| Architecture | Target | Hardware | Build | Test |
|---|---|---|---|---|
| x86_64 | Intel/AMD PC | BIOS + UEFI | `make build` / `make iso` | `make run` / `make run-uefi-mac` |
| aarch64 | Raspberry Pi 3/4/5 | Pi firmware | `make pi` | `make run-pi` |
| riscv64 | RISC-V (SiFive, StarFive) | OpenSBI | `make riscv` | `make run-riscv` |
| loongarch64 | Loongson 3A5000/6000 | UEFI | `make loongarch` | `make run-loongarch` |

## Project Status

- **380 source modules**, 139,905 lines of Rust, 45 syscalls
- **100+ releases** (v1 through v100 and beyond)
- **480+ shell commands**
- **4 CPU architectures** (x86_64, aarch64, riscv64, loongarch64)
- **Optional microkernel mode** with service isolation and hot-restart
- Runs on QEMU; UEFI boot via Limine on real hardware
- MIT licensed

## Links

- [GitHub Repository](https://github.com/MerlionOS/merlion-kernel)
- [Quick Start Guide](/getting-started/quickstart/)
