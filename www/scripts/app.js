'use strict';

angular.module("azucar", [])
	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider.when("/", {
			controller: MainController,
			templateUrl: "partials/intro.html"
		})
		.when("/channel", {
			controller: ChannelController,
			templateUrl: "partials/channel.html"
		})
		.when("/events", {
			controller: EventController,
			templateUrl: "partials/events.html"
		})
		.when("/store", {
			controller: StoreController,
			templateUrl: "partials/store.html"
		})
		.when("/team", {
			controller: TeamController,
			templateUrl: "partials/team.html"
		})
	}]);