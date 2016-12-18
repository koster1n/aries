'use strict';

module.exports = function(app) {
	app.controller('MessageModelController', MessageModelController);
}

function MessageModelController($scope, $uibModalInstance, message) {
	$scope.message = message;
	$scope.cancel = function() {
		$uibModalInstance.close('cancel');
	}
}
