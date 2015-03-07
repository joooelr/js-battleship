/**
 * Class to manage Field of Game
 * @returns {Field}
 */
var Field = function() {
    // Constructor code
    this.width = 8;
    this.height = 8;
    this.size = 8; // Optional
    this.numShips = 1; // Optional
    this._field = [];
    this._ships = [];
    var matrix = new Array();

    /**
     * Function to init game field with Zeros
     * @returns {undefined}
     */
    this._initField = function() {
        for (var i = 0; i < this.size; i++) {
            this._field[i] = new Array(this.size);
            for (var j = 0; j < this.size; j++) {
                this._field[i][j] = '0';
            }
        }
    };
    /**
     * Function to display rows of game 
     * @returns {undefined}
     */
    this.drawn = function() {
        for (var j = 0; j < this.height; j++) {
            console.log('ROW ' + j + ':', this._field[j].join('-'));
        }
    };
    /**
     * Function to validate space in game field
     * @param {integer} i
     * @param {integer} j
     * @param {Ship} ship
     * @returns {Boolean}
     */
    this.isValid = function(i, j, ship) {
        var right = i + ship.width - 1;
        var bottom = j + ship.height - 1;
        if (this._field[i][j] == '0' && this._field[right][j] == '0' && this._field[i][bottom] == '0' && this._field[right][bottom] == '0') {
            return true;
        }
        return false;
    };
    /**
     * Function to draw the ships in game field
     * @param {Ship} ship
     * @returns {Array}
     */
    this._drawShip = function(ship) {
        var valid,
                attempts = 10;// attemps avoid that application stay in a indefinity cicle
        do {
            var initPosX = parseInt(Math.random() * (this.width - ship.width));
            var initPosY = parseInt(Math.random() * (this.height - ship.height));

            console.log('ID:' + ship.id + ' (X:' + initPosX + ', Y:' + initPosY + ')');
            valid = this.isValid(initPosX, initPosY, ship);
            attempts -= 1;
            if (!valid) {
                continue;
            }
            for (var i = initPosX; i < initPosX + ship.width; i++) {
                for (var j = initPosY; j < initPosY + ship.height; j++) {
                    this._field[i][j] = ship.id;
                }
            }
            if (attempts === 0) {
                break;
            }
        } while (!valid);

        return this._field;
    };

    /**
     * Function to initialize Ships
     * @returns {undefined}
     */
    this._initShips = function() {
        for (var i = 1; i <= this.numShips; i++) {
            var ship = new Ship(i);
            this._ships[ship.id] = ship;
            this._drawShip(ship);
        }
    };
    /**
     * Function to evaluate shot
     * @param {Integer} posX
     * @param {Integer} posY
     * @returns {undefined}
     */
    this.evalShot = function(posX, posY) {
        var val = this._field[posX][posY];
        if (val != '0') {
            var ship = this._ships[val];
            ship.getShot();
            this._field[posX][posY] = 'H';
            console.log(ship.status);
        }
        else {
            this._field[posX][posY] = 'F';
            console.log('FAIL');
        }
        this.drawn();
    };
    /**
     * Function to evaluate that ship is alive or not
     * @returns {Boolean}
     */
    this.isAnyShipAlive = function() {
        for (var i = 1; i < this._ships.length; i++) {

            if (this._ships[i].status != 'KILL')
                return true;
        }
    };
    this._initField();
    this._initShips();
    this.drawn();
};