'use strict';

require('./negotiate.css');

module.exports = function(app) {
	app.controller('NegotiateController', NegotiateController);
}


var aggressiveResponse = [
	'Jim, I feel like that is a ridiculous amount to offer, given my productivity level at work.',
	'I want a raise that equals my productivity levels at work.',
	'It would be an insult to my work ethic to accept an offer that low.',
	'Can’t you offer me any kind of permanent position? I don’t care about the others in the office.',
	'Why should the government’s mismanagement of funds be my fault? I deserve this raise!',
	'I want at least $35.00/hour, and I am committed to leaving if I can’t get this.',
	'Other people in the office are ridiculously slow at their job, I deserve compensation!'
];

var empatheticResponse = [
	'Jim, I need to start saving for my children’s education, and this offer unfortunately does not allow me to do this.',
	'Jim, is there any way you could increase this offer? I understand the financial constraints, but I need to think about the future and I would like that future to be with the Ministry of Justice.',
	'I would very much like to accept that offer, but I really need a little bit more, is there anything in the budget?',
	'I really love this work environment, and this I could continue excelling at my current position, but I really need more job security.',
	'Jim, you know I appreciate your work and the hard situation you have been put in. Can we go any higher with this raise? Or possibly more job] security?',
	'I will need some job security to allow me to buy a house for my children, is there any way we could include this instead of a higher wage?',
	'Jim, I understand you need to consider your interests in this, and that there are others in the office. However, I need to think of my family, so is there any more you can offer me?'
];

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

	$scope.response = function(type){
		console.log(type);
		if($scope.boss.patients <= 0) {
			$scope.endGameMessage("*Jim got bored and left.*");
		}

		if(type == "empathetic") {
			$scope.empatheticResponse();
		} else if(type == "aggressive"){
			$scope.aggressiveResponse();
		}

		var posEmp =Math.floor(Math.random() * empatheticResponse.length);
		var posAgr =Math.floor(Math.random() * aggressiveResponse.length);

		$scope.employee.empathetic = empatheticResponse.splice(posEmp, 1);
		$scope.employee.empathetic = $scope.employee.empathetic[0];
		$scope.employee.agressive = aggressiveResponse.splice(posAgr, 1)
		$scope.employee.agressive = $scope.employee.agressive[0];

		$scope.boss.patients--;
	}

	$scope.emotionalResponse = function() {
		$scope.sendMessage($scope.employee.emotional, $scope.employee.name);

		if (boss.empathetic == 0) {
			$scope.endGameMessage($scope.employee.name + " Your fired");
		}

	}

	$scope.empatheticResponse = function() {
		$scope.sendMessage($scope.employee.empathetic, $scope.employee.name);

		if($scope.boss.empathetic < 10) {
			$scope.boss.empathetic++;
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
			$scope.sendMessage("I'm sorry " + $scope.employee.name + " I can't help you.", "boss");
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
			$scope.sendMessage("I'm sorry " + $scope.employee.name + " I can't help you.", "boss");
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
	boss.patients = 7;
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
