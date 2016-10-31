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
			url:'/informationPage',
			template : require('html!./informationPage/informationPage.view.html'),
			controller : 'InformationPageController',
			params: {
				id : null
			}
		})

		.state('conflict.approach1', {
			title: "Approach",
			url:'/approach1',
			template : require('html!./approach1/approach1.view.html'),
			controller : 'QuizController',
		})

		.state('conflict.game1', {
			url:'/game1',
			template : require('html!./game1/game1.view.html'),
			controller : 'Game1Controller',
			params: {
				id : null
			}
		})
}

function routeIntercept($rootScope, $state, $http) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		$rootScope.pageTitle = toState.title;
	});
}
