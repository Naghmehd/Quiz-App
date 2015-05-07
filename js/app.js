$(document).ready(function) {
	var topQuestion =[{
		firstQuestion: "Which country did Tea originate?",
		choice: ["England", "China", "India", "Japan"],
		correct: 1,
		fact: "Tea orginated in China as medicinal drink."
	},
	secondQuestion: "Who brought Tea to the West?",
	choice: ["Portuguese", "English", "American", "Indian"],
	correct: 0,
	fact: "Tea was introduced to Portuguese in China during the 16th centurey."
	},
	thirdQuestion: "Which country consumes the most Tea?",
	choice: ["India", "Ireland", "Turkey", "USA"],
	correct: 2,
	fact: "Turkish consume 7pound of Tea per person per year."
	},
	fouthQuestion: "Where did Chai Tea originate?",
	choice: ["India", "Russia", "China", "Iran"],
	correct: 0,
	fact: "Early 1900s, the first Chai tea was introduced in India."
	},
	fithquestion: "ICe Tea is native to which part of the US?",
	choice: ["central", "southwest", "west", "southeastern"],
	correct: 3,
	fact: "In the US 85% of Tea consumtion is Ice Tea."
}	}]

var numberCorrect = 0;
var currentQuestion = 0;

$("#topQuestion").on("click", "#submit", function(){
	
})

$("#topQuestion").on("click", "#retryButton", function(){
	 
})
}