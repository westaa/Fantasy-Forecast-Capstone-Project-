app.directive('logo', function(){
  return{
    restrict: 'E',
    templateUrl: 'javascripts/directives/logo.html',
    scope: {
      alt:"@",
    }
  }
})
