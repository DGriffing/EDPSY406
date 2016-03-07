'use strict';

angular.module('myApp', [])
.controller('SectionCtrl', ['$scope', '$http', '$uibModal', '$filter', function($scope, $http, $uibModal, $filter) {

	// Connects data on Concepts
	$http.get('data/concepts.json').then(function(response){
		console.log(response.data);
		$scope.concepts = response.data;
	});

	// Connects Concept Detail Modules to the information in data
	$scope.conceptInfo = function(obj){
		console.log(obj)
		$scope.selectedConcept = obj;
		var modalInstance = $uibModal.open({
			templateUrl: 'concept.html',
			controller: 'ConceptCtrl',
			scope: $scope
		});
	}
}])

.controller('ConceptCtrl', ['$scope', '$http', '$uibModalInstance', function($scope, $http, $uibModalInstance) { 
    
    // Closes Concept Modal when close button is clicked
    $scope.close = function () {
        $uibModalInstance.dismiss('close');
    };
}])