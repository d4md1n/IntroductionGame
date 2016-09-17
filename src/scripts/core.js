$(function() {

    var characterCanvas = $("#characterCanvas")[0];
    var characterCanvasContext = characterCanvas.getContext("2d");
    var characterCanvasWidth = $("#characterCanvas").width();
    var characterCanvasHeight = $("#characterCanvas").height();
	
	var boardCanvas = $("#boardCanvas")[0];
	var boardCanvasContext = boardCanvas.getContext("2d");
	var boardCanvasWidth = $("#boardCanvas").width();
	var boardCanvasHeight = $("#boardCanvas").height();
	
	var boardPathColor = "#4d3800";
	var pathWidth = 10;
	var pathHeight = 10;

    var characterActing;
	var action;
	
    var characterWidth = 15;
	var characterHeight = 15;
	
	var characterDefaultFillColor = "blue";
	var characterDefaultStrokeColor = "green";
	
	var characterActingFillColor = "orange";
	var characterActingStrokeColor = "red";
	
	var characterCurrentFillColor;
	var characterCurrentStrokeColor;

    var characterPositionX = 1;
    var characterPositionY = 2;
	
	var boardWidth = parseInt((characterCanvasWidth / characterWidth) - 1);
	var boardHeight = parseInt((characterCanvasHeight / characterHeight) - 1)
	
	drawBoard();
	
	setInterval(gameLoop, 25);
	setDefaultCharacterColors();


    function drawCharacter() {
        characterCanvasContext.fillStyle = characterCurrentFillColor;
        characterCanvasContext.fillRect(characterPositionX * characterWidth , characterPositionY * characterHeight, characterWidth, characterHeight);
        characterCanvasContext.strokeStyle = characterCurrentStrokeColor;
        characterCanvasContext.strokeRect(characterPositionX * characterWidth , characterPositionY * characterHeight, characterWidth, characterHeight);	
    }
	
	
	function drawBoard() {
		for(var i = 0; i < board.length; i++) {
			var row = board[i];
			for(var j = 0; j < row.length; j++) {
				if(board[j][i] == "1"){
					boardCanvasContext.fillStyle = boardPathColor;
					boardCanvasContext.fillRect(i * characterWidth , j * characterHeight, pathWidth, pathHeight);
				}
				else if (typeof(dictionary[board[j][i]]) !== 'undefined') {
					boardCanvasContext.font = "bold 15px Arial";
					boardCanvasContext.fillText(dictionary[board[j][i]], i * characterWidth, j * characterHeight);
				}
			}
		}
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
		characterCanvasContext.clearRect(0, 0, characterCanvasWidth, characterCanvasHeight);
		drawCharacter();
	}
	
	$(document).keydown(function(e) {
        var key = e.which;
        if(key == "87") {
			if(isCharacterNotActing()) {
				if(canMoveUp()) {
					characterPositionY--;
					action = "up";
				}
			}
        }
        else if(key == "83") {
            if(isCharacterNotActing()) {
				if(canMoveDown()) {
					characterPositionY++;
					action = "down";
				}
			}
        }
        else if(key == "68") {
			if(isCharacterNotActing()) {
				if(canMoveRight()) {
					characterPositionX++;
					action = "right";
				}
			}
        }
        else if(key == "65") {
            if(isCharacterNotActing()) {
				if(canMoveLeft()) {
					characterPositionX--;
					action = "left";	
				}
			}
        }
        else if(key == "69") {
			if(isCharacterNotActing()) {
				characterActing = true;
				setActingCharacterColors();
				setTimeout(function() {
					setDefaultCharacterColors();
					characterActing = false;
				}, 3000);
			}
			
        }
	});
	
	function isCharacterNotActing(){
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
		if(board[characterPositionY - 1][characterPositionX] != "1")
		{
			return false;
		}
		return true;
	}
	
	function canMoveDown() {
		if (characterPositionY == boardHeight) {
			return false;
		}
		if(board[characterPositionY + 1][characterPositionX] != "1")
		{
			return false;
		}
		return true;
	}
	
	function canMoveRight() {
		if(characterPositionX == boardWidth) {
			return false;
		}
		if(board[characterPositionY][characterPositionX + 1] != "1")
		{
			return false;
		}
		return true;
	}
	
	function canMoveLeft() {
		if(characterPositionX == 0) {
			return false;
		}
		if(board[characterPositionY][characterPositionX - 1] != "1")
		{
			return false;
		}
		return true;
	}

});