'use strict';

module.exports = function(app) {
	app.controller('QuizController', QuizController);
}

function QuizController($scope, QuizService) {
	$scope.questionsPromise = QuizService.getQuiz(0).then(function(data){
		$scope.quiz = data;
	});

}
