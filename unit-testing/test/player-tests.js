const expect = require('chai').expect;

describe('Player Methods', () => {
    describe('validateLocation', () => {
        const validateLocation = require('../src/player-methods.js')
            .validateLocation;

        let player;

        beforeEach(() => {
            player = {
                ships: [
                    {
                        locations: [[9, 9]],
                    },
                ],
            };
        });

        it('should confirm valid for unoccupied locations in range', () => {
            const location = [0, 0];
            const actual = validateLocation(player, location);
            expect(actual).to.be.ok;
        });

        it('should confirm invalid for unoccupied locations in range', () => {
            const location = [9, 9];
            const actual = validateLocation(player, location);
            expect(actual).to.be.false;
        });

        it('should confirm invalid for unoccupied locations out of range', () => {
            const locationHigh = [9, 9];
            const locationLow = [-1, -1];

            expect(validateLocation(player, locationHigh)).to.be.false;
            expect(validateLocation(player, locationLow)).to.be.false;
        });
    });

    describe('validateLocations', () => {
        const validateLocations = require('../src/player-methods.js')
            .validateLocations;

        let player;

        beforeEach(() => {
            player = {
                ships: [
                    {
                        locations: [[0, 0]],
                    },
                ],
            };
        });

        it('should correctly report a list of unoccupied locations as valid', () => {
            const locations = [
                [1, 1],
                [1, 2],
                [1, 3],
                [1, 4],
            ];
            expect(validateLocations(player, locations)).to.be.ok;
        });

        it('should correctly report a problem if any location in list is invalid', () => {
            let locations = [
                [1, 1],
                [1, 2],
                [1, 3],
                [10, 10],
            ];
            expect(validateLocations(player, locations)).to.be.false;

            locations = [
                [1, 1],
                [1, 2],
                [1, 3],
                [0, 0],
            ];
            expect(validateLocations(player, locations)).to.be.false;
        });
    });

    describe('placeShip', () => {
        const placeShip = require('../src/player-methods.js').placeShip;

        let player;

        beforeEach(() => {
            player = {
                ships: [
                    {
                        size: 1,
                        locations: [[0, 0]],
                    },
                    {
                        size: 2,
                        locations: [
                            [1, 0],
                            [1, 1],
                        ],
                    },
                ],
            };
        });

        it('should update a ship with a valid starting location', () => {
            const ship = player.ships[0];
            const coordinates = [0, 1];

            placeShip(player, ship, coordinates, 'horizontal');

            const actual = ship.locations;

            expect(actual).to.be.ok;
            expect(actual).to.have.length(1);
            expect(actual[0]).to.deep.equal([0, 1]);
        });

        it('should throw an error if no direction is specified', () => {
            const ship = player.ships[0];
            const coordinates = [0, 1];

            const handler = () => {
                placeShip(player, ship, coordinates);
            };
            expect(handler).to.throw(Error);
            expect(handler).to.throw('a direction was not supplied!');
        });
    });
});
