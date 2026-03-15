---
title: Quick Start
description: Get MerlionOS running in under 5 minutes.
---

## Prerequisites

- **Rust nightly** (managed automatically via `rust-toolchain.toml`)
- **rust-src**: `rustup component add rust-src --toolchain nightly`
- **llvm-tools**: `rustup component add llvm-tools --toolchain nightly`
- **cargo-bootimage**: `cargo install bootimage`
- **QEMU**: `brew install qemu` (macOS) or `apt install qemu-system-x86` (Linux)

## Clone and Run

```sh
git clone https://github.com/MerlionOS/merlion-kernel.git
cd merlion-kernel
make run
```

This boots MerlionOS in QEMU with VGA display and serial output.

## Build Targets

| Command | Description |
|---------|-------------|
| `make build` | Build bootable image |
| `make run` | Boot in QEMU (VGA + serial) |
| `make run-serial` | Headless mode (serial only) |

## First Commands

Once the shell appears, try:

```
info          # System information
ps            # List running tasks
ls            # List filesystem root
cat /proc/meminfo  # Heap statistics
spawn         # Spawn a demo task
neofetch      # System info display
```
