'use strict';

module.exports = function(app) {
	app.directive('quiz', quiz);
	app.controller('QuizController', QuizController);
	app.factory('QuizService', QuizService);
}

require("./quiz.css");

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

function QuizController($scope, $state, $uibModal, LoadingService, QuizService) {
	var answers = [];
	$scope.questionsPromise = QuizService.getQuiz($scope.quizId).then(function(data) {
		$scope.quiz = data;
		for(var i=0; i!= $scope.quiz.questions.length; i++) {
			answers[i] = -1;
		}
	});
	LoadingService.setLoadingPromise($scope.questionsPromise);


	$scope.checkAnswer = function(question, answer) {
		answers[question] = ($scope.quiz.questions[question].answer == answer);
		var wrong = 0;
		var answeredAll = true;
		angular.forEach(answers, function(answer) {
			if (answer == 0) {
				wrong++;
			} else if (answer == -1) {
				answeredAll = false;
			}
		});

		if (wrong > 1) {
			$uibModal.open({
				template : require('html!./failed/failedModel.view.html'),
				controller : "FailedModelController",
				backdrop : true,
				size: 'md'
			}).result.then(function(response) {
				$state.reload();
			});
		}
		if(answeredAll){
			$uibModal.open({
				template : require('html!./failed/success.view.html'),
				controller : "FailedModelController",
				backdrop : true,
				size: 'md'
			})
		}
	}
}

function QuizService($http) {
	return {
		getQuiz : function (quizId) {
			return $http.get("./api/quiz/" + quizId).then(function(response) {
				return response.data;
			});
		}
	}
}
