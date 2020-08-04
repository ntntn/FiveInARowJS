class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    init(data){
        this.winner = data;
    }

    preload() {
        this.load.image('playAgainButton', 'assets/playAgainButton.png');
    }

    create() {
        let x = this.game.config.width/2.5;
        let y = this.game.config.height/2.5;
        let button = this.add.sprite(x, y, 'playAgainButton');
        let label = this.winner == 'AI'? 'ПОБЕДА':'ВЫ ПРОИГРАЛИ';
        this.add.text(x-button.displayWidth/3,y*0.6,label, { fontSize: "60px", fontFamily: 'Arial' });
        button.setInteractive().on('pointerdown', () => this.scene.start('GameScene'), this);
    }
}

export default GameOverScene;