export type CancelablePromise<T> = {
  promise: Promise<T>
  cancel: () => void
}

export function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T> {
  let hasCanceled_ = false

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      val => (hasCanceled_ ? reject({isCanceled: true}) : resolve(val)),
      error => (hasCanceled_ ? reject({isCanceled: true}) : reject(error))
    )
  })

  return {
    promise: wrappedPromise,
    cancel: () => {
      hasCanceled_ = true
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isCanceled(err: any): boolean {
  return err !== null && err !== undefined && typeof err === 'object' && err.isCanceled === true
}
