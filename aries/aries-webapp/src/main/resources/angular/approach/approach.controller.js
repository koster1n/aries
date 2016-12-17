'use strict';

module.exports = function(app) {
	app.controller('ApproachController', ApproachController);
}

require("./approach.css");

function ApproachController($scope, $stateParams, $uibModal, ContentService, LoadingService) {
	$scope.contentPromise = ContentService.getContent($stateParams.chapterId, $stateParams.pageId).then(function(data){
		$scope.content = data;
	});

	LoadingService.setLoadingPromise($scope.contentPromise);
	$scope.chapterId = $stateParams.chapterId;
	$scope.pageId = +$stateParams.pageId + 1;
}
