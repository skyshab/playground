const { fireAtShip } = require('./ship-methods');

function checkGameStatus(players) {
    return false;
}

function takeTurn(opposingPlayer, guess) {
    const coordinates = guess();
    fireAtShip(opposingPlayer, coordinates);
    return checkGameStatus();
}

module.exports = {
    checkGameStatus: checkGameStatus,
    takeTurn: takeTurn,
};
