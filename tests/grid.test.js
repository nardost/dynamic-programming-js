const { gridTraveler, dynamicGridTraveler } = require('../src/utils/grid');

describe('Grid Traveler', () => {
    test.skip.each([
        [2, 3, 3],
        [4, 5, 35],
        [10, 10, 48620],
        [13, 15, 9657700],
        [20, 20, 35345263800],
        [20, 30, 11541847896480]
    ])('For a %sx%s grid, there are %p possible routes.', (m, n, p) => {
        expect(dynamicGridTraveler(m,n)).toBe(p)
    })
});
