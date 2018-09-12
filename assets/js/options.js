
var Options={

	preload:function(){
		game.load.image('option','assets/images/option.png'); // Loading images needed
		game.load.image('on','assets/images/on.png');
		game.load.image('off','assets/images/off.png');
		game.load.image('backgroundoption','assets/images/backgroundoption.jpg');
	},
	create: function () { 
		game.add.image(0, 0, 'backgroundoption');  // Rendering background
		this.add.button(380, 200, 'on', this.startSound, this); // Adding buttons to control sound
		this.add.button(600, 200, 'off', this.stopSound, this);
        this.add.button(420, 300, 'option', this.startMenu, this); // Button for going back to the menu state
    },
    startMenu:function(){
    	game.state.start('Menu'); // Changing to the menu state
    },
    startSound:function(){
    	game.sound.mute=false;  // Muting all the sounds
    },
    stopSound:function(){
    	game.sound.mute=true;  // Unmuting all the sounds
    }

}