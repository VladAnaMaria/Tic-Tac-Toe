let flag = 1, canvas, counter = 0, matrix = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]], gameIsOver = 0;

function drawX() {
    canvas.beginPath();
    canvas.lineWidth = 5;
    canvas.moveTo(40, 40);
    canvas.lineTo(160, 160);
    canvas.stroke();
    canvas.moveTo(40, 160);
    canvas.lineTo(160, 40);
    canvas.stroke();
}

function drawO() {
    canvas.beginPath();
    canvas.lineWidth = 5;
    canvas.arc(95, 95, 60, 0, Math.PI * 2, true);
    canvas.stroke();
}

function markedSquare(clicked_id) {
    canvas = document.getElementById('canvas' + clicked_id).getContext('2d');
    let i = Math.floor(clicked_id / 3), j = Math.floor(clicked_id % 3);
    if(gameIsOver == 1 || matrix[i][j] != -1){
        return;
    }
    if (flag == 1 && counter < 9) {
        drawX();
        ++counter;
        matrix[i][j] = flag;
        flag = 0;
        document.getElementById('turnO').innerHTML = ' - ';
        document.getElementById('turnX').innerHTML = '';
    } else if (flag == 0 && counter <= 9){
        drawO();
        ++counter;
        matrix[i][j] = flag;
        flag = 1;
        document.getElementById('turnX').innerHTML = ' - ';
        document.getElementById('turnO').innerHTML = '';
    }
    if (counter > 4) {
        if ((matrix[0][0] != -1 && matrix[0][0] == matrix[0][1] && matrix[0][0] == matrix[0][2]) ||
            (matrix[1][0] != -1 && matrix[1][0] == matrix[1][1] && matrix[1][0] == matrix[1][2]) ||
            (matrix[2][0] != -1 && matrix[2][0] == matrix[2][1] && matrix[2][0] == matrix[2][2]) ||
            (matrix[0][0] != -1 && matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0]) ||
            (matrix[0][1] != -1 && matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1]) ||
            (matrix[0][2] != -1 && matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2]) ||
            (matrix[0][0] != -1 && matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) ||
            (matrix[0][2] != -1 && matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0])){
            gameOver();
        } else {
            if (counter == 9) {
                document.getElementById('message').innerHTML = 'Draw!';
                document.getElementById('XStarts').innerHTML = 'Press reset to restart the game!';
                document.getElementById('PressReset').innerHTML = '';
            }
        }
    }
}

function gameOver() {
    gameIsOver = 1;
    if (flag == 1) {
        document.getElementById('message').innerHTML = 'The game is over! 0 win';
    } else {
        document.getElementById('message').innerHTML = 'The game is over! X win';
    }
    document.getElementById('XStarts').innerHTML = 'Press reset to restart the game!';
    document.getElementById('PressReset').innerHTML = '';
}
