const { fib, dynamicFib } = require( '../src/utils/fib');
const { gridTraveler } = require('../src/utils/grid');

describe('Fibonacci numbers with dynamic programming', () => {
    test.each([
        [63, 6557470319842],
        [50, 12586269025],
        [78, 8944394323791464]
    ])('The %sth Fibonacci number is %s.', (a, b) => {
        expect(dynamicFib(a)).toBeLessThanOrEqual(b);
    }),
    test.each([40, 50, 60, 70, 75, 78])('The %sth Fibonacci number is less than or equal to ' + Number.MAX_SAFE_INTEGER, (a) => {
        expect(dynamicFib(a)).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    }),
    test.each([79, 80, 90])('The %sth Fibonacci number is greater than ' + Number.MAX_SAFE_INTEGER, (a) => {
        expect(dynamicFib(a)).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
    })
});
