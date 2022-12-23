/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship(Port)).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship(Port);
        expect(ship.currentPort).toBe(Port);
    });
    it('can set sail', () => {
        const ship = new Ship(Port);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    });
});