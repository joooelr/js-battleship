/**
 * Class to modalete a Ship 
 * @param {Integer} id
 * @returns {Ship}
 */
var Ship = function(id) {
    this.id = id;
    this.size = 3;
    this.width = 2;
    this.height = 2;
    this.status = 'ALIVE';
    this.numShots = 0;
    /**
     * Function to get Shot
     * @returns {undefined}
     */
    this.getShot = function() {
        this.numShots++;
        this.status = 'HIT';
        if (this.numShots == this.width * this.height)
            this.status = 'KILL';
    };
};