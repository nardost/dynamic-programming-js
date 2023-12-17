const { gridTraveler } = require('../src/utils/grid');

describe('Grid Traveler', () => {
    test.each([
        [2, 3, 3]
    ])('For a %sx%s grid, there are %p possible routes.', (m, n, p) => {
        expect(gridTraveler(m,n)).toBe(p)
    })
});