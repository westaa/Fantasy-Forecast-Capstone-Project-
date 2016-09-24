app.factory('fantasyService', function($http, $location) {
  return {
    signUp: function(username, password, email) {
      var newUser = {};
      newUser.username = username.toLowerCase();
      newUser.password = password;
      newUser.email = email;
      return $http.post('/api/signup', newUser);
    },
    signIn: function(username, password) {
      var user = {};
      user.username = username.toLowerCase();
      user.password = password;
      return $http.post('/api/signin', user);
    },
    message: 'Welcome to your account.',
    player: '',
    searchedPlayer: [],
    userRoster: {},
    userRoster: [],
    quarterBacks: [],
    runningBacks: [],
    wideReceivers: [],
    kickers: [],
    defense: [],
    tightTends: [],

    welcome: ''
    }
})
