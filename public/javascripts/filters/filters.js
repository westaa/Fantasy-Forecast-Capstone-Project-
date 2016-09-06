app.filter('teamName', function(){
  return function(input){
    if (input == undefined){
      return '';
    }
    var teams = [
  ["ari", "Arizona Cardinals"],                 ["atl", "Atlanta Falcons"],
  ["bal", "Baltimore Ravens"],                  ["buf", "Buffalo Bills"],
  ["car", "Carolina Panthers"],                 ["chi", "Chicago Bears"],
  ["cin", "Cincinnati Bengals"],                ["clv", "Cleveland Browns"],
  ["dal", "Dallas Cowboys"],                    ["den", "Denver Broncos"],
  ["det", "Detroit Lions"],                     ["gbp", "Green Bay Packers"],
  ["hou", "Houston Texans"],                    ["ind", "Indianapolis Colts"],
  ["jac", "Jacksonville Jaguars"],              ["kan", "Kansas City Chiefs"],
  ["mia", "Miami Dolphins"],                    ["min", "Minnesota Vikings"],
  ["nep", "New England Patriots"],              ["nos", "New Orleans Saints"],
  ["nyg", "New York Giants NYG"],               ["nyj", "New York Jets NYJ"],
  ["oak", "Oakland Raiders"],                   ["phl", "Philadelphia Eagles"],
  ["pit", "Pittsburgh Steelers"],               ["sdc", "San Diego Chargers"],
  ["sff", "San Francisco 49ers forty-niners"],  ["sea", "Seattle Seahawks"],
  ["stl", "St Louis Rams"],                     ["tam", "Tampa Bay Buccaneers"],
  ["ten", "Tennessee Titans"],                  ["wsh", "Washington Redskins"]];
    input = input.toLowerCase();
    for (var i = 0; i < teams.length; i++) {
      if (teams[i][0].substring(0,2) == input.substring(0,2)){
        return teams[i][1];
      }
    }
  }
})
