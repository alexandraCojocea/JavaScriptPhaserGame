
var  levelCompleted = {

    preload : function() {
        game.load.image('levelCompleted', 'assets/images/levelcomplete.png'); // Loading needed images
        game.load.image('backgroundlevel','assets/images/backgroundlevel.jpg');
    },

    create : function() {
        game.add.image(0, 0, 'backgroundlevel'); // Rendering background image
        this.add.button(240, 100, 'levelCompleted', this.nextLevel, this); // Create button to start next level
    },
    nextLevel: function () {
        this.state.start('Game'); //Switch to next level in the game state
    }

};
