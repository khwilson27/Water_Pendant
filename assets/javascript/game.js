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

            console.log("iteration " + i +" X: " + charX);
            console.log("iteration " + i +" Y: " + charY);

            var newImg = $("<img>").addClass("charOnGrid center-block").attr("src", charImagesUrl[i]).attr("id", "charImg"+iPlus1);

            $("#x" + charX + "y" + charY).html(newImg);
        }
  }

  printCharOnGrid();







}) // closes ready function


