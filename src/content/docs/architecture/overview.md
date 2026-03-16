---
title: Architecture Overview
description: High-level architecture of the MerlionOS kernel.
---

MerlionOS is a **hybrid kernel** with 223 modules across 65,074 lines of Rust. It runs primarily as a monolithic kernel in ring 0, with an optional microkernel mode (v45) for service isolation and hot-restart.

## Layer Diagram

```
┌───────────────────────────────────────────────┐
│             User Space (Ring 3)               │
│  ELF binaries, libc, /bin programs            │
│  Dynamic linker, WASI runtime                 │
├───────────────────────────────────────────────┤
│            Kernel Shell (298 cmds)            │
│  NL interface, AI agents, scripting engine    │
├───────────────────────────────────────────────┤
│             Kernel Subsystems                 │
│  ┌───────────┐ ┌───────────┐ ┌─────────────┐ │
│  │ Scheduler │ │    VFS    │ │  Security   │ │
│  │ preempt + │ │ ext4/tmp/ │ │ caps/seccomp│ │
│  │ RT (EDF)  │ │ proc/sys  │ │ ACLs/audit  │ │
│  └───────────┘ └───────────┘ └─────────────┘ │
│  ┌───────────┐ ┌───────────┐ ┌─────────────┐ │
│  │  Memory   │ │  Drivers  │ │   Network   │ │
│  │ slab/page │ │PCI/ACPI/  │ │IPv4/v6/TCP/ │ │
│  │ demand pg │ │virtio/GPU │ │UDP/HTTPS/TLS│ │
│  └───────────┘ └───────────┘ └─────────────┘ │
│  ┌───────────┐ ┌───────────┐ ┌─────────────┐ │
│  │    AI     │ │  Audio    │ │    GUI      │ │
│  │ inference │ │ mixer/WAV │ │  widgets/   │ │
│  │ ML/vector │ │ synth/MIDI│ │  themes     │ │
│  └───────────┘ └───────────┘ └─────────────┘ │
├───────────────────────────────────────────────┤
│            Hardware Abstraction               │
│  x86_64: GDT, IDT, APIC, PIT, VGA, FB       │
│  SMP: up to 16 CPUs, per-CPU state           │
│  Power: P/C-states, thermal, battery         │
└───────────────────────────────────────────────┘
```

## Syscall ABI

User programs communicate with the kernel via `int 0x80`. The kernel provides 15 syscalls:

| # | Name | Args | Description |
|---|------|------|-------------|
| 0 | write | rdi=buf, rsi=len | Write to file descriptor |
| 1 | exit | rdi=code | Terminate process |
| 2 | yield | — | Yield to scheduler |
| 3 | getpid | — | Get current PID |
| 4 | sleep | rdi=ticks | Sleep for N ticks |
| 5 | send | rdi=chan, rsi=byte | Send to IPC channel |
| 6 | recv | rdi=chan | Receive from IPC channel |
| 7 | open | rdi=path, rsi=flags | Open a file descriptor |
| 8 | read | rdi=fd, rsi=buf, rdx=len | Read from file descriptor |
| 9 | close | rdi=fd | Close a file descriptor |
| 10 | fork | — | Fork current process (COW) |
| 11 | exec | rdi=path | Execute ELF binary |
| 12 | mmap | rdi=addr, rsi=len | Map memory pages |
| 13 | ioctl | rdi=fd, rsi=cmd | Device control |
| 14 | socket | rdi=domain, rsi=type | Create network socket |

## Virtual Filesystem

The VFS layer supports six filesystem backends:

```
/
├── bin/            # user-space programs (ELF)
├── dev/
│   ├── null        # discard sink
│   ├── serial      # COM1 serial port
│   ├── fb0         # framebuffer device
│   └── audio       # audio mixer
├── proc/           # procfs — 28 entries
│   ├── uptime      # system uptime
│   ├── meminfo     # heap statistics
│   ├── tasks       # running task list
│   ├── cpuinfo     # CPU topology & features
│   ├── net/        # network statistics
│   └── ...         # mounts, modules, interrupts, etc.
├── sys/            # sysfs — device model
│   ├── devices/    # device hierarchy
│   ├── bus/        # bus types (PCI, virtio)
│   └── power/      # power management
├── mnt/            # ext4 / MF16 block devices
└── tmp/            # tmpfs — writable in-memory files
```

**Supported filesystems:** MF16 (FAT16-like), ext4 (extents, journaling, htree), tmpfs, procfs, sysfs, devfs.

## Security Model

MerlionOS implements defense in depth:

- **Capabilities** — fine-grained privilege control per process
- **Seccomp** — syscall filtering policies
- **POSIX ACLs** — per-user/group access control on filesystem objects
- **Audit log** — structured security event logging with remote syslog
- **Container isolation** — namespaces, veth networking, resource limits

## AI Subsystem

The kernel includes a built-in AI platform:

- **Neural network inference** — INT32 arithmetic, no floating point required
- **ML training** — linear regression, decision trees, KNN
- **Vector store** — semantic search with cosine similarity
- **Workflow engine** — task orchestration and scheduling
- **Self-evolution** — code analysis, patch generation, self-healing

## Microkernel Mode

Optional microkernel mode (v45) provides:

- Service isolation in separate address spaces
- Message-passing IPC between services
- Hot-restart of failed services without full reboot
- Fault containment boundaries

## Network Stack

Full network stack with:

- **IPv4 + IPv6** dual stack with ARP, ICMP, NDP
- **TCP** with congestion control (Reno, Cubic, BBR)
- **UDP**, DNS client/server with zone management
- **Application protocols** — HTTP/HTTPS, SSH, SCP, MQTT (QoS), WebSocket
- **TLS** — certificate validation, reverse proxy
- **Container networking** — veth pairs, bridge, network namespaces
