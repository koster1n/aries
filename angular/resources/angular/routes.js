'use strict';

module.exports = function(app){
	app.config(routes);
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
				url:'/home',
				template : require('html!./home/home.view.html'),
				controller : 'HomeController'
		})

		.state('conflict.quiz', {
				url:'/quiz/:id',
				template : require('html!./quiz/quiz.view.html'),
				controller : 'QuizController',
				params: {
					id : null
				}
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
