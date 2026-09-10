# @freckle/cancelable-promise

Utilities to create a promise that can be canceled.

This package is ESM-only. Consumers must be able to `import` it; `require()` will not
work.

## Install

```sh
pnpm add @freckle/cancelable-promise
```

## Usage

```ts
const expensiveOperation = () => fetchData().then(parse).then(transform)

const Component = () => {
  const [result, setResult] = setState(null)
  useEffect(() => {
    const promise = makeCancelable(expensiveOperation).then(res => {
      setResult(res)
    })
    return () => {
      // Cancel on cleanup
      promise.cancel()
    }
  })

  return result
}
```

## Development

- **Package manager**: pnpm (Node version pinned in `.nvmrc`)
- `pnpm build` — `tsc -p tsconfig.build.json`, emits to `dist/`
- `pnpm test` — Vitest
- `pnpm coverage` — Vitest with coverage, gated at the thresholds in `vitest.config.ts`
- `pnpm typecheck` — `tsc --noEmit`, includes test files
- `pnpm lint` — ESLint
- `pnpm format` / `pnpm format-check` — Prettier
- `pnpm knip` — unused files/dependencies/exports
- CI runs all of the above on every PR, plus a check that `dist/` is up to date

## Release

See [RELEASE.md](./RELEASE.md).

---

[LICENSE](./LICENSE)
