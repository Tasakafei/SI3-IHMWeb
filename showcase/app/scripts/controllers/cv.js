'use strict';

angular.module('showcaseApp').controller('cvCtrl', function($scope, $http) {
  $http.get('../../../resources/data.json')
    .success(function(data) {
      $scope.state = true;
      $scope.avatar = data['avatar'];
      $scope.formations = data['formations'];
      $scope.experiences = data['experiences'];
      $scope.competences = data['competences'];
      $scope.projets = data['projets'];
      $scope.loisirs = data['loisirs'];
      $scope.citation = data['citation'];

    })
    .error(function() {
      $scope.state = false;
    })
})
