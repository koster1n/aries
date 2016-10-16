'use strict';

module.exports = function(app) {
	app.factory('QuizService', QuizService);
}

function QuizService($http) {
	return {
		getQuiz : function (id){
			var questions = [];
			questions[0] = {};
			questions[0].question = "What is your name??";
			questions[0].options = [];
			questions[0].options[0] = "Nobody";
			questions[0].options[1] = "Arthur, King of the Britians";
			questions[1] = {};
			questions[1].question = "What is your quest?";
			questions[1].options = [];
			questions[1].options[0] = "Not a clue.";
			questions[1].options[1] = "To seek the Holy Grail";
			questions[1].options[2] = "To pass this class";
			questions[2] = {};
			questions[2].question = "what is the airspeed velocity of an unladen swallow?";
			questions[2].options = [];
			questions[2].options[0] = "Not a clue.";
			questions[2].options[1] = "What kind?";
			return questions;
		}
	}
}
