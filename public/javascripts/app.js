var app = angular.module('fantasy_forecast', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/userHome', {
  templateUrl: '/../views/userHome.html',
  controller: 'fantasyController'
  })
  .when('/signIn', {
  templateUrl: '/../views/signIn.html',
  controller: "fantasyController"
  })
  .when('/signUp', {
    templateUrl: '/../views/signUp.html',
    controller: 'fantasyController'
  })
  .when('/rosterAnalysis', {
    templateUrl: '/../views/rosterAnalysis.html',
    controller: 'optmizerController'
  })
  .when('/userHome/:id', {
  templateUrl: '/../views/userHome.html',
  controller: 'fantasyController',
  resolve: {
    check: function($location, $rootScope, $route){
        if($rootScope.user.id == $route.current.params.id){
            console.log('you are good');
        }else{
            $location.path('/bikes');    //redirect user to home.
            console.log("Nice try");
        }
    }
  }
})
})

app.run(function($rootScope, $location){
  if (localStorage.jwt)
  $rootScope.user = jwt_decode(localStorage.jwt);
  console.log("User:" + $rootScope.user)
})
