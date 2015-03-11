/**
 * Class to modelate a Player
 * @returns {Player}
 */
var Player = function() {
    this.field = new Field();
    // this.name = window.prompt('Your name?'); it should be unccomment if you can put name
    this.name = 'Joel';
    this.isLooser = function() {
        return this.field.isAnyShipAlive();
    };
};