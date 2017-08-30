var crystalGame = {
		userScore: 0,
	    targetScore: 0,
	    numWins: 0,
	    numLosses: 0,


	// Generate random # between min and max values
	randomIntFromInterval: function(min ,max) 
	{
	    return Math.floor(Math.random() * (max-  min + 1) + min);
	},

	// Function that "restarts" the game by 
	// Generating new values for each crystal and target score, setting user score to 0
  	restartGame: function() {
		this.userScore = 0;
		this.targetScore = this.randomIntFromInterval(19, 120);
		
		$("#user-score").html(this.userScore);
		$("#target-score").html(this.targetScore);
		$("#crystal-1").attr("value", this.randomIntFromInterval(1, 12));
		$("#crystal-2").attr("value", this.randomIntFromInterval(1, 12));
		$("#crystal-3").attr("value", this.randomIntFromInterval(1, 12));
		$("#crystal-4").attr("value", this.randomIntFromInterval(1, 12));
		$("#wins").html("Wins: " + this.numWins);
		$("#losses").html("Losses: " + this.numLosses);
	},

  	// Check if game was won, lost or still playing 
  	// Win: user score = target score
  	// Lose: user score > target score 
  	checkGameStatus: function(crystalVal) {
	    this.userScore += Number(crystalVal);
	    $("#user-score").html(this.userScore);

	    // Check if user numWins or losses
	    if (this.userScore === this.targetScore) {
	        this.numWins += 1;
	        this.restartGame();
	    }
	    else if (this.userScore > this.targetScore) {
	        this.numLosses += 1;	  
	       	this.restartGame();
	    }
  	},	
};

// Initialize when page loads
crystalGame.restartGame();

// When page is loaded
$(document).ready(function() {

	// Process mouse click on crystals
	$(document).on("click", "img", function() {

 		// Check if game was won, lost or still in play
  		crystalGame.checkGameStatus($(this).attr("value"));  
	});
});

