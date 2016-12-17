'use strict';

module.exports = function(app) {
	app.controller('InformationPageController', InformationPageController);
}

require('./infoPage.css');

function InformationPageController($scope, $stateParams, ContentService, LoadingService) {

	$scope.workCited = []
	$scope.infoPromise = ContentService.getContentInfo($stateParams.chapterId).then(function(data){
		$scope.workCited = data;
	});

	LoadingService.setLoadingPromise($scope.infoPromise);

	$scope.chapterId = $stateParams.chapterId;


}
