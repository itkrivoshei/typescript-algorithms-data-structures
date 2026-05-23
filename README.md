# TypeScript Algorithms and Data Structures

[![CI/CD](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/ci-cd.yml)

A portfolio-ready collection of classic algorithms and data structures implemented in TypeScript. The repository includes tests, linting, formatting, type checking, Docker support, and an automatically deployed GitHub Pages demo.

## Live demo

GitHub Pages demo: https://itkrivoshei.github.io/typescript-algorithms-data-structures/

The live demo is generated from the `demo/` source folder. On every push to `main`, GitHub Actions runs the full quality gate, builds `dist/demo`, and publishes the generated site to the `gh-pages` branch.

## What this repository shows

- TypeScript implementations of common algorithms and data structures.
- Jest unit tests for core behaviour.
- ESLint and Prettier configuration at the repository root.
- Unified GitHub Actions CI/CD pipeline.
- Automated GitHub Pages deployment from generated build output.
- Dockerfile for reproducible local checks.

## Project structure

```text
.
├── demo/                         # Source files for the GitHub Pages demo
├── src/
│   ├── BinarySearchTrees/
│   ├── HashMap/
│   ├── KnightsTravails/
│   ├── LinkedLists/
│   ├── Recursion/
│   └── TestingPractice/
├── .github/workflows/ci-cd.yml   # Quality checks and GitHub Pages deployment
├── Dockerfile
├── jest.config.js
├── tsconfig.demo.json
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
| `npm run typecheck:demo` | Type-check the demo source |
| `npm run build:demo` | Generate the deployable demo in `dist/demo` |
| `npm run lint` | Run ESLint on source and demo code |
| `npm run format` | Format files with Prettier |
| `npm run format:check` | Check formatting in CI |
| `npm run ci` | Run the complete local CI gate |

## Docker

```bash
docker build -t ts-algorithms .
docker run --rm ts-algorithms
```

## CI/CD

The repository uses a single GitHub Actions pipeline:

1. Install dependencies with `npm ci`.
2. Run TypeScript checks, ESLint, Prettier checks, Jest tests, and demo build validation.
3. Upload the generated demo as a workflow artifact.
4. Publish the generated demo to the `gh-pages` branch when `main` is updated.

## GitHub Pages setup

If the live demo URL does not update, set GitHub Pages once in the repository settings:

```text
Settings → Pages → Source: Deploy from a branch → Branch: gh-pages → Folder: /root
```

After that, every push to `main` updates the demo automatically through GitHub Actions.

## License

MIT License. See [LICENSE](LICENSE).
