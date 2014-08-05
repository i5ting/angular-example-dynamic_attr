'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
		$scope.classes = [
			{
				"Name": "柯织",
				"Options" : ["A" , "B", "C"]
			},
			{
				"Name": "雷朋",
				"Options" : ["A" , "B" , "C" ]
			}
		];

		$scope.SelectdCollection = {};

		$scope.submit = function() {
	     console .log($scope. SelectdCollection);
		};
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
