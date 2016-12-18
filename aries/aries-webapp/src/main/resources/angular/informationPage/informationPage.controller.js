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


	$scope.text ="Tutorial #1\n\n" +

"	William Ury’s (2007) Five Barriers to Cooperation\n" +
"	Body Language and Negotiation\n\n" +

"	Tutorial # 2\n\n" +

"	Preparation\n" +
"	Interests\n" +
"	Options\n" +
"	Alternatives and your BATNA\n" +
"	Proposals\n\n" +

"	Quiz\n\n" +

"	Negotiator 3000\n" +
"	Sources\n\n" +

"		1. William Ury (2007) Getting Past NO: Negotiating in Difficult Situations. Bantam Books Publishing, 3rd Edition.\n" +
"		2. Amy Cuddy (2012) “Your body language shapes who you are” TEDTalks. Website: https://www.ted.com/speakers/amy_cuddy\n\n" +

	"Special acknowledgment to Laurie Harding-Russell, who was programmer extraordinaire on the project!"
}
