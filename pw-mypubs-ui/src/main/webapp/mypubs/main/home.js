(function() {


angular.module('pw.home', ['ngRoute'])


.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/Home', {
			templateUrl: 'mypubs/main/home.html',
			controller: 'homeCtrl',
			openAccess: true
		})
		$routeProvider.otherwise({
			redirectTo: '/Home'
		})
	}
])


.controller('homeCtrl', [ '$scope', function($scope) {

}])


}) ()
