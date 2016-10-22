'use strict';

module.exports = function(app) {
	app.factory('QuizService', QuizService);
}

function QuizService($http) {
	return {
		getQuiz : function (id) {
			return $http.get("./api/quiz/" +id).then(function(response) {
				return response.data;
			});
		}
	}
}
