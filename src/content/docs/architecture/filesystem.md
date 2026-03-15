---
title: Filesystem
description: Virtual filesystem and storage in MerlionOS.
---

## Virtual Filesystem (VFS)

MerlionOS uses a unified VFS layer that abstracts different filesystem backends behind a common interface.

### Built-in Mounts

| Path | Type | Description |
|------|------|-------------|
| `/dev/null` | Device | Discard sink |
| `/dev/serial` | Device | COM1 serial port |
| `/proc/uptime` | Proc | System uptime |
| `/proc/meminfo` | Proc | Heap statistics |
| `/proc/tasks` | Proc | Running task list |
| `/tmp/` | TmpFS | Writable temporary files |

## MF16 Filesystem

A FAT16-like filesystem (MerlionFS-16) for block devices:

- Cluster-based allocation with chain tracking
- Directory entries with 8.3 filenames
- Block device abstraction layer
- RAM disk and Virtio block device backends

## File Descriptors

POSIX-like file descriptor table per process:

- `open`, `read`, `write`, `close` syscall semantics
- stdin (fd 0), stdout (fd 1), stderr (fd 2) initialization
- `lsof` command to inspect open file descriptors
