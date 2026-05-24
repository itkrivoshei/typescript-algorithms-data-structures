# Contributing

This repository is a small TypeScript algorithms and data-structures project.

## Local checks

Before opening a pull request, run:

```bash
npm ci
npm run ci
```

For smaller checks during development:

```bash
npm test
npm run lint
npm run format:check
npm run typecheck
npm run typecheck:demo
```

## Pull requests

1. Create a branch from `main`.
2. Keep changes focused and minimal.
3. Add or update tests when behavior changes.
4. Make sure `npm run ci` passes.
5. Open a pull request against `main`.

## License

Contributions are made under the [MIT License](LICENSE).
