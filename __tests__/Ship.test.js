/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');
const { default: expect } = require('expect');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = { name: 'Dover', ships: [], addShip: jest.fn(), removeShip: jest.fn() };
      calais = { name: 'Calais', ships: [], addShip: jest.fn(), removeShip: jest.fn() };
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });

    describe('Ship constructor', () => {
      it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
      });
      it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
      });
      it('gets added to port on instantiation', () => {
        expect(dover.addShip).toHaveBeenCalled();
        expect(dover.addShip).toHaveBeenCalledWith(ship);
      });
    });
    describe('setSail', () => {
      it('can set sail', () => {
        ship.setSail();
        expect(ship.previousPort).toBe(dover);
        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
        expect(dover.removeShip).toHaveBeenCalled();
      });
      it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
    });

    describe('dock', () => {
      it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.addShip).toHaveBeenCalled();
        expect(calais.addShip).toHaveBeenCalledWith(ship);
      });
    });
  });
});
