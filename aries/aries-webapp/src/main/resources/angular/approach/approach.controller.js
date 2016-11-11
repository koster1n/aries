'use strict';

module.exports = function(app) {
	app.controller('ApproachController', ApproachController);
}

require("./approach.css");

function ApproachController($scope, $stateParams, $uibModal, ContentService) {
	$scope.contentPromise = ContentService.getContent($stateParams.id).then(function(data){
		$scope.content = data;
	});
	$scope.id = $stateParams.id;
}
