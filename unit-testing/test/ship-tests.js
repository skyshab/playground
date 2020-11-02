const expect = require('chai').expect;

describe('checkForShip', () => {
    const checkForShip = require('../src/ship-methods').checkForShip;

    let player;

    // The checkForShip function does not modify the player object,
    // so we can just initialize it once before running the various tests
    before(() => {
        player = {
            ships: [
                {
                    locations: [
                        [0, 0],
                        [0, 1],
                    ],
                },
                {
                    locations: [
                        [1, 0],
                        [1, 1],
                    ],
                },
            ],
        };
    });

    after(() => {
        console.log('all checkForShip tests completed!');
    });

    afterEach(() => {
        console.log('single checkForShip test completed!');
    });

    it('should detect existence of no ship at a given players coordinates', () => {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should detect existence of a ship at a given players coordinates', () => {
        expect(checkForShip(player, [0, 1])).to.be.ok;
    });

    it('should detect existence of a ship with multiple coordinates', () => {
        expect(checkForShip(player, [0, 0])).to.be.ok;
        expect(checkForShip(player, [0, 1])).to.be.ok;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should detect multiple ships', () => {
        expect(checkForShip(player, [0, 0])).to.be.ok;
        expect(checkForShip(player, [0, 1])).to.be.ok;
        expect(checkForShip(player, [1, 0])).to.be.ok;
        expect(checkForShip(player, [1, 1])).to.be.ok;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});

describe('damageShip', () => {
    const damageShip = require('../src/ship-methods').damageShip;

    it('should register damage on a given ship in a given location', () => {
        const ship = {
            locations: [[0, 0]],
            damage: [],
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });

    after(() => {
        console.log('all damageShip tests completed!');
    });

    afterEach(() => {
        console.log('single damageShip test completed!');
    });
});

describe('fireAtShip', () => {
    const fireAtShip = require('../src/ship-methods').fireAtShip;

    let player;

    // Resets the player object before running each test.
    // This is needed because our function modifies the object
    beforeEach(() => {
        player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: [],
                },
            ],
        };
    });

    after(() => {
        console.log('all fireAtShip tests completed!');
    });

    afterEach(() => {
        console.log('single fireAtShip test completed!');
    });

    it('should register the damage on a given ship in a given location', () => {
        fireAtShip(player, [0, 0]);
        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    });

    it('should NOT register any damage if there is no ship at the coordinates', () => {
        fireAtShip(player, [9, 9]);
        expect(player.ships[0].damage).to.be.empty;
    });
});
