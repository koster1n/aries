'use strict';

module.exports = function(app) {
  app.directive('loading', loading);
	app.controller('LoadingController', LoadingController);
  app.factory('LoadingService', LoadingService);
}

require("./loading.css");

function loading() {
  return {
		restrict : 'E',
		scope : true,
		controller : LoadingController,
		template : require('html!./loading.html')
	}
}


function LoadingController($scope, LoadingService) {
  $scope.promise = LoadingService.getNumberOfLoadingPromise();
}

function LoadingService() {
  var promise = {};
  promise.count = 0;
	return {
		setLoadingPromise : function (newPromise) {
      promise.count++;
      newPromise.then(function(worked) {
        promise.count--;
      }, function(failed) {
        promise.count--;
      });
		},
    getNumberOfLoadingPromise : function () {
      return promise;
    }
	}
}
