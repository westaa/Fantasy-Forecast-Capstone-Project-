app.filter('teamName', function(){
  return function(input){
    input = input.toLowerCase();
    if (input == undefined){
      return '';
    }
    if (input == 'stl') {
      return "Los Angeles Rams"
    }
    if (input === 'min') {
      return "Minnesota Vikings"
    }
    if (input === 'tb') {
      return "Tampa Bay Buccaneers"
    }
    for (var i = 0; i < teams.length; i++) {
      if (teams[i][0].substring(0,2) == input.substring(0,2)){
        return teams[i][1];
      }
    }
  }
})

app.filter('teamLogo', function(){
  var imageArr = ['javascripts/filters/NFLlogos/Img64.jpg', 'javascripts/filters/NFLlogos/Img115.jpg',
  'javascripts/filters/NFLlogos/Img143.jpg',
  'javascripts/filters/NFLlogos/Img3348.jpg',
  'javascripts/filters/NFLlogos/Img3920.jpg',
  'javascripts/filters/NFLlogos/Img207.jpg',
  'javascripts/filters/NFLlogos/Img73.jpg',
  'javascripts/filters/NFLlogos/Img98.jpg',
  'javascripts/filters/NFLlogos/Img136.jpg',
  'javascripts/filters/NFLlogos/Img3382.jpg',
  'javascripts/filters/NFLlogos/Img2470.jpg',
  'javascripts/filters/NFLlogos/Img250.jpg',
  'javascripts/filters/NFLlogos/Img88.jpg',
  'javascripts/filters/NFLlogos/Img2578.jpg',
  'javascripts/filters/NFLlogos/Img4372.jpg',
  'javascripts/filters/NFLlogos/Img270.jpg',
  'javascripts/filters/NFLlogos/Img4453.jpg',
  'javascripts/filters/NFLlogos/Img4456.jpg',
  'javascripts/filters/NFLlogos/Img318.jpg',
  'javascripts/filters/NFLlogos/Img2517.jpg',
  'javascripts/filters/NFLlogos/Img288.jpg',
  'javascripts/filters/NFLlogos/Img126.jpg',
  'javascripts/filters/NFLlogos/Img254.jpg',
  'javascripts/filters/NFLlogos/Img336.jpg',
  'javascripts/filters/NFLlogos/Img366.jpg',
  'javascripts/filters/NFLlogos/Img2311.jpg',
  'javascripts/filters/NFLlogos/Img4082.jpg',
  'javascripts/filters/NFLlogos/Img4064.jpg',
  'javascripts/filters/NFLlogos/Img418.jpg',
  'javascripts/filters/NFLlogos/Img434.jpg',
  'javascripts/filters/NFLlogos/Img3390.jpg',
  'javascripts/filters/NFLlogos/Img400.jpg'
  ];
  return function (input){
    input = input.toLowerCase();
    if (input == "min") {
      return 'javascripts/filters/NFLlogos/Img4456.jpg'
    } else if (input == 'tb'){return 'javascripts/filters/NFLlogos/Img434.jpg'}
    else
    for (var i = 0; i < teams.length; i++) {
      if (teams[i][0].substring(0,2) == input.substring(0,2)) {
      return imageArr[i];
      }
    }
  }
})

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
["la", "Los Angeles Rams"],                     ["tam", "Tampa Bay Buccaneers"],
["ten", "Tennessee Titans"],                  ["was", "Washington Redskins"]];
