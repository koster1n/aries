'use strict';

module.exports = function(app) {
	app.controller('FailedModelController', FailedModelController);
}

function FailedModelController($scope, $uibModalInstance) {
	$scope.cancel = function() {
		$uibModalInstance.close('cancel');
	}
}
