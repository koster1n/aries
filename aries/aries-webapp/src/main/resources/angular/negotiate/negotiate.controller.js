'use strict';

require('./negotiate.css');

module.exports = function(app) {
	app.controller('NegotiateController', NegotiateController);
}


var aggressiveResponse = [];

var empatheticResponse = [];

function NegotiateController($scope, $state, $timeout, $uibModal) {
	$scope.boss = generateBoss();
	$scope.employee = generateEmployeeGoals();

	$scope.history = [];


 	$scope.sendMessage = function(message, user){
		var output = {};
		output.text = message;
		output.user = user;
		$scope.history[$scope.history.length] = output;

		var updateScroll = document.getElementById("conversation");

		$timeout(function () {
			updateScroll.scrollTop = updateScroll.scrollHeight;
		});
	}

	$scope.emotionalResponse = function() {
		$scope.sendMessage($scope.employee.emotional, $scope.employee.name);

		if (boss.empathetic == 0) {
			$scope.endGameMessage($scope.employee.name + " Your fired");
		}

	}

	$scope.empatheticResponse = function() {
		$scope.sendMessage($scope.employee.empathetic, $scope.employee.name);

		if($scope.boss.empathetic < 10 && $scope.boss.patients > 0) {
			$scope.boss.empathetic++;
		}

		if ($scope.boss.patients == 0 ) {

		}

		var possibleSalary = 27 + 3*($scope.boss.empathetic/10);

		if ($scope.boss.empathetic >= 8) {
			if (possibleSalary > $scope.employee.offer.salary) {
				$scope.employee.offer.salary = possibleSalary;
			}
			$scope.employee.offer.jobSecurity = true;
			$scope.sendMessage("Well, I can offer you a raise of $" + $scope.employee.offer.salary + " and job security.", "boss");
		} else if ($scope.boss.empathetic >= 6) {

			$scope.employee.offer.salary = possibleSalary;
			$scope.sendMessage("Well, I can offer you a raise of $" + $scope.employee.offer.salary, "boss");
		} else if ($scope.boss.empathetic == 0 ){
			$scope.endGameMessage($scope.employee.name + " was fired");
		} else {
			$scope.sendMessage("I'm sorry " + $scope.employee.name + " I can't help you.", " boss");
		}


	}

	$scope.aggressiveResponse = function() {
		$scope.sendMessage($scope.employee.agressive, $scope.employee.name);
		$scope.boss.empathetic--;
		$scope.boss.agressive++;

		if ($scope.boss.empathetic == 0 ) {
			$scope.endGameMessage($scope.employee.name + " was fired");
		} else if ($scope.boss.agressive == 10 ) {
			$scope.endGameMessage($scope.employee.name + " Boss says some nasty things about your mother. Your fired");
		} else {
			$scope.sendMessage("I'm sorry " + $scope.employee.name + " I can't help you.", " boss");
		}
	}

	$scope.takeOffer = function() {
		if ($scope.employee.offer.salary >= 30 && $scope.employee.offer.jobSecurity) {
			$scope.endGameMessage($scope.employee.name + "You did well for your self!");
		} else {
			$scope.endGameMessage($scope.employee.name + "You could have done better.");
		}
	}

	$scope.useBatna = function() {
		$scope.sendMessage($scope.employee.batna, $scope.employee.name);
		$scope.endGameMessage($scope.employee.name + " finds out just how bad the economy really is. I guess you shouldn't have left...");
	}



	$scope.endGameMessage = function(message){
		$uibModal.open({
			template : require('html!./prompts/message.view.html'),
			controller : "MessageModelController",
			backdrop : true,
			size: 'md',
			resolve : {
				message : function() {
					return message;
				}
			}
		}).result.then(function(response) {
			$state.go('conflict.home');
		});
	}
}



// Generateing the people!
function generateBoss() {
	var boss = {};
	boss.name = "Boss";

	// Max empathy 10 minimum 0;
	boss.empathetic = 5;
	// Max 10: fire, minimum 0;
	boss.agressive = 5;
	boss.patients = 10;
	//
	return boss
}

function generateEmployeeGoals() {
	var employee = {};
	employee.name = "<insert name>";
	employee.primaryObjectives = [];
	employee.primaryObjectives = "";
	employee.secondaryObjectives =[];

	employee.emotional = "";
	employee.agressive = "So Jim, I feel I have been exceeding in my duties at work and I deserve way more compensation above what I am making now.";
	employee.empathetic = "I understand that the government is experiencing some financial constraints right now. As we have discussed my review, and it has gone well, I was wondering if there is any room for a larger wage increase to meet my competency level. ";

	employee.offer = {};
	employee.offer.salary = 27;
	employee.offer.jobSecurity = false;

	employee.batna = "* Leave your job to pursue other opportunities *";
	return employee;
}
