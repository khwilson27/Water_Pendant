$(document).ready(function() {

  // define map where 0 is vacant area, 1 is your character, 2 is enemy character, m is mountain obstruction...
  var gridMap = [ [0, 0, 2, 2, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 1, 1, 0, 0] ];

  var yourChar1Location = [3,0];
  var yourChar2Location = [4,0];
  var enemyChar1Location = [3,8];
  var enemyChar2Location = [4,8];

  var charImages = ["","","",""]



  var printCharOnGrid = function {

        var charLocations = [yourChar1Location, yourChar2Location, enemyChar1Location, enemyChar2Location];
        for (var i=0; i<charLocations.length; i++) {
            var charX = charLocations[i][0];
            var charY = charLocations[i][1];
            $("#x"+charX+"y"+charY).html("")
        }


  }





})


