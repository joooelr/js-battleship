// Ship specs
/*
Ship 
	Given I have a ship
	When I get shot, status should change to HIT
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

var ship = new Ship(1);

describe('ship', function(){
		
	describe('Given I have a ship', function(){
		
		it('should change the ship status',function(){
			ship.getShot();
			console.log(ship.status);
			expect(ship.status).toEqual('HIT');
		});
	});
});