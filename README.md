# @freckle/cancelabe-promise

Utilities to create a promise that can be canceled.

## Install

```sh
yarn add @freckle/cancelable-promise
```

## Versioning and release process

See [RELEASE.md](./RELEASE.md).

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
