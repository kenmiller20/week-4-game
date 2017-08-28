var crystalGame = {
		userScore: 0,
	    targetScore: 0,
	    numWins: 0,
	    numLosses: 0,


	 // Function that "restarts" the game by resetting all of the variables and hangman page
  	restartGame: function() {
		this.userScore = 0;
		this.targetScore = Math.floor((Math.random() * 120) + 1);

		$("#crystal-1").attr("value", Math.floor((Math.random() * 12) + 1));
		$("#crystal-2").attr("value", Math.floor((Math.random() * 12) + 1));
		$("#crystal-3").attr("value", Math.floor((Math.random() * 12) + 1));
		$("#crystal-4").attr("value", Math.floor((Math.random() * 12) + 1));	
		$("#wins").attr("html", "Wins: " + this.numWins);
		$("#losses").attr("html", "Losses: " + this.numLosses);

		console.log("numWins:", this.numWins);
		console.log("numLosses:", this.numLosses);
	},

  // Check if game was won
  // Criteria: all letters in selected word match the letters entered
  checkGameStatus: function(crystalVal) {
	    this.userScore += Number(crystalVal);
	    console.log("crystalVal:", crystalVal);
	    console.log("userScore:", this.userScore);
	    console.log("targetScore:", this.targetScore);

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

$(document).ready(function() {


	$(document).on("click", "img", function() {

		console.log($(this).attr("value"));

 		// Process user key press
  		crystalGame.checkGameStatus($(this).attr("value"));  
	});
});

