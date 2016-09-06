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
})
