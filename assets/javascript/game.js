$(document).ready(function() {

  // define map where 0 is vacant area, p1 & p2 is your character, e1 & e2 is enemy character
  var gridMap = [ [0, 0, "e1", "e2", 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, "p1", "p2", 0, 0]  ];

  // define map terrain where g is grass, s is sand...
  var gridMapTerrain = [  ["g","g","s","s","g","g"],
                          ["g","g","g","g","g","g"],
                          ["g","g","g","g","g","g"],
                          ["g","g","g","g","g","g"],
                          ["g","g","g","g","g","g"],
                          ["g","g","g","g","g","g"],
                          ["g","g","g","g","g","g"],
                          ["g","g","s","s","g","g"],  ];

  var yourChar1Location = [3,1];
  var yourChar2Location = [4,1];
  var enemyChar1Location = [3,8];
  var enemyChar2Location = [4,8];

  var charLocations = [yourChar1Location, yourChar2Location, enemyChar1Location, enemyChar2Location];
  var charImagesUrl = ["assets/images/character1.jpg", "assets/images/character2.jpg", "assets/images/character3.jpg", "assets/images/character4.png"];

  var printCharOnGrid = function() {

        for (var i=0; i<charLocations.length; i++) {
            var charX = charLocations[i][0];
            var charY = charLocations[i][1];
            var iPlus1 = i + 1;
            var newImg = $("<img>").addClass("charOnGrid center-block").attr("src", charImagesUrl[i]).attr("id", "charImg"+iPlus1);

            $("#x" + charX + "y" + charY).html(newImg);
        }
  }

  printCharOnGrid();

  var renderTerrain = function() {

        for (var i=1; i<gridMap.length + 1; i++) {
            for (var j=1; j<gridMap[0].length + 1; j++) {

                if (gridMapTerrain[i-1][j-1] == "g") {
                    $("#x" + j + "y" + i).addClass("grass");
                } else if (gridMapTerrain[i-1][j-1] == "s") {
                    $("#x" + j + "y" + i).addClass("sand");
                }
            }
        }
  }

  renderTerrain();

  var distanceCalculator = function(object1xy, object2xy) {
      var Xdist = Math.abs(object2xy[0] - object1xy[0]);
      var Ydist = Math.abs(object2xy[1] - object1xy[1]);
      var totalDist = Xdist + Ydist;
      return totalDist;
  }

  var playerTurn = function() {
  }
  







}) // closes ready function


