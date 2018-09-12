var loopSprite=0; // Variable used to make the update fuction to run slower then normal for the player sprite
var twoSRight=true; // The following 4 variables are used to prevent player from pushing 2 stars at once from 4 directions
var twoSDown=true;
var twoSUp=true;
var twoSLeft=true;

var currentLevel=1;//The number of the level the player is currently on

var player, squareSize, score, scoreTextValue, levelTextValue,
    textStyle, lastCursor, nrStars, n, lastY,lastX, level, pointSound, maximumLevel, restartButton; // Defining numerous variables

var Game = {
    preload : function() {
        game.load.image('sun','assets/images/sun.png'); //Loading the required images and sounds for the sun, stars, walls and home icons 
        game.load.image('star','assets/images/star.png');
        game.load.image('square','assets/images/square.png');
        game.load.image('home','assets/images/home.png');
        game.load.image('back','assets/images/back.jpg');
        game.load.image('von','assets/images/soundon.png');
		game.load.image('voff','assets/images/soundoff.png');
        game.load.audio('point','assets/sound/point.mp3');
        game.load.audio('mainSong','assets/sound/duck.mp3');
    },

    create : function() {
    	game.state.add('levelCompleted', levelCompleted); //Adding the next level state
    	game.state.add('levelsFinished', levelsFinished); //Adding the all levels finished state
        game.physics.startSystem(Phaser.Physics.ARCADE); //Activating the internal physics system

        squareSize = 15;                			// The length of a side of the squares.
        score = 0;                      			// Game score. 
        game.add.image(0, 0, 'back');				// Rendering background image
        nrStars = 10; 								// Number of stars in play
        pointSound = game.add.audio('point');		// Adding sounds 
        backgroundSound = game.add.audio('mainSong');
        backgroundSound.play();						// Playing background song
        maximumLevel=3;								// Variable used to determine when the levelsFinished state should run
       	
        player=game.add.sprite(15, 30, 'sun');  	// Generate the player icon
        game.physics.arcade.enable(player);			// Activating the physics properties of the player sprite
        this.walls = game.add.physicsGroup(); 		// Creating physics group for walls
        this.stars = game.add.physicsGroup(); 		// Creating physics group for stars
        this.gate = game.add.physicsGroup();  		// Creating physics group for home  

        this.add.button(855, 15, 'von', this.startSound, this); // Adding buttons to control sound
		this.add.button(870, 15, 'voff', this.stopSound, this);   

        textStyle = { 
            font: "bold 15px sans-serif", 
            fill: "#ff0", 
            align: "center" 
        }; // CSS for the score

        game.add.text(30, 15, "Score", textStyle); 	// Rendering the score on the canvas
        scoreTextValue = game.add.text(90,15, score.toString(), textStyle); //Rendering the value of the score on the canvas

        // level
        game.add.text(110, 15, "Level", textStyle); 
        levelTextValue = game.add.text(170,15, currentLevel.toString(), textStyle); //Rendering the value of the score on the canvas

        // restart game
        restartButton = game.add.text(900, 15, "Restart", textStyle);
        restartButton.inputEnabled = true;
        restartButton.input.useHandCursor = true;
        restartButton.events.onInputDown.add(restart, this);

		function restart() {
			game.state.start("Game"); 
		}

        if(currentLevel==maximumLevel){ // If function used to make sure that when the player tries to replay the game, they start playing from level 1 onwards 
        	currentLevel=1;
        }

        //The following array was inspired by http://www.lessmilk.com/tutorial/2d-platformer-phaser
        if(currentLevel==1){
	        level=[
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'x                                        x                      x',
	        'x                     s                  x           !          x',
	        'x                                        x                      x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                             x',
	        'x           x                                                   x',
	        'x           x                                                   x',
	        'x           x                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'x                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'x                            x                                  x',
	        'x                            x                                  x',
	        'x                 s          x                   x              x',
	        'x       s xxxxxxxxxxxxxxxxxxxx                   x              x',
	        'x                                                x              x',
	        'x                                                x              x',
	        'x            xxxxxxxxxxxxxxxxxxxxxxxxxxxx        x              x',
	        'x            xxxxxxxxxxxxxxxxxxxxxxxxxxxx        x              x',
	        'x                                                x              x',
	        'x                                                x          s   x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxx                s       x              x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'xx        s                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'xx                             x                 x              x',
	        'xx                             x        s        x      s       x',
	        'xx                             x                 x              x',
	        'xx                             x                 x              x',
	        'xx                             x                 x              x',
	        'xx                             x                 x              x',
	        'xx                             x                 x              x',
	        'xx                             x                 x              x',
	        'xx                             x                 x              x',
	        'xx       xxxxxxxxxxxxxxxxxxxxxxx        x                       x',
	        'xx       xxxxxxxxxxxxxxxxxxxxxxx        x               xxxxxxxxx',
	        'xx                                      x                   s   x',
	        'xx                   s                  x                       x',
	        'xx                                      x                       x',
	        'xx                         xxxxxxxxxxxxxxxxxxxxxxxx             x',
	        'xx                                                              x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',                                                            
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', ];  // Array that displays the layout of level 1
    	}

    	if(currentLevel==2){
	        level=[
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'x                  x                                            x',
	        'x        s         x                                        s   x',
	        'x                  x    s                                       x',
	        'x                  xxxxxxxxxxxxxxxxxxxxxx                       x',
	        'x                  x                                            x',
	        'x                  x                         xxxxxxxxxxxxxxxxxxxx',
	        'x                  x                                            x',
	        'x                  x        xxxxxxxxxxxxxxxxxxxxx               x',
	        'x                                    x               s          x',
	        'x                                    x                          x',
	        'x                                    x                          x',
	        'x                                    x                          x',
	        'x       xxxxxxxxxxxxxxxxxxxxx        xxxxxxxxxxxxxxxxxxxxxx     x',
	        'x                 x                                             x',
	        'x                 x                                             x',
	        'x                 x                                             x',
	        'x                 x                         xxxxxxxxxxxxxxxxxxxxx',
	        'x       s                                                       x',
	        'x                                                            s  x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    x              x',
	        'x                           x                    x  s           x',
	        'x                        s  x                    x              x',
	        'x                           x                    x              x',
	        'x                           x                    x              x',
	        'x           xxxxxxxxxxxxxxxxx                                   x',
	        'x                           x                                   x',
	        'x                           x                    x              x',
	        'x                  x                             x              x',
	        'x                  x                     xxxxxxxxxxxxxxxxxxxxxxxx',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 x !        x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 x          x',
	        'x                  x                                 x          x',
	        'x      s           x                                            x',
	        'x                  x                                            x',
	        'x                                  xxxxxxxxxxxxxx     s         x',
	        'x                                                               x',
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',                                                                                       
	        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'];  // Array that displays the layout of level 2
    	}
        for (var i = 0; i < level.length; i++) { // Rendering the array on the screen
            for (var j = 0; j < level[i].length; j++) {
                if (level[i][j] == 'x') {
                    this.walls.create(squareSize*j, squareSize*i, 'square') // Creating a wall and adding it to the walls group
                }
                else if (level[i][j] == 's') {
                    var star = game.add.sprite(squareSize*j, squareSize*i, 'star'); // Creating a star and adding it to the stars group
                    this.stars.add(star);
                }
                else if (level[i][j] == '!') {
                    var home = game.add.sprite(squareSize*j, squareSize*i, 'home'); // Creating the home and adding it to the gate group
                    this.gate.add(home);
                }
            }
        }     
    },
    update: function() {
    if(twoSRight==true){ // Testing if the sprite is tryong to push 2 stars at once
	    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && loopSprite>=5) //Testing if the right key is pressed
	    {
	        player.x+=squareSize; //Moving the player right
	        lastCursor='right';	  //Saving the pressed key for it to be used in the wallcollision function
	        loopSprite=0;		  //Restoring the variable to the initial value
		}
	}
	if(twoSUp==true){ // Testing if the sprite is tryong to push 2 stars at once
	     if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&& loopSprite>=5) //Testing if the up key is pressed
	    {
	        player.y-=squareSize; //Moving the player up
	        lastCursor='up';
	        loopSprite=0;
	    }
	}
    if(twoSDown==true){ // Testing if the sprite is tryong to push 2 stars at once
	     if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&& loopSprite>=5) //Testing if the down key is pressed
	    {
	        player.y+=squareSize; //Moving the player down
	        lastCursor='down';
	        loopSprite=0;
	    }
	}
    if(twoSLeft==true){ // Testing if the sprite is tryong to push 2 stars at once
	   	 if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)&& loopSprite>=5) //Testing if the left key is pressed
	    {
	        player.x-=squareSize; //Moving the player left
	        lastCursor='left';
	        loopSprite=0;
	    }

	}
    loopSprite++; // Increasing the variable in charge with slowing down the update function for the player sprite

	this.wallCollision(player,this.walls,this.stars); // Check the collision of the player sprite and of the stars with the wall
	this.starCollision(player,this.stars);  		  // Check for star collisions with the player sprite
	this.homeCollision(player,this.gate,this.stars);  // Check the collision of the player sprite and the stars with the home
},
wallCollision: function(a,b,c) {
	var k=game.physics.arcade.overlap(a,b); //Checking for collision of the player sprite with the walls
    if(k==true && lastCursor=='down'){ // Making the walls "solid" for the player sprite.Here the lastCursor variable is used to accomplish that.    
    	a.y-=squareSize;
    } else if(k==true && lastCursor=='up'){
    	a.y+=squareSize;
    } else if(k==true && lastCursor=='left'){
    	a.x+=squareSize;
    }else if(k==true && lastCursor=='right'){
    	a.x-=squareSize;
    }

    for(var i=0; i<c.length;i++){
    	n=game.physics.arcade.overlap(b,c.children[i]); //Checking for collision of the star sprites with the walls
		if(n==true){
			if(lastCursor=='down'){ // Making the walls "solid" for the stars sprite.Here the lastCursor variable is used to accomplish that.  
  				c.children[i].y-=squareSize;
  				a.y-=squareSize; // Making sure that the sprite also does not move into the star	
		    }else if(lastCursor=='up'){
		    	c.children[i].y+=squareSize;
		    	a.y+=squareSize;	
		    }else if( lastCursor=='left'){
		    	c.children[i].x+=squareSize;
		    	a.x+=squareSize; 	
		    }else if(lastCursor=='right'){
		    	c.children[i].x-=squareSize;
		    	a.x-=squareSize;	
		    }
		}
	}
	
},
starCollision: function(a,b) {
	//Function that checks the collision of one of the sprites inside the stars group with the player sprite 
	
	for(var i=0; i<b.length;i++){ 
		if(game.physics.arcade.overlap(a,b.children[i])==true){ // Checking if the sprite and one of the stars collides
			if(lastCursor=='down' && n==false && twoSDown==true){ // Checking if the star does not collide with a wall and the sprite isnt trying to push 2 stars
  				b.children[i].y+=squareSize;	//Moving the star down
		    } else if(lastCursor=='up'&& n==false && twoSUp==true){
		    	b.children[i].y-=squareSize;	//Moving the star up
		    } else if( lastCursor=='left'&& n==false && twoSLeft==true){
		    	b.children[i].x-=squareSize;	//Moving the star left
		    }else if(lastCursor=='right'&& n==false && twoSRight==true){
		    	b.children[i].x+=squareSize;	//Moving the star right
		    }
		}
	}  

	for(var i=0; i<b.length;i++){  // Checking if stars collide with each other
		for(var j=0; j<b.length;j++){
			//Checking if the sprite is tryng to push 2 stars at once
			if(b.children[i].x==(b.children[j].x-squareSize) && b.children[i].y==b.children[j].y && b.children[j].y==a.y && (b.children[j].x+squareSize)==a.x){ 
				twoSLeft=false; // Variable used to make sure that the sprite does not push 2 stars at once
				lastY=a.y; 		// Retaining the last y position of the sprite
			}
			if(b.children[i].x==(b.children[j].x+squareSize) && b.children[i].y==b.children[j].y && b.children[j].y==a.y && (b.children[j].x-squareSize)==a.x){
				twoSRight=false;
				lastY=a.y;
			}
			if(b.children[i].x==b.children[j].x && b.children[i].y==(b.children[j].y+squareSize) && b.children[j].x==a.x && (b.children[i].y+squareSize)==a.y){
				twoSUp=false;
				lastX=a.x; // Retaining the last x position of the sprite
			}
			if(b.children[i].x==b.children[j].x && b.children[i].y==(b.children[j].y+squareSize) && b.children[j].x==a.x && (b.children[j].y-squareSize)==a.y){
				twoSDown=false;
				lastX=a.x;
			}				
		}
	} 

	if(twoSLeft==false && a.y!=lastY){ // Checking if the sprite tries to move in another y direction 
		twoSLeft=true;
	}
	if(twoSRight==false && a.y!=lastY){ // Checking if the sprite tries to move in another y direction 
		twoSRight=true;
	}
	if(twoSUp==false && a.x!=lastX){ // Checking if the sprite tries to move in another x direction 
		twoSUp=true;
	}
	if(twoSDown==false && a.x!=lastX){ // Checking if the sprite tries to move in another x direction 
		twoSDown=true;
	}
      
},
homeCollision: function(a,b,c) {
	var p=game.physics.arcade.overlap(a,b); //Checking for collision of the player sprite with the home

    if(p==true && lastCursor=='down'){ // Making the home "solid" for the stars sprite.Here the lastCursor variable is used to accomplish that.  
    	a.y-=squareSize;
    } else if(p==true && lastCursor=='up'){
    	a.y+=squareSize;
    }else if(p==true && lastCursor=='left'){
    	a.x+=squareSize;
    } else if(p==true && lastCursor=='right'){
    	a.x-=squareSize;
    }

    for(var i=0; i<c.length;i++){
    	var m=game.physics.arcade.overlap(b,c.children[i]); //Checking for collision of the star sprites with the home
		if(m==true){
			score++; 								//Increasing the score
			pointSound.play(); 						//Playing the point sound
    		c.children.splice(i,1); 				//Destroying the star
    		scoreTextValue.text = score.toString(); //Rendering the new score on the screen
		}
	}

	if(score==nrStars){ 							//Checking if all the stars have been taken home
		currentLevel++; 
		levelTextValue.text = currentLevel.toString(); 							//Incresing the level
		if(maximumLevel==currentLevel){ 			//Cheking if all the levels have been completed
			game.state.start('levelsFinished'); 	//Initializing the levels finished state
		} else {
		game.state.start('levelCompleted');}	 	//Initializing the next level state
	}

},	
startSound:function(){
  	game.sound.mute=false;  // Muting all the sounds
},
stopSound:function(){
    game.sound.mute=true;  // Unmuting all the sounds
}

};

window.addEventListener("keydown", function(e) { // Code preventing the page moving with the keyboards

    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);	