import Phaser from 'phaser';
import GameScene from './GameScene';
import GameOverScene from './GameOverScene';



const config = {
    type: Phaser.AUTO,
    backgroundColor: 'rgb(44,110,199)',
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [GameScene, GameOverScene]
};

const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});