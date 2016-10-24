'use strict'

require('./css/style.css');

require('angular');
require('angular-ui-router');
require('angular-animate');

require("font-awesome-webpack");

var module = angular.module('conflictResolutionTraining', [
    require('angular-ui-bootstrap'),
    'ngAnimate',
    'ui.router'
]);
require("bootstrap-webpack");

require('./home/home.controller.js')(module);

require('./approach1/approach1.controller.js')(module);

require('./game1/game1.controller.js')(module);

//directives.
require('./quiz/quiz.js')(module);

require('./routes.js')(module);

// angular.element(document).ready(function() {
//   angular.bootstrap(document, [module.name]);
// });
