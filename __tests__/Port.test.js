/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
    it('can also be instantiated', () => {
        expect(new Port('Dover')).toBeInstanceOf(Object);
    });

    it('has a name property', () => {
        const port = new Port('Dover');
        expect(port.name).toBe('Dover');
    });
});