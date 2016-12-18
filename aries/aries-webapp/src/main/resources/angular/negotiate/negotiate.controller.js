'use strict';

require('./negotiate.css');

module.exports = function(app) {
	app.controller('NegotiateController', NegotiateController);
}


var objectives = [
	"raise of $30.00/hr"

];


function NegotiateController($scope) {
	$scope.boss = generateBoss();
	$scope.employee = generateEmployeeGoals();

	$scope.history = [];


 	$scope.sendMessage = function(message, user){
		var output = {};
		output.text = message;
		output.user = user;
		$scope.history[$scope.history.length] = output;
	}

	$scope.emotionalResponse = function() {
		$scope.sendMessage($scope.employee.emotional, $scope.employee.name);
	}

	$scope.empatheticResponse = function() {

		$scope.sendMessage($scope.employee.empathetic, $scope.employee.name);
	}

	$scope.aggressiveResponse = function() {
		$scope.sendMessage($scope.employee.agressive, $scope.employee.name);
	}

	$scope.useBatna = function() {
		$scope.sendMessage($scope.employee.batna, $scope.employee.name);
	}
}


function generateBoss() {
	var boss = {};
	boss.name = "Boss";

	boss.empathetic = 5;
	boss.agressive = 5;

	boss.employeeEmpathetic = 0;
	boss.employeeAgressive = 0;

	return boss
}

function generateEmployeeGoals() {
	var employee = {};
	employee.name = "Employee";
	employee.primaryObjectives = [];
	employee.primaryObjectives = "";
	employee.secondaryObjectives =[];

	employee.emotional = "";
	employee.agressive = "So Jim, I feel I have been exceeding in my duties at work and I deserve way more compensation above what I am making now.";
	employee.empathetic = "I understand that the government is experiencing some financial constraints right now. As we have discussed my review, and it has gone well, I was wondering if there is any room for a larger wage increase to meet my competency level. ";

	employee.batna = "* Leave your job to pursue other opportunities *";
	return employee;
}
