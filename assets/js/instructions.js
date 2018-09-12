
var Instructions={

	preload:function(){
		game.load.image('instruction','assets/images/instruction.png'); // Loading the images needed
		game.load.image('backgroundinfo','assets/images/backgroundinfo.jpg');
	},
	create: function () {
		game.add.image(0, 0, 'backgroundinfo'); // Rendering background image
        this.add.button(220, 100, 'instruction', this.startMenu, this); // Adding buttons
    },
    startMenu:function(){
    	game.state.start('Menu'); // Changing to the menu state
    }
}