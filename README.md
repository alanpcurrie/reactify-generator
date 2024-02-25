# Reactify Generator

![Logo](banner.webp 'logo')

Reactify Generator is a simple CLI tool. It scaffolds unit tests and React components, or functions. It helps create consistent naming conventions and testing patterns from the start.

## Features

- **Scaffold React Components or Functions**: Generate `.ts(x)` files for your components or hooks with a single command.
- **Generate Unit Tests**: Automatically create corresponding `.test.ts(x)` files for your components or hooks, pre-filled with the AAA (Arrange-Act-Assert) testing pattern.
- **Interactive CLI**: Guided prompts collect details fro file generation
- **Visual Feedback**: Colorful animations and ASCII art for added delight.

## Getting Started

### Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.14.4 or higher)

### Usage

To generate a new component or function along with its unit test, run:

```bash
npm run gen
```

Follow the interactive prompts to specify the type (Component or Function), name, and location within your project.

## Dependencies

- [Chalk](https://www.npmjs.com/package/chalk) ^5.3.0: For colorful terminal text.
- [Chalk Animation](https://www.npmjs.com/package/chalk-animation) ^2.0.3: For animated terminal text.
- [Commander](https://www.npmjs.com/package/commander) ^12.0.0: For command-line interfaces.
- [Figlet](https://www.npmjs.com/package/figlet) ^1.7.0: For ASCII art.
- [FS-Extra](https://www.npmjs.com/package/fs-extra) ^11.2.0: For file system operations.
- [Inquirer](https://www.npmjs.com/package/inquirer) ^9.2.14: For interactive command-line prompts.
- [Node-Emoji](https://www.npmjs.com/package/node-emoji) ^2.1.3: For emoji support in the terminal.

## License

Reactify Generator is released under the MIT License. See the LICENSE file for more details.

---
