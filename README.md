# TypeScript Algorithms and Data Structures

[![CI](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/node.js.yml/badge.svg)](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/node.js.yml)
[![GitHub Pages](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/pages.yml/badge.svg)](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/pages.yml)

A portfolio-ready collection of classic algorithms and data structures implemented in TypeScript. The
repository is structured for technical review: tests, linting, formatting, type checking, CI, Docker
support, and a static GitHub Pages demo.

## Live demo

GitHub Pages demo: https://itkrivoshei.github.io/typescript-algorithms-data-structures/

## What this repository shows

- TypeScript implementations of common algorithms and data structures.
- Jest unit tests for core behaviour.
- ESLint and Prettier configuration at the repository root.
- GitHub Actions workflow for CI quality checks.
- GitHub Pages workflow for a simple live demo.
- Dockerfile for reproducible local checks.

## Project structure

```text
.
├── docs/
├── src/
│   ├── BinarySearchTrees/
│   ├── HashMap/
│   ├── KnightsTravails/
│   ├── LinkedLists/
│   ├── Recursion/
│   └── TestingPractice/
├── .github/workflows/
├── Dockerfile
├── jest.config.js
├── tsconfig.json
└── package.json
```

## Algorithms and data structures

| Area | Folder | Notes |
| --- | --- | --- |
| Recursion | `src/Recursion` | Fibonacci and merge-sort style exercises |
| Linked lists | `src/LinkedLists` | Linked list implementation and tests |
| Hash map | `src/HashMap` | Hash map implementation and tests |
| Binary search trees | `src/BinarySearchTrees` | Tree construction, traversal, and balancing exercises |
| Graph search | `src/KnightsTravails` | Shortest-path style board traversal |
| Testing practice | `src/TestingPractice` | Small functions focused on unit testing |

## Quick start

```bash
git clone https://github.com/itkrivoshei/typescript-algorithms-data-structures.git
cd typescript-algorithms-data-structures
npm ci
npm test
```

## Development commands

| Command | Purpose |
| --- | --- |
| `npm test` | Run Jest test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run typecheck` | Run TypeScript checks without emitting files |
| `npm run lint` | Run ESLint on the source code |
| `npm run format` | Format files with Prettier |
| `npm run format:check` | Check formatting in CI |
| `npm run ci` | Run the complete local CI gate |

## Docker

```bash
docker build -t ts-algorithms .
docker run --rm ts-algorithms
```

## CI/CD

The repository uses two GitHub Actions workflows:

- `CI` runs type checking, linting, formatting checks, and tests.
- `Deploy GitHub Pages` publishes the static demo from `docs/`.

## License

MIT License. See [LICENSE](LICENSE).
