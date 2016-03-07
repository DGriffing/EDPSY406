'use strict';

angular.module('myApp', [])
.controller('ConceptCtrl', ['$scope', '$http', function($scope, $http) {
	
	$scope.sortBy = 'title';

	$http.get('data/concepts.json').then(function(response){
		console.log(response.data);
		$scope.concepts = response.data;
	})
}])








// .config(function($stateProvider, $urlRouterProvider){
// 	$stateProvider

// 		.state('home', {
// 			url: '/',
// 			templateUrl: 'index.html',
// 			controller: 'HomeCtrl'
// 		})

// 		.state('memberBios', {
// 			url: '/concept-{id}',
// 			templateUrl: 'concept.html',
// 			controller: 'ConceptCtrl'
// 		})
// })

// .controller('HomeCtrl', ['$scope', '$http', '$uibModal', '$filter', '$stateParams', function($scope, $http, $uibModal, $filter, $stateParams) {
    
//     // Connects to Concept Data
//     $http.get('data/concepts.json').then(function(response) {
//         $scope.concepts = response.data;
//     });  

//     // Connects Biographies to the information in data
//     $scope.conceptInfo = function(obj) {
//         console.log(obj);
//         $scope.selectedConcept = obj;
//         var modalInstance = $uibModal.open({
//             templateUrl: 'concept.html',
//             controller: 'ConceptCtrl',
//             scope: $scope
//         });
//     }
// }])


// .controller('ConceptCtrl', ['$scope', '$http', '$uibModalInstance', function($scope, $http, $uibModalInstance) { 
    
//     // Closes biography modal when close button is clicked
//     $scope.close = function () {
//         $uibModalInstance.dismiss('close');
//     };
// }])