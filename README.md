# TypeScript Algorithms and Data Structures

[![CI/CD](https://img.shields.io/github/actions/workflow/status/itkrivoshei/typescript-algorithms-data-structures/ci-cd.yml?branch=main&style=flat-square&label=CI%2FCD)](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/ci-cd.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A522-339933?style=flat-square)](https://nodejs.org/)
[![Demo](https://img.shields.io/badge/GitHub%20Pages-demo-222?style=flat-square)](https://itkrivoshei.github.io/typescript-algorithms-data-structures/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

TypeScript implementations of common algorithms and data structures with tests, CI checks, Docker support, and a static GitHub Pages demo.

## Tech stack

- TypeScript
- Jest / ts-jest
- ESLint
- Prettier
- GitHub Actions
- GitHub Pages
- Docker

## Scope

- Data structures and algorithms under `src/`
- Unit tests colocated in `tests/` folders
- Static demo source under `demo/`
- Reproducible local verification through `npm run ci`
- Optional Docker-based verification

## Installation

```bash
git clone https://github.com/itkrivoshei/typescript-algorithms-data-structures.git
cd typescript-algorithms-data-structures
npm ci
```

## Commands

| Command | Description |
| --- | --- |
| `npm test` | Run the Jest test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run typecheck` | Type-check `src/` |
| `npm run typecheck:demo` | Type-check `demo/` |
| `npm run lint` | Run ESLint on source and demo TypeScript files |
| `npm run format:check` | Check formatting with Prettier |
| `npm run build:demo` | Build the static demo into `dist/demo` |
| `npm run build` | Type-check source and build the demo |
| `npm run ci` | Run the full local verification gate |

## Docker

```bash
docker build -t ts-algorithms .
docker run --rm ts-algorithms
```

The Docker image runs the same verification command as CI:

```bash
npm run ci
```

## Project structure

```text
.
├── demo/                         # Static demo source
├── scripts/                      # Small build helper scripts
├── src/                          # Algorithms, data structures, and tests
├── .github/workflows/ci-cd.yml   # Quality checks and GitHub Pages deployment
├── Dockerfile
├── jest.config.js
├── tsconfig.demo.json
├── tsconfig.json
└── package.json
```

## CI/CD

The repository uses one GitHub Actions workflow:

1. Install dependencies with `npm ci`.
2. Run type checks, linting, formatting checks, tests, and demo build validation.
3. Upload the generated demo as a workflow artifact.
4. Deploy `dist/demo` to the `gh-pages` branch on pushes to `main`.

## Live demo

GitHub Pages:

```text
https://itkrivoshei.github.io/typescript-algorithms-data-structures/
```

## Notes

`src/CosineSimilarity/CosineSimilarity.cpp` is a standalone C++ exercise and is not part of the TypeScript build or test pipeline.

## License

This project is licensed under the [MIT License](LICENSE).
