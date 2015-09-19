app.controller("Principal",['$scope','photos','$routeParams', function($scope,photos, $routeParams) {
	photos.success(function(data){
		console.log(data);
		 console.log(data[$routeParams.id]);
		$scope.photos =data;
	})
	
}]);
	
