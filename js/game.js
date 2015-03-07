/**
 * Class to modalate Game
 * @returns {Game}
 */
var Game = function() {
    this.numsPlayers = null;
    this.players = [];
    /**
     * Function to manage playing the game
     * @returns {undefined}
     */
    this.play = function() {

        var player = this.players[0];
        do {
            var limit = player.field.size - 1;
            // var shot = new Shot(window.prompt('Shot? [0 - ' + limit + ']'));
            var shotX = Number(window.prompt('Shot X Axis ? [0 - ' + limit + ']'));
            var shotY = Number(window.prompt('Shot Y Axis? [0 - ' + limit + ']'));
            player.field.evalShot(shotY, shotX);

            //} while(this.players[0].status == 'LOOSER');
        } while (player.isLooser());
    };
    /**
     * Function to start game
     * @param {Intteger} numsPlayers
     * @returns {undefined}
     */
    this.start = function(numsPlayers) {
        this.numsPlayers = numsPlayers;
        for (var i = 0; i < numsPlayers; i++) {
            this.players.push(new Player());
        }
        this.play();
    }

};