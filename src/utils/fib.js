/**
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * @param {*} n 
 * @returns The Nth Fiobonacci number
 */

const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

const dynamicFib = (n, memo={}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = dynamicFib(n-1, memo) + dynamicFib(n-2, memo);
    return memo[n];
}

module.exports = { fib, dynamicFib };