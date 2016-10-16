'use strict';

module.exports = function(app) {
	app.controller('Game1Controller', Game1Controller);
}

function Game1Controller($scope) {

	var game = {};
	game.view = document.getElementsByClassName('GameView')[0];

}
