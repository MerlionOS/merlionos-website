---
title: Contributing
description: How to contribute to MerlionOS.
---

MerlionOS is open source and welcomes contributions.

## Getting Started

1. Fork [merlion-kernel](https://github.com/MerlionOS/merlion-kernel) on GitHub
2. Clone your fork and create a feature branch
3. Make your changes
4. Run `make build` to verify it compiles
5. Test with `make run`
6. Submit a pull request

## Code Style

- Follow standard Rust conventions (`cargo fmt`, `cargo clippy`)
- Keep modules focused and under ~300 lines where possible
- Add comments for non-obvious hardware interactions
- Use `unsafe` only when interacting with hardware; document why

## Areas for Contribution

- **Real hardware testing**: Try booting on actual x86_64 hardware
- **Network stack**: TCP implementation, socket API
- **User programs**: Write programs using the syscall ABI
- **Documentation**: Improve docs, add diagrams
- **Bug fixes**: Check GitHub issues

## Communication

- GitHub Issues for bug reports and feature requests
- Pull Requests for code contributions
