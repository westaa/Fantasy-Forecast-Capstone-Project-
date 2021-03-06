app.controller('fantasyController', function($scope, $location, $http, $window, $route, $routeParams, fantasyService, $rootScope, $anchorScroll){

  $scope.view = {},
  $scope.view.message = "wired up and working!";
  $scope.view.message = fantasyService.message;
  $scope.view.player= fantasyService.player;
  $scope.view.searchedPlayer = fantasyService.searchedPlayer;
  $scope.view.userRoster = fantasyService.userRoster;
  $scope.view.userRoster.QB = fantasyService.quarterBacks;
  $scope.view.userRoster.RB = fantasyService.runningBacks;
  $scope.view.userRoster.WR = fantasyService.wideReceivers;
  $scope.view.userRoster.TE = fantasyService.tightTends;
  $scope.view.userRoster.K = fantasyService.kickers;
  $scope.view.userRoster.DEF = fantasyService.defense;
  $scope.view.searchPlayerToggle = true;
  $scope.view.welcome = fantasyService.welcome;
  $scope.view.username = fantasyService.username;
  $scope.view.highestProjected = []
  $scope.view.infoDiv = true;
  $scope.view.greeting = fantasyService.greeting;

  $scope.view.toggleInfoDiv = function () {
    if ($scope.view.infoDiv = true) {
      $scope.view.infoDiv === false;
    }
    else if ($scope.view.infoDiv = false) {
      $scope.view.infoDiv === true;
    }
  }

  $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
     }

$scope.view.removePlayer = function (playerId) {
  for (var x in $scope.view.userRoster) {
    for (var i = 0; i < $scope.view.userRoster[x].length; i++) {
      if ($scope.view.userRoster[x][i].playerId === playerId) {
        var index = $scope.view.userRoster[x].indexOf($scope.view.userRoster[x][i]);
        $scope.view.userRoster[x].splice(index, 1)
      }
    }
  }
};

$scope.view.signUp = function(usernameSignup) {
    fantasyService.signUp(
    $scope.view.usernameSignup,
    $scope.view.passwordSignup,
    $scope.view.emailSignup).then(function(res) {
      if (res.data.errors) {
        $scope.view.error = res.data.errors;
      } else {
        localStorage.jwt = res.data.token;
        $location.path('/userHome');
        $location.reload();
        history.go(0);
      }
    })
  }

$scope.openPopUp = function() {
    $scope.view.popUp = true;
    console.log('open');
    }


$scope.view.greeting = '';
$scope.view.signIn = function(username) {
  $scope.view.greeting = 'Welcome to your homepage, ' + username;
  fantasyService.signIn(username, $scope.view.password).then(function (res) {
    if(res.data.errors){
      $scope.view.error = res.data.errors;
    }
    else{
      $scope.view.userName = username;
      localStorage.jwt = res.data.token;
        $window.location.reload();
      $location.path('/userHome');

    }
  });
}

$scope.view.signOut = function() {
  localStorage.clear();
  $location.path('/');
  $window.location.reload();
}

$scope.view.searchPlayer = function (player){
  player = player.toLowerCase();
  $http.get('/../JSON/NFLroster.json').then(function(data){
    var array = data.data;
    for (var i = 0; i < array.length; i++) {
      if (player === array[i].displayName.toLowerCase()) {
      $scope.view.searchedPlayer.push(array[i]);
      }
    }
    $scope.view.player = '';
    $scope.view.searchPlayerToggle = true;
  })
};

$scope.view.getProjections = function () {
  $http.get('https://www.fantasyfootballnerd.com/service/weekly-rankings/json/xj99njek7adn/QB/').then(function(data){
    console.log(data);
  })
}

$scope.view.addToRoster = function (searchedPlayer){
  var arr = ['QB', 'RB', 'WR', 'TE', 'DEF', 'K']
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == searchedPlayer.position){
        fantasyService.userRoster[arr[i]].push(searchedPlayer);
    }
  }
  $scope.view.searchedPlayer = [];
  $scope.view.searchPlayerToggle = false;
  console.log($scope.view.userRoster.QB);
}

