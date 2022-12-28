/* globals describe it expect */

const Port = require('../src/Port.js');

describe('Port', () => {
  describe('trial of beforeEach', () => {
    let port;
    let ship;
    beforeEach(() => {
      port = new Port('Dover');
      ship = jest.fn();
    });

    it('can also be instantiated', () => {
      expect(port).toBeInstanceOf(Object);
    });

    it('has a name property', () => {
      expect(port.name).toBe('Dover');
    });


    describe('addShip', () => {
      it('can add a ship', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
      });
    });
  
    describe('removeShip', () => {
      it('can remove a ship', () => {
        port.addShip(ship);
        port.removeShip(ship);
        expect(port.ships).toEqual([]);
      });
      it('throws error if no ship to remove', () => {
        port.addShip(ship);
        port.removeShip(ship);

        expect(() => port.removeShip(ship)).toThrowError('No ships currently at dock');
      });
    });
  });
});
