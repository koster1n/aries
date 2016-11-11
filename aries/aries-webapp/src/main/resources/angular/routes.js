'use strict';

module.exports = function(app){
	app.config(routes);

	app.run(routeIntercept);
}

function routes($urlRouterProvider, $stateProvider) {
	$rootScope.progressbar = ngProgressFactory.createInstance();

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
		url:'/informationPage/:id',
		template : require('html!./informationPage/informationPage.view.html'),
		controller : 'InformationPageController',
		params: {
			id : null
		}
	})

	.state('conflict.approach', {
		title: "Approach",
		url:'/approach/:id',
		template : require('html!./approach/approach.view.html'),
		controller : 'ApproachController',
		params: {
			id : null
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

	.state('fun', {
		url:'/fun',
		template : require('html!./fun/fun.view.html'),
		controller : 'FunController',
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
