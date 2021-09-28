import {dpad, jumpad} from "./keybinds";
import {levelOne} from "./level";
const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 800;
const SPEED = 480; 
const OVER_TEXT = "twitch.tv/dustyonanime";

export const titleScene =  () => {
  levelOne();
  camPos(150, 200);
  add([
    sprite("dusty"),
    scale(0.09),
    pos(4, 220)
  ]);
  add([
    text("Dusty Jumper"),
    pos(150, 200),
    scale(0.3),
    origin("center"),
  ]);
  keyPress("space", () => go("game"));
  mouseClick(() => go("game"));
}

export const gameScene = () => {
   levelOne();
  camPos(150, 200);
  const player = add([
        // list of components
        sprite("dusty"),
        pos(4, 4),
        scale(0.09),
        area(),
        body(),
    ]);
    player.action(() => {
      if (player.pos.x >= 96 && player.pos.x < 450) {
	      // camPos(player.pos.x + 52, player.pos.y - 19.5);
        camPos(player.pos.x + 52, 200);
      }

}); player.collides("chest", (c) => {
  if(!c.opened) {
    c.opened = !c.opened;
    c.play("open");
    shake();
    setTimeout(() => {
      add([
        text(OVER_TEXT),
        pos(player.pos.x - 100, 200),
        scale(0.2),
        origin("center"),
      ]);
    }, 400)
  }
});
    player.collides("danger", () => {
        // go to "lose" scene and pass the score
        go("title");
        burp();
        shake();
        // addKaboom(player.pos);
    });
    dpad(player);
    jumpad(player);
}