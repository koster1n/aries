'use strict';

module.exports = function(app){
	app.config(routes);

	app.run(routeIntercept);
}

function routes($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/home');
	$urlRouterProvider.when('', '/home');

	$stateProvider
	.state('conflict', {
		url:'',
		template : require('html!./conflict/conflict.view.html')
	})

	.state('conflict.home', {
		title: "Home",
		url:'/home',
		template : require('html!./home/home.view.html'),
		controller : 'HomeController'
	})

	.state('conflict.informationPage', {
		title: "informationPage",
		url:'/informationPage/:chapterId',
		template : require('html!./informationPage/informationPage.view.html'),
		controller : 'InformationPageController',
		params: {
			chapterId: null,
		}
	})

	.state('conflict.approach', {
		title: "Approach",
		url:'/approach/:chapterId/:pageId',
		template : require('html!./approach/approach.view.html'),
		controller : 'ApproachController',
		params: {
			chapterId: null,
			pageId : null
		}
	})

	.state('conflict.quiz', {
		title: "Quiz",
		url:'/quizPage/:id',
		template : require('html!./quizPage/quizPage.view.html'),
		controller : 'QuizPageController',
		params: {
			id : null
		}
	})

	.state('conflict.negotiateDescription', {
		url:'/negotiateDescription',
		template : require('html!./negotiatorDescription/negotiatorDescription.view.html')
	})

	.state('conflict.negotiate', {
		url:'/negotiate',
		template : require('html!./negotiate/negotiate.view.html'),
		controller : 'NegotiateController',
	})
}

function routeIntercept($rootScope, $state, $http) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		$rootScope.pageTitle = toState.title;
	});

	$rootScope.$on("$routeChangeStart", function () {
      $rootScope.progressbar.start();
  });

  $rootScope.$on("$routeChangeSuccess", function () {
      $rootScope.progressbar.complete();
  });
}
