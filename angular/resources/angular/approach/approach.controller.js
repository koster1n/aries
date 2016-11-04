'use strict';

module.exports = function(app) {
	app.controller('ApproachController', ApproachController);
}

function ApproachController($scope, $stateParams, ContentService) {
	$scope.contentPromise = ContentService.getContent($stateParams.id).then(function(data){
		$scope.content = data;
	});
	// console.log($scope.content);
}