$scope.view.getQBProjections = function (qbId0, qbId1, qbId2, rbId0, rbId1, rbId2, rbId3, rbId4, rbId5, wrId0, wrId1, wrId2, wrId3, wrId4, wrId5, teId0, teId1, teId2, teId3, kId0, kId1, kId2, defId0, defId1) {
  $http.get('/JSON/QB.json').then(function(data){
    for (var i = 0; i < data.data.length; i++) {
      if (data.data[i].playerId === qbId0){
        $scope.view.userRoster.QB[0].projection = data.data[i].standard;
      }
      if (data.data[i].playerId === qbId1){
        $scope.view.userRoster.QB[1].projection = data.data[i].standard;
      }
      if (data.data[i].playerId === qbId2){
        $scope.view.userRoster.QB[2].projection = data.data[i].standard;
      }
    }
  });
  $http.get('/JSON/RB.json').then(function(data){
    for (var i = 0; i < data.data.length; i++) {
    if (data.data[i].playerId === rbId0){
      $scope.view.userRoster.RB[0].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === rbId1){
      $scope.view.userRoster.RB[1].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === rbId2){
      $scope.view.userRoster.RB[2].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === rbId3){
      $scope.view.userRoster.RB[3].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === rbId4){
      $scope.view.userRoster.RB[4].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === rbId5){
      $scope.view.userRoster.RB[5].projection = data.data[i].standard;
    }
    }
  })
  $http.get('/JSON/WR.json').then(function(data){
    for (var i = 0; i < data.data.length; i++) {
    if (data.data[i].playerId === wrId0){
      $scope.view.userRoster.WR[0].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === wrId1){
      $scope.view.userRoster.WR[1].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === wrId2){
      $scope.view.userRoster.WR[2].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === wrId3){
      $scope.view.userRoster.WR[3].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === wrId4){
      $scope.view.userRoster.WR[4].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === wrId5){
      $scope.view.userRoster.WR[5].projection = data.data[i].standard;
    }
    }
  })
  $http.get('/JSON/TE.json').then(function(data){
    for (var i = 0; i < data.data.length; i++) {
    if (data.data[i].playerId === teId0){
      $scope.view.userRoster.TE[0].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === teId1){
      $scope.view.userRoster.TE[1].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === teId2){
        $scope.view.userRoster.TE[2].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === teId3){
      $scope.view.userRoster.TE[3].projection = data.data[i].standard;
    }
    }
  })
  $http.get('/JSON/K.json').then(function(data){
    for (var i = 0; i < data.data.length; i++) {
    if (data.data[i].playerId === kId0){
      $scope.view.userRoster.K[0].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === kId1){
      $scope.view.userRoster.K[1].projection = data.data[i].standard;
    }
    }
  })
  $http.get('/JSON/DEF.json').then(function(data){
    for (var i = 0; i < data.data.length; i++) {
    if (data.data[i].playerId === defId0){
      $scope.view.userRoster.DEF[0].projection = data.data[i].standard;
    }
    if (data.data[i].playerId === defId1){
      $scope.view.userRoster.DEF[1].projection = data.data[i].standard;
    }
    }
  })
}
})

app.controller('optmizerController', function($scope,$location, $http, $window, $route, $routeParams, fantasyService, $rootScope, $anchorScroll){

  $scope.view = {};
  $scope.view.userRoster = fantasyService.userRoster;

$scope.view.sortedQBs = fantasyService.userRoster.QB.sort(function(a,b){
  return b.projection - a.projection
})
;
$scope.view.sortedRBs = fantasyService.userRoster.RB.sort(function(a,b){
  return b.projection - a.projection
})
;
$scope.view.sortedWRs = fantasyService.userRoster.WR.sort(function(a,b){
  return b.projection - a.projection
})
;
$scope.view.sortedTEs = fantasyService.userRoster.TE.sort(function(a,b){
  return b.projection - a.projection
})
;
$scope.view.sortedKs = fantasyService.userRoster.K.sort(function(a,b){
  return b.projection - a.projection
})
;
$scope.view.sortedDEFs = fantasyService.userRoster.DEF.sort(function(a,b){
  return b.projection - a.projection
})
$scope.view.flex = fantasyService.userRoster.WR.concat(fantasyService.userRoster.RB, fantasyService.userRoster.TE).sort(function(a,b){
  return b.projection - a.projection
})
;
})
