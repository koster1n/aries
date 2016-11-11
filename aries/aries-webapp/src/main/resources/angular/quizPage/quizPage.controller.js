'use strict';

module.exports = function(app) {
	app.controller('QuizPageController', QuizPageController);
}

require("./quiz-page.css");

function QuizPageController($scope, $stateParams) {
  $scope.id = $stateParams.id;
}
