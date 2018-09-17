import Shape from '../src/shape';

describe('shape', () => {
    it('create shape', () => {
        let shape = new Shape('red', 0, 0);
        expect(shape.color).toEqual('red');
        expect(shape.x).toEqual(0);
        expect(shape.y).toEqual(0);
    });

    it('move shape', () => {
        let shape = new Shape('red', 0, 0);
        shape.move(5,4);
        expect(shape.x).toEqual(5);
        expect(shape.y).toEqual(4);
    });

    it('get shape color', () => {
        let shape = new Shape('red', 0, 0);
        let color = shape.getColor();
        expect(color).toEqual('red');
    });

    it('change shape color', () => {
        let shape = new Shape('red', 0, 0);
        shape.changeColor('blue');
        expect(shape.color).toEqual('blue');
    });
});