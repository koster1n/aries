'use strict';

module.exports = function(app) {

}

require("./loading.css");

function loading() {
  return {
		restrict : 'E',
		scope : {
			promise : '='
		},
		controller : QuizController,
		template : require('html!./loading.html')
	}
}


function LoadingController($scope, QuizService) {
	
}
