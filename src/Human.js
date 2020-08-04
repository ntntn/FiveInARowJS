import Player from './Player';

class Human extends Player {
    constructor(board) {
        super(board);
    }

    move(x, y) {
        super.move(this.board, this.board.humanValue, x, y);
    }
}


export default Human;