app.config( function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'app/components/home/v.html',
		controller: 'homeController',
		controllerAs: 'hc'
	})
	.when('/category/:ctg', {
		templateUrl: 'app/components/home/v.html',
		controller: 'homeController',
		controllerAs: 'hc'
	})
	.otherwise({
		redirectTo: '/'
	});

} );