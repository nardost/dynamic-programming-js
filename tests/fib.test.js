const each = require('jest-each').default;
const { fib, dynamicFib } = require( '../src/utils/fib');

describe('Fibonacci numbers with dynamic programming', () => {
    each([
        [6, 8],
        [50, 12586269025]
    ]).test('The %sth Fibonacci number is %s.', (a, b) => {
        expect(dynamicFib(a)).toBe(b);
    })
});
;
