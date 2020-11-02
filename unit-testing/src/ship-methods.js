// check to see if a ship exists at given coordinates
function checkForShip(player, coordinates) {
    var isShipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];

        isShipPresent = ship.locations.filter((actualCoordinates) => {
            return (
                actualCoordinates[0] === coordinates[0] &&
                actualCoordinates[1] === coordinates[1]
            );
        })[0];

        if (isShipPresent) {
            return ship;
        }
    }

    return false;
}

// regtister damage on the ship
function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}

// if player has a ship located at coordinates, register damage
function fireAtShip(player, coordinates) {
    const ship = checkForShip(player, coordinates);

    if (ship) {
        damageShip(ship, coordinates);
    }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fireAtShip = fireAtShip;
