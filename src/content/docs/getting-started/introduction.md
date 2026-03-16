---
title: Introduction
description: What is MerlionOS and why does it exist?
---

MerlionOS is a Singapore-inspired AI-native hobby operating system kernel written in Rust for x86_64.

## Philosophy

**Born for AI. Built by AI.** (生于AI，成于AI)

MerlionOS explores what an operating system looks like when AI is a first-class citizen — not bolted on, but woven into the kernel itself. The entire OS was built using AI agents working in parallel, demonstrating that complex systems software can be created through human-AI collaboration.

## Features

| Category | Features |
|----------|----------|
| **Memory** | Frame allocator, 4-level page tables, demand paging, slab allocator, heap with leak detection |
| **Process** | Preemptive multitasking, context switching, per-process page tables, signals, process groups |
| **Filesystem** | VFS, FAT16, ext2, ext4 (extents/journaling), tmpfs, procfs, sysfs |
| **Storage** | virtio-blk, AHCI, NVMe, GPT partitions, KV database |
| **Networking** | TCP (Reno/Cubic/BBR), UDP, IPv4+IPv6, ARP/NDP, DHCP, DNS, HTTP/HTTPS, TLS, WebSocket, MQTT |
| **Servers** | HTTP server, SSH server, DNS server, MQTT broker, HTTPS reverse proxy |
| **Security** | Capabilities (14 flags), seccomp, ACLs, file permissions, sudo, AES-128, RSA, X.509 |
| **AI** | NL shell, neural network inference (INT32), ML training, vector store, AI workflows, self-evolution |
| **GPU** | Software compute shaders, buffer management, benchmarks |
| **Audio** | Multi-channel mixer, WAV playback, tone synthesis, MIDI parser |
| **GUI** | Widget toolkit (10 types), layout engine, dialog system, themes |
| **Hardware** | SMP, APIC, HPET, PCI, USB (xHCI), Bluetooth (HCI/L2CAP), e1000e NIC |
| **Languages** | Forth, Lisp, WASM/WASI runtime, shell scripting (if/for/while/function) |
| **Containers** | Process isolation, veth pairs, network bridge, microkernel mode |
| **DevTools** | Kernel debugger, CPU profiler, alloc tracker, syscall stats, fuzzing framework |
| **Power** | CPU P-states/C-states, thermal management, battery simulation, ACPI events |

## Project Status

- **223 source modules**, 65,000+ lines of Rust
- **60 releases** (v1 through v60)
- **298 shell commands**
- **Optional microkernel mode** with service isolation and hot-restart
- Runs on QEMU x86_64; UEFI boot preparation in progress
- MIT licensed

## Links

- [GitHub Repository](https://github.com/MerlionOS/merlion-kernel)
- [Quick Start Guide](/getting-started/quickstart/)
