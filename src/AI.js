import Player from './Player';
import Cell from './Cell';

class AI extends Player {
    cosntructor() {
        this.test;
    }

    move() {
        let bestMove = this.getMoves(this.board)[0];

        /*         let max = -Number.MAX_VALUE;
                let depth = 6;
        
                for (var i = 0; i < moves.length; i++) {
                    let value = this.minimax(this.board, moves[i], depth, -Number.MAX_VALUE, Number.MAX_VALUE, false);
                    if (value > max) {
                        max = value;
                        bestMove = moves[i];
                        bestMove.value = value;
                    }
                } */

        super.move(this.board, this.board.aiValue, bestMove.x, bestMove.y);
    }

    getMoves(board) {
        let moves = [];
        let human = board.human;
        let ai = board.ai;

        for (var i = 0; i < board.size; i++) {
            for (var j = 0; j < board.size; j++) {
                if (human[i][j] >= 0) {
                    moves.push({ x: i, y: j, value: human[i][j] + ai[i][j] });
                }
            }
        }

        for (var i = 0; i < moves.length; i++) {
            let move = array[i];
            for (var j = i + 1; j < array.length; j++) {
                if (moves[i].value < array[j].value) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return moves;
    }


    minimax(board, move, depth, alpha, beta, isMax) {
        if (depth == 0) {
            let value = board.getValue();
            return value;
        }
        else if (board.winner != 0)
            return -depth * board.getValue();

        let copy = board.clone();
        super.move(copy, max ? board.aiValue : board.humanValue, move.x, move.y);

        let moves = this.getMoves(board);
        if (isMax) {
            let bestValue = -Number.MAX_VALUE;
            for (var i = 0; i < moves.length; i++) {
                bestValue = Math.max(bestValue, this.minimax(copy, moves[i], depth - 1, alpha, beta, false));
                alpha = Math.max(alpha, bestValue);
                if (beta <= alpha)
                    break;
            }
            return bestValue;
        } else {
            let bestValue = Number.MAX_VALUE;
            for (var i = 0; i < moves.length; i++) {
                bestValue = Math.min(bestValue, this.minimax(copy, moves[i], depth - 1, alpha, beta, true));
                beta = Math.min(beta, bestValue);

                if (beta <= alpha)
                    break;
            }

            return bestValue;
        }
    }
}


export default AI;