$(function() {

    var canvas = $("#canvas")[0];
    var context = canvas.getContext("2d");
    var width = $("#canvas").width();
    var height = $("#canvas").height();

    var action;
    var cw = 15;
	
	var characterFillColor = "blue";
	var characterStrokeColor = "green";

    var characterPositionX = 15;
    var characterPositionY = 15;

    paintCharacter();




    function paintCharacter() {
        context.fillStyle = characterFillColor;
        context.fillRect(characterPositionX * cw, characterPositionY * cw, cw, cw);
        context.strokeStyle = characterStrokeColor;
        context.strokeRect(characterPositionX * cw, characterPositionY * cw, cw, cw);
    }

	$(document).keydown(function(e) {
        controls(e);
		paintCharacter();
	})

	function controls(e) {
        var key = e.which;
        if(key == "87") {
            action = "up";
            characterPositionY--;
        }
        else if(key == "83") {
            action = "down";
            characterPositionY++;
        }
        else if(key == "68") {
            action = "right";
            characterPositionX++;
        }
        else if(key == "65") {
            action = "left";
            characterPositionX--;
        }
        else if(key == "69") {
            action = "use";
        }
	}

});