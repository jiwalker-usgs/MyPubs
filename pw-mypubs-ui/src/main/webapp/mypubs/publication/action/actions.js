(function() {


var mod = angular.module('pw.actions', [])


mod.directive('pwActions', function() {

	var pwActions = {
		restrict   : 'E', //AEC
		replace    : true,
		transclude : true,
		scope      : true,
		templateUrl: 'mypubs/publication/action/buttons.html',


		controller : function($scope) {

			$scope.reset = {
				name   : "Reset",
				action : function() {
					// TODO service.doReset
				}
			}
			$scope.release = {
				name   : "Release",
				action : function() {
					// TODO service.doReleas
				}
			}
			$scope.save = {
				name   : "Save Changes",
				action : function() {
					// TODO service.doSave
				}
			}
			$scope.publish = {
				name   : "Publish",
				action : function() {
					// TODO service.doPublish
				}
			}
		},

		link : function($scope, el, attrs) {
		}
	}

	return pwActions
})


}) ()

