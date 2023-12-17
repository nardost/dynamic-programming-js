const { gridTraveler, dynamicGridTraveler } = require('../src/utils/grid');

describe('Grid Traveler', () => {
    test.each([
        [2, 3, 3],
        [10, 10, 48620],
        [20, 20, 35345263800],
        [20, 30, 11541847896480]
    ])('For a %sx%s grid, there are %p possible routes.', (m, n, p) => {
        expect(dynamicGridTraveler(m,n)).toBe(p)
    })
});
