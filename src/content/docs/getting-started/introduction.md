---
title: Introduction
description: What is MerlionOS and why does it exist?
---

MerlionOS is a Singapore-inspired AI-native hobby operating system kernel written in Rust for x86_64.

## Philosophy

**Born for AI. Built by AI.** MerlionOS explores what an operating system looks like when AI is a first-class citizen — not bolted on, but woven into the kernel itself.

## Features

| Category | Features |
|----------|----------|
| **Memory** | Frame allocator, page tables, demand paging, slab allocator |
| **Process** | Preemptive multitasking, context switching, per-process page tables |
| **IPC** | Channel-based message passing |
| **Filesystem** | VFS with /dev, /proc, /tmp; FAT16-like MF16 filesystem |
| **Hardware** | ACPI, PCI, SMP (up to 16 CPUs), VGA, serial, keyboard |
| **Networking** | IPv4, UDP, loopback, ARP, ICMP |
| **AI** | NL shell, LLM proxy, semantic VFS, self-healing, agent framework |

## Project Status

- **46 source modules**, ~7,400 lines of Rust
- **47 development phases** completed (40 kernel + 7 AI)
- **75+ shell commands**
- Runs on QEMU x86_64; real hardware support in progress

## Links

- [GitHub Repository](https://github.com/MerlionOS/merlion-kernel)
- [Quick Start Guide](/getting-started/quickstart/)
