"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCancelable = makeCancelable;
exports.isCanceled = isCanceled;
function makeCancelable(promise) {
    let hasCanceled_ = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(val => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)), error => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error)));
    });
    return {
        promise: wrappedPromise,
        cancel: () => {
            hasCanceled_ = true;
        }
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCanceled(err) {
    return err !== null && err !== undefined && typeof err === 'object' && err.isCanceled === true;
}
