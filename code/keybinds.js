const SPEED = 120;
const JUMP_FORCE = 300;

export const dpad = (player) => {
  keyDown("right", () => {
	player.flipX(false);
	player.move(SPEED, 0);
  player.play("run");
});

keyDown("left", () => {
	player.flipX(true);
  if (player.pos.x > 2) {
	player.move(-SPEED, 0);
  player.play("run");
  }
});

keyDown("up", () => {
	// player.move(0, -SPEED);
});

keyDown("down", () => {
	// player.move(0, SPEED);
});
}

export const jumpad = (player) => {
      const jump = () => {
  if (player.grounded()) {
    player.jump(JUMP_FORCE);
  }
}
    keyPress("space", jump);
    mouseClick(jump);

}
