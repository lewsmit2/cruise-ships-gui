/* globals describe it expect */

const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
  describe('with ports and itinerary', () => {
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      itinerary = new Itinerary([dover, calais]);
      port = jest.fn();
    });
    describe('Itinerary constructor', () => {
      it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
      });
    });

    describe('Itinerary can have ports', () => {
      it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
      });
    });
  });
});