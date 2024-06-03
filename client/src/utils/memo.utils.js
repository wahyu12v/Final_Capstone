import { debounce } from "lodash";

export const memoizeWithInvalidation = (fn, delay) => {
    const cache = {};
    const timeouts = {};
    return async (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = await fn(...args);
        cache[key] = result;

        if (timeouts[key]) clearTimeout(timeouts[key]);
        timeouts[key] = setTimeout(() => {
            delete cache[key];
            delete timeouts[key];
        }, delay);

        return result;
    };
};

export const debouncePromise = (fn, delay) => {
    const debounced = debounce((resolve, reject, args) => {
        fn(...args).then(resolve).catch(reject);
    }, delay);
    return (...args) => new Promise((resolve, reject) => {
        debounced(resolve, reject, args);
    });
};