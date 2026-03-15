---
title: Roadmap
description: MerlionOS development phases and future plans.
---

## Completed Phases

### Foundation (Phases 1-10)

| Phase | Focus | Status |
|-------|-------|--------|
| 1 | Boot in QEMU, VGA hello, panic handler | Done |
| 2 | Serial logging, GDT/IDT, PIT timer, exceptions | Done |
| 3 | Keyboard input, heap allocator, frame allocator | Done |
| 4 | VGA console + scrolling, shell, `println!` | Done |
| 5 | Uptime, kernel log, page fault handler | Done |
| 6 | Preemptive multitasking, context switching, scheduler | Done |
| 7 | Per-process page tables, syscall ABI, user programs | Done |
| 8 | IPC channels, concurrent processes | Done |
| 9 | Virtual filesystem (/dev, /proc, /tmp) | Done |
| 10 | ACPI power management, ANSI colors, driver framework | Done |

### Features (Phases 11-20)

| Phase | Focus | Status |
|-------|-------|--------|
| 11 | RTC clock, kernel self-tests | Done |
| 12 | Framebuffer graphics, drawing primitives | Done |
| 13 | PCI bus scan, RAM disk, block filesystem | Done |
| 14 | Networking: IPv4, UDP, loopback | Done |
| 15 | SMP: CPUID, APIC, per-CPU state | Done |
| 16-20 | User-space library, shell enhancements, utilities | Done |

### Advanced (Phases 21-40)

| Phase | Focus | Status |
|-------|-------|--------|
| 21 | Loadable kernel modules | Done |
| 22 | Demand paging | Done |
| 24 | Kernel symbol table + stack trace | Done |
| 25 | Slab allocator | Done |
| 26-30 | Virtio, block devices, MF16 filesystem, ARP/ICMP | Done |
| 31-35 | ELF types, file descriptors, POSIX-like I/O | Done |
| 36-40 | SMP boot, per-CPU state, spinlocks, APIC timer | Done |

### AI Phases (A-G)

| Phase | Focus | Status |
|-------|-------|--------|
| A-G | NL shell, LLM proxy, semantic VFS, AI monitor, self-healing, agent framework | Done |

## Future Directions

- TCP/IP stack completion
- Real hardware boot (beyond QEMU)
- GUI windowing system
- Package manager for user-space programs
- Copy-on-write fork
- UEFI boot support
