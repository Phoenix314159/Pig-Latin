angular.module('myApp');
angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {
    $scope.convertFirstName = function(){
        $scope.cFirstName = mainService.convertName($scope.name);
    }
    $scope.convertLastName = function() {
        $scope.cLastName = mainService.convertName($scope.lastName);
    }
});

