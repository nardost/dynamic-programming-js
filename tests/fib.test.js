const each = require('jest-each').default;
const { fib, dynamicFib } = require( '../src/utils/fib');

describe('Fibonacci numbers with dynamic programming', () => {
    each([
        [63, 6557470319842],
        [50, 12586269025],
        [78, 8944394323791464]
    ]).test('The %sth Fibonacci number is %s.', (a, b) => {
        expect(dynamicFib(a)).toBeLessThanOrEqual(b);
    }),
    each([40, 50, 60, 70, 75, 78]).test('The %sth Fibonacci number is less than or equal to ' + Number.MAX_SAFE_INTEGER, (a) => {
        expect(dynamicFib(a)).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    }),
    each([79, 80, 90]).test('The %sth Fibonacci number is greater than ' + Number.MAX_SAFE_INTEGER, (a) => {
        expect(dynamicFib(a)).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
    })
});

