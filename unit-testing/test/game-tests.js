const expect = require('chai').expect;

describe('Game Methods', () => {
    describe('checkGameStatus', () => {
        const checkGameStatus = require('../src/game.js').checkGameStatus;

        it('should tell me when the game is over', () => {
            const players = {
                ships: [
                    {
                        locations: [[0, 0]],
                        damage: [[0, 0]],
                    },
                ],
            };

            const actual = checkGameStatus(players);
            expect(actual).to.be.false;
        });
    });

    describe('takeTurn', () => {
        const takeTurn = require('../src/game.js').takeTurn;

        let guess, player;

        beforeEach(() => {
            guess = () => {
                return [0, 0];
            };
            player = {
                ships: [
                    {
                        locations: [[0, 0]],
                        damage: [],
                    },
                ],
            };
        });

        it('should return false if the game ends', () => {
            const actual = takeTurn(player, guess);

            expect(actual).to.be.false;
        });
    });

    // This function mimics a call to an api to save the game state.
    function saveGame(callback) {
        setTimeout(() => {
            callback();
        }, 1000);
    }

    describe('saveGame', () => {
        // Here we are passing in the "done" function.
        // the expect statement goes inside the function call,
        // so that the test is not run until a response is received.
        // We then have to call done()
        it('should update the save status', (done) => {
            let status = 'game not saved...';

            saveGame(() => {
                status = 'game saved!';
                expect(status).to.equal('game saved!');
                done();
            });
        });
    });
});
