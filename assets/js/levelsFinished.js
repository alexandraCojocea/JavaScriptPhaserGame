
var levelsFinished = {

    preload : function() {
        game.load.image('goBack', 'assets/images/back.png'); // Loading needed images
        game.load.image('backgroundlevel','assets/images/backgroundlevel.jpg');
        
    },

    create: function () {
        game.add.image(0, 0, 'backgroundlevel'); // Rendering background image
        this.add.button(240, 100, 'goBack', this.goBackToMenu, this); // Creting button 
    },

    goBackToMenu: function () {
        this.state.start('Menu'); // Changing the state to the menu state
    }

};