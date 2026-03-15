---
title: Memory Management
description: How MerlionOS manages physical and virtual memory.
---

## Physical Memory

MerlionOS uses a **bitmap frame allocator** to track 4 KiB physical page frames. The memory map is provided by the bootloader.

## Virtual Memory

Each process has its own **page table hierarchy** (4-level paging on x86_64). The kernel maps itself into the upper half of every address space.

### Key Features

- **Demand paging**: Pages are allocated lazily on first access via page fault handler
- **Per-process page tables**: Full isolation between user processes
- **Slab allocator**: Fixed-size object caching for frequently allocated kernel structures

## Kernel Heap

The kernel heap uses a linked-list allocator bootstrapped early in boot, later supplemented by the slab allocator for common object sizes.

Shell command `heap` shows allocator statistics. `memmap` displays the physical memory map with color coding.
