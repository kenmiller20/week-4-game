
$(document).ready(function() {

	var restartGame = function() {
		var userScore = 0;
	    var targetScore = 0;
	    var wins = 0;
	    var losses = 0;
	};

	$(document).on("click", "img", function() {

	    userScore =  userScore + Number($(this).attr("value"));
	    console.log("userScore:", userScore);

	    // Check if user wins or losses
	    if (userScore === targetScore) {
	        restartGame();

	        wins += 1;
	        targetScore = Math.random();
			userScore = 0;
	    }
	    else if (userScore > targetScore) {
	    	restartGame();
	        
	        losses += 1;
	        	
	        targetScore = Math.random();
			userScore = 0;
	    }
	});


});

