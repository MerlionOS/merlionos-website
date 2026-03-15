---
title: Process Management
description: Multitasking and scheduling in MerlionOS.
---

## Scheduler

MerlionOS implements **preemptive multitasking** driven by the PIT timer interrupt. The scheduler uses round-robin with priority support.

## Context Switching

Each task maintains a saved register state. On timer interrupt or explicit yield, the scheduler:

1. Saves current task's registers to its stack
2. Selects next runnable task
3. Switches page tables (CR3)
4. Restores next task's registers
5. Returns from interrupt into the new task

## SMP

MerlionOS supports **Symmetric MultiProcessing** with up to 16 CPUs:

- CPUID detection and feature enumeration
- APIC-based inter-processor interrupts
- Per-CPU state tracking
- Spinlocks and ticket locks for synchronization

## Shell Commands

| Command | Description |
|---------|-------------|
| `ps` | List running tasks |
| `spawn` | Spawn a demo kernel task |
| `kill <pid>` | Kill a task by PID |
| `bg <prog>` | Run user program in background |
| `run <prog>` | Run user program (blocking) |
