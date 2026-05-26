# TypeScript Algorithms and Data Structures

<p align="center">
  <a href="https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/ci-cd.yml"><img alt="CI/CD" src="https://img.shields.io/github/actions/workflow/status/itkrivoshei/typescript-algorithms-data-structures/ci-cd.yml?branch=main&style=flat-square&label=CI%2FCD"></a>
  <a href="https://itkrivoshei.github.io/typescript-algorithms-data-structures/"><img alt="Live demo" src="https://img.shields.io/badge/demo-GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white"></a>
  <a href="https://nodejs.org/"><img alt="Node.js" src="https://img.shields.io/badge/Node.js-%E2%89%A522.13-339933?style=flat-square&logo=nodedotjs&logoColor=white"></a>
  <a href="https://jestjs.io/"><img alt="Jest" src="https://img.shields.io/badge/Jest-29-C21325?style=flat-square&logo=jest&logoColor=white"></a>
  <a href="./Dockerfile"><img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white"></a>
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square"></a>
</p>

TypeScript implementations of common algorithms and data structures with unit tests, static type checks, linting, formatting checks, Docker-based verification, and GitHub Actions deployment.

## Live demo

The static playground is deployed from GitHub Actions to GitHub Pages:

**[Open the demo](https://itkrivoshei.github.io/typescript-algorithms-data-structures/)**

## What is included

- Algorithm and data-structure implementations in [`src/`](./src)
- Jest tests colocated with implementation folders
- Static demo source in [`demo/`](./demo)
- Demo build helper in [`scripts/build-demo.mjs`](./scripts/build-demo.mjs)
- CI/CD workflow in [`.github/workflows/ci-cd.yml`](./.github/workflows/ci-cd.yml)
- Optional Docker verification with [`Dockerfile`](./Dockerfile)

## Implementations

| Area | Source |
| --- | --- |
| Binary search trees | [`src/BinarySearchTrees`](./src/BinarySearchTrees) |
| Hash map | [`src/HashMap`](./src/HashMap) |
| Linked lists | [`src/LinkedLists`](./src/LinkedLists) |
| Knight's Travails | [`src/KnightsTravails`](./src/KnightsTravails) |
| Recursion exercises | [`src/Recursion`](./src/Recursion) |
| Testing practice | [`src/TestingPractice`](./src/TestingPractice) |

## Tech stack

| Layer | Tools |
| --- | --- |
| Language | TypeScript |
| Runtime | Node.js 22+ |
| Testing | Jest, ts-jest |
| Quality | ESLint, Prettier, TypeScript compiler |
| CI/CD | GitHub Actions, GitHub Pages |
| Container | Docker |

## Getting started

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
| `npm run typecheck` | Type-check the main TypeScript source |
| `npm run typecheck:demo` | Type-check the static demo source |
| `npm run lint` | Run ESLint on `src/` and `demo/` |
| `npm run format:check` | Check formatting with Prettier |
| `npm run build:demo` | Build the static demo into `dist/demo` |
| `npm run build` | Type-check source and build the demo |
| `npm run ci` | Run the full local verification gate |

## Docker

The Docker image runs the same verification gate as CI.

```bash
docker build -t ts-algorithms .
docker run --rm ts-algorithms
```

## CI/CD

The repository uses one GitHub Actions workflow:

1. Install dependencies with `npm ci`.
2. Run type checks, linting, formatting checks, tests, and demo build validation.
3. On pushes to `main`, build the demo into `dist/demo`.
4. Upload the generated artifact.
5. Deploy the artifact to GitHub Pages from Actions.

Workflow file: [`.github/workflows/ci-cd.yml`](./.github/workflows/ci-cd.yml)

## Project structure

```text
.
├── demo/                         # Static demo source
├── scripts/                      # Build helper scripts
├── src/                          # Algorithms, data structures, and tests
├── .github/dependabot.yml        # Dependabot configuration
├── .github/workflows/ci-cd.yml   # CI checks and GitHub Pages deployment
├── Dockerfile                    # Optional containerized verification
├── eslint.config.mjs             # ESLint flat config
├── jest.config.js                # Jest configuration
├── tsconfig.demo.json            # Demo TypeScript config
├── tsconfig.json                 # Main TypeScript config
└── package.json                  # Scripts and dev dependencies
```

## Notes

[`src/CosineSimilarity/CosineSimilarity.cpp`](./src/CosineSimilarity/CosineSimilarity.cpp) is a standalone C++ exercise and is not part of the TypeScript build or test pipeline.

## License

This project is licensed under the [MIT License](./LICENSE).
