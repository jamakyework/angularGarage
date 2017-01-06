console.log('jq');
var myApp = angular.module('myApp', []);
myApp.controller('LaunchpadControler', ['$scope', function($scope) {
    console.log('NG');
    $scope.favoriteCars=[];

    $scope.getCars = function() {
      console.log( 'in getCars()');
      var cars = {
        Year: $scope.carYear,
        Make: $scope.carMake,
        Model: $scope.carModel,
        // imageUrl: $scope.carUrl
      };
      $scope.favoriteCars.push( cars );
      console.log('favoriteCars:', $scope.favoriteCars);
    }; //end getMovieName
}]);//end controller


// <img ng-src="{{carUrl}}"/>
