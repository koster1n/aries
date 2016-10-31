'use strict';

module.exports = function(app) {
	app.controller('InformationPageController', InformationPageController);
}

function InformationPageController($scope) {
  $scope.info = {};
  $scope.test = "test";
  $scope.info.headlines = [];
  $scope.info.headlines[0] = {};
  $scope.info.headlines[0].title = "Dogs";
  $scope.info.headlines[0].info = "Are cool";

  $scope.info.headlines[1] = {};
  $scope.info.headlines[1].title = "Dogs2";
  $scope.info.headlines[1].info = "Are smart";

  $scope.info.citeing = "koster 2016";

  console.log($scope);

}
