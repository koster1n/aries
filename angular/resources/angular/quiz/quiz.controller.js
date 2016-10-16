'use strict';

module.exports = function(app) {
	app.controller('QuizController', QuizController);
}

function QuizController($scope, QuizService) {
	$scope.questions = QuizService.getQuiz(0);
	
}
