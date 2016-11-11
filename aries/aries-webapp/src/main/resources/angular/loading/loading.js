'use strict';

module.exports = function(app) {
  app.directive('loading', loading);
	app.controller('LoadingController', LoadingController);
}

require("./loading.css");

function loading() {
  return {
		restrict : 'E',
		scope : {
			promise : '='
		},
		controller : LoadingController,
		template : require('html!./loading.html')
	}
}


function LoadingController($scope) {
  $scope.loading = true;
  $scope.promise.then(function(greeting) {
    $scope.loading = false;
  }, function(reason) {
    $scope.loading = false;
  });

}
