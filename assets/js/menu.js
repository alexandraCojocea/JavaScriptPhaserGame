
var Menu = {

    preload : function() {
        game.load.image('logo','assets/images/logo.png'); // Loading all the images needed for this tate
        game.load.image('start','assets/images/start.png');
        game.load.image('options','assets/images/options.png');
        game.load.image('instructions','assets/images/instructions.png');
        game.load.image('background','assets/images/background.jpg');
        game.state.add('Instructions', Instructions); // Adding 2 more states
        game.state.add('Options', Options); 
    },

    create: function () {
        game.add.image(0, 0, 'background');  // Rendering the background picture
        this.add.button(240, 50, 'logo', this.startGame, this); // Adding buttons to the images

        this.startBtn = this.add.button(420, 200, 'start', this.startGame, this);
        this.startBtn.input.useHandCursor = true;

        this.instructionsBtn = this.add.button(420, 300, 'instructions', this.startInstructions, this);
        this.instructionsBtn.input.useHandCursor = true;

        this.optionsBtn = this.add.button(420, 400, 'options', this.startOptions, this);
        this.optionsBtn.input.useHandCursor = true;
        
    },
    startGame: function () {
        this.state.start('Game'); // Change the state to the actual game.
        this.input.useHandCursor = true;
    },
    startInstructions: function () {
        this.state.start('Instructions'); // Change the state to the instruction state.
    },
    startOptions: function () {
        this.state.start('Options'); // Change the state to option state.
    }

};


   

