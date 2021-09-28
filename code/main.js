import k from './kaboom';

import {titleScene, gameScene} from './scenes';
import {levelOne} from './level';
loadSpriteAtlas("sprites/sheet.png", "sprites/sheet.json");
loadSpriteAtlas("sprites/swoosh.png", "sprites/swoosh.json");
loadSpriteAtlas("sprites/dusty-sheet.png", "sprites/dusty-sheet.json");

k.scene("title",titleScene);
k.scene("game",gameScene);



k.go("title");