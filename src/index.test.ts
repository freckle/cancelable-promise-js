import {makeCancelable} from '.'

describe('CancelablePromise', () => {
  describe('makeCancelable', () => {
    test('resolves without cancel', async () => {
      const r = await makeCancelable(Promise.resolve(true)).promise
      expect(r).toBe(true)
    })
    test('can fail normally', async () => {
      try {
        await makeCancelable(Promise.reject('uh-oh')).promise
      } catch (e) {
        expect(e).toBe('uh-oh')
      }
    })
    test('can cancel', async () => {
      try {
        const p = makeCancelable(
          new Promise(resolve => {
            setTimeout(() => resolve(true), 0)
          })
        )
        p.cancel()
        await p.promise
      } catch (e) {
        // @ts-ignore: Error type is unknown
        expect(e.isCanceled).toBe(true)
      }
    })
  })
})
