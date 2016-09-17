$(function() {

    var canvas = $("#canvas")[0];
    var context = canvas.getContext("2d");
    var canvasWidth = $("#canvas").width();
    var canvasHeight = $("#canvas").height();

    var characterActing;
	var action;
    var cw = 15;
	
	var characterDefaultFillColor = "blue";
	var characterDefaultStrokeColor = "green";
	
	var characterActingFillColor = "orange";
	var characterActingStrokeColor = "red";
	
	var characterCurrentFillColor;
	var characterCurrentStrokeColor;

    var characterPositionX = 15;
    var characterPositionY = 15;
	
	//////game board 40x40
	
	
	setInterval(gameLoop, 50);
	setDefaultCharacterColors();





    function paintCharacter() {
        context.fillStyle = characterCurrentFillColor;
        context.fillRect(characterPositionX * cw, characterPositionY * cw, cw, cw);
        context.strokeStyle = characterCurrentStrokeColor;
        context.strokeRect(characterPositionX * cw, characterPositionY * cw, cw, cw);
    }
	
	function setDefaultCharacterColors() {
		characterCurrentFillColor = characterDefaultFillColor;
		characterCurrentStrokeColor = characterDefaultStrokeColor;
	}
	
	function setActingCharacterColors() {
		characterCurrentFillColor = characterActingFillColor;
		characterCurrentStrokeColor = characterActingStrokeColor;
	}
	
	function gameLoop() {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		paintCharacter();
	}
	
	$(document).keydown(function(e) {
        controls(e);
	})

	function controls(e) {
        var key = e.which;
        if(key == "87") {
			if(isCharacterActing()) {
				if(canMoveUp()){
					characterPositionY--;
					action = "up";
				}
			}
        }
        else if(key == "83") {
            if(isCharacterActing()) {
				if(canMoveDown()) {
					characterPositionY++;
					action = "down";
				}
			}
        }
        else if(key == "68") {
			if(isCharacterActing()) {
				if(canMoveRight()) {
					characterPositionX++;
					action = "right";
				}
			}
        }
        else if(key == "65") {
            if(isCharacterActing()) {
				if(canMoveLeft()) {
					characterPositionX--;
					action = "left";	
				}
			}
        }
        else if(key == "69") {
			characterActing = true;
			setActingCharacterColors();
			setTimeout(function() {
				setDefaultCharacterColors();
				characterActing = false;
			}, 3000);
        }
	}
	function isCharacterActing(){
		if(characterActing) {
			return false;
		}
		return true;
	}
	
	function canMoveUp() {
		if(characterPositionY == 0)
		{
			return false;
		}
		return true;
	}
	
	function canMoveDown() {
		if (characterPositionY == 39) {
			return false;
		}
		return true;
	}
	
	function canMoveRight() {
		if(characterPositionX == 39) {
			return false;
		}
		return true;
	}
	
	function canMoveLeft() {
		if(characterPositionX == 0) {
			return false;
		}
		return true;
	}

});