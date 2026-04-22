# @freckle/cancelabe-promise

Utilities to create a promise that can be canceled.

## Install

```sh
pnpm add @freckle/cancelable-promise
```

## Release

To trigger a release in this project, merge a commit to `main` prefixed with:

1. `fix:` to trigger a patch release,
1. `feat:` to trigger minor, or
1. Use `<type>!:` or the `BREAKING CHANGES: <change>` footer to trigger major

See [RELEASE.md](./RELEASE.md) for more details.

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

---

[LICENSE](./LICENSE)
