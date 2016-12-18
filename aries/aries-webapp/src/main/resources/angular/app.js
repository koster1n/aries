'use strict'

require('./css/style7.css');

require('./css/special.css');

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

require('./informationPage/informationPage.controller.js')(module);
require('./approach/approach.controller.js')(module);
require('./quiz/failed/failedModel.controller.js')(module);
require('./quizPage/quizPage.controller.js')(module);

require('./negotiate/negotiate.controller.js')(module);
require('./negotiate/prompts/message.controller.js')(module);


//directives.
require('./quiz/quiz.js')(module);
require('./loading/loading.js')(module);
require('./services/content.service.js')(module);

require('./routes.js')(module);

angular.element(document).ready(function() {
  angular.bootstrap(document, [module.name]);
});
