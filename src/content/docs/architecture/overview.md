---
title: Architecture Overview
description: High-level architecture of the MerlionOS kernel.
---

MerlionOS is a **monolithic kernel** — all kernel subsystems run in ring 0 with direct access to hardware.

## Layer Diagram

```
┌─────────────────────────────────────────┐
│           User Space (Ring 3)           │
│  User programs via syscall ABI (int 80) │
├─────────────────────────────────────────┤
│              Kernel Shell               │
│  75+ commands, NL interface, AI agents  │
├─────────────────────────────────────────┤
│           Kernel Subsystems             │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │ Scheduler│ │   VFS    │ │   IPC   │ │
│  │(preempt) │ │/dev/proc │ │channels │ │
│  └──────────┘ └──────────┘ └─────────┘ │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │ Memory   │ │ Drivers  │ │   Net   │ │
│  │ Manager  │ │PCI/ACPI  │ │IPv4/UDP │ │
│  └──────────┘ └──────────┘ └─────────┘ │
├─────────────────────────────────────────┤
│          Hardware Abstraction           │
│  x86_64: GDT, IDT, APIC, PIT, VGA     │
│  SMP: up to 16 CPUs                    │
└─────────────────────────────────────────┘
```

## Syscall ABI

User programs communicate with the kernel via `int 0x80`:

| # | Name | Args | Description |
|---|------|------|-------------|
| 0 | write | rdi=buf, rsi=len | Print to serial+VGA |
| 1 | exit | rdi=code | Terminate process |
| 2 | yield | — | Yield to scheduler |
| 3 | getpid | — | Get current PID |
| 4 | sleep | rdi=ticks | Sleep for N ticks |
| 5 | send | rdi=chan, rsi=byte | Send to IPC channel |
| 6 | recv | rdi=chan | Receive from IPC channel |

## Virtual Filesystem

```
/
├── dev/
│   ├── null       # discard sink
│   └── serial     # COM1 serial port
├── proc/
│   ├── uptime     # system uptime
│   ├── meminfo    # heap statistics
│   └── tasks      # running task list
└── tmp/           # writable user files
```
