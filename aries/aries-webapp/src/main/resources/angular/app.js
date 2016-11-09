'use strict'

// require('./css/style.css');
// require('./css/style1.css');
// require('./css/style2.css');
// require('./css/style3.css');
// require('./css/style4.css');
// require('./css/style5.css');
// require('./css/style6.css');
// require('./css/style7.css');
require('./css/Nov8.css');

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

require('./approach/approach.controller.js')(module);
require('./informationPage/informationPage.controller.js')(module);

require('./fun/fun.controller.js')(module);


//directives.
require('./quiz/quiz.js')(module);
require('./services/content.service.js')(module);

require('./routes.js')(module);

angular.element(document).ready(function() {
  angular.bootstrap(document, [module.name]);
});
