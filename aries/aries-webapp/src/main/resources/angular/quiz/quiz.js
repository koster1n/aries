'use strict';

module.exports = function(app) {
	app.directive('quiz', quiz);
	app.controller('QuizController', QuizController);
	app.factory('QuizService', QuizService);
}

function quiz() {
  return {
		restrict : 'E',
		scope : {
			quizId: '='
		},
		controller : QuizController,
		template : require('html!./quiz.html')
	}
}

function QuizController($scope, QuizService) {
	$scope.questionsPromise = QuizService.getQuiz($scope.quizId).then(function(data) {
		$scope.quiz = data;
	});
}

function QuizService($http) {
	return {
		getQuiz : function (quizId) {
			return $http.get("./api/quiz/" +quizId).then(function(response) {
				return response.data;
			});
		}
	}
}
