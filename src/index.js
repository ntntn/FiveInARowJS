import Phaser from 'phaser';
import GameOverScene from './GameOverScene';
import GameScene from './GameScene';


const config = {
    type: Phaser.AUTO,
    backgroundColor: 'rgb(44,110,199)',
    width: 1200,
    height: 900,
    scale: {
        mode: Phaser.Scale.RESIZE,
    },
    scene: [GameScene, GameOverScene]
};

const game = new Phaser.Game(config);