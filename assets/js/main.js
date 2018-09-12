var game;

game = new Phaser.Game(975, 600, Phaser.AUTO, 'myCanvas'); // Creating the canvas (975X600 game area)

game.state.add('Menu', Menu); // Creating states, by giving them a name and mentioning the object containing the code for each state
game.state.add('Game', Game);
game.state.start('Menu'); // Initializing the menu state


