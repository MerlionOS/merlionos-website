---
title: Filesystem
description: Virtual filesystem and storage in MerlionOS.
---

## Virtual Filesystem (VFS)

MerlionOS uses a unified VFS layer that abstracts six filesystem backends behind a common interface. All filesystems implement the same trait for `open`, `read`, `write`, `close`, `stat`, and directory operations.

### Supported Filesystems

| Filesystem | Type | Description |
|------------|------|-------------|
| devfs | Virtual | Device nodes (`/dev/null`, `/dev/serial`, `/dev/fb0`, `/dev/audio`) |
| procfs | Virtual | Kernel state with 28 entries (`/proc/uptime`, `/proc/meminfo`, `/proc/cpuinfo`, etc.) |
| sysfs | Virtual | Device model and bus topology (`/sys/devices/`, `/sys/bus/`, `/sys/power/`) |
| tmpfs | In-memory | Writable temporary files, backed by page cache |
| MF16 | On-disk | FAT16-like filesystem for block devices |
| ext4 | On-disk | Linux-compatible filesystem with extents, journaling, and htree directories |

### Mount Hierarchy

```
/
├── bin/            # user-space ELF programs
├── dev/            # devfs — device nodes
│   ├── null        # discard sink
│   ├── serial      # COM1 serial port
│   ├── fb0         # framebuffer device
│   └── audio       # audio mixer
├── proc/           # procfs — 28 kernel entries
│   ├── uptime      # system uptime
│   ├── meminfo     # heap statistics
│   ├── tasks       # running task list
│   ├── cpuinfo     # CPU topology & features
│   ├── mounts      # active mount table
│   ├── modules     # loaded kernel modules
│   ├── interrupts  # IRQ counters
│   ├── net/        # network statistics
│   └── ...         # additional entries
├── sys/            # sysfs — device model
│   ├── devices/    # device hierarchy
│   ├── bus/        # bus types (PCI, virtio)
│   └── power/      # P/C-states, thermal
├── mnt/            # ext4 / MF16 block mounts
└── tmp/            # tmpfs — writable temp files
```

## MF16 Filesystem

A FAT16-like filesystem (MerlionFS-16) for block devices:

- Cluster-based allocation with chain tracking
- Directory entries with 8.3 filenames
- Block device abstraction layer
- RAM disk and Virtio block device backends

## ext4 Filesystem

Linux-compatible ext4 implementation (v51):

- **Extents** — efficient mapping of large contiguous regions
- **Journaling** — crash recovery via write-ahead log
- **Htree directories** — hash-indexed directory lookup for large directories
- **Superblock and group descriptors** — standard ext4 on-disk layout
- Read and write support for block devices

## tmpfs

In-memory filesystem (v58):

- Page-cache-backed storage, no disk I/O
- Full read/write/directory support
- Automatic cleanup on unmount
- Used for `/tmp` and scratch storage

## procfs

Comprehensive process and kernel information filesystem (v56):

- 28 entries exposing kernel state
- Per-process directories (`/proc/[pid]/`)
- Network, memory, CPU, module, and interrupt statistics
- Dynamic content generated on read

## sysfs

Device model filesystem (v57):

- Hierarchical device tree mirroring kernel device model
- Bus enumeration (PCI, virtio)
- Power management attributes (P-states, C-states, thermal)
- Read/write attributes for device configuration

## File Descriptors

POSIX-like file descriptor table per process:

- `open`, `read`, `write`, `close` syscall semantics
- stdin (fd 0), stdout (fd 1), stderr (fd 2) initialization
- Named and bidirectional pipes (v58)
- `lsof` command to inspect open file descriptors
- POSIX ACLs for per-user/group access control (v59)
