import Rectangle from '../src/rectangle';

describe('rectangle', () => {
    it('create rectangle', () => {
        let rectangle = new Rectangle('red', 0, 0, 20, 30);
        expect(rectangle.color).toEqual('red');
        expect(rectangle.x).toEqual(0);
        expect(rectangle.y).toEqual(0);
        expect(rectangle.width).toEqual(20);
        expect(rectangle.height).toEqual(30);
    });
});