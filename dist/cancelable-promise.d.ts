export type CancelablePromise<T> = {
    promise: Promise<T>;
    cancel: () => void;
};
export declare function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T>;
export declare function isCanceled(err: any): boolean;
