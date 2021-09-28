export const levelOne = () => {
addLevel([

	"                                           ",
	"                                           ",
	"                                           ",
	"                                           ",
	"                                           ",
	"                                           ","                                           ",
	"                                           ",
	"                                           ",
	"         <.......>                         ",
	"         [,...,,,]                         ",
	"           <.> /                        {^^",
	"           [,]                          <..",
	" |                             |     {^^...",
	"      dfg            dfg             <.....",
], {
	width: 16,
	height: 16,
  "d": () => [
    sprite("fence-left")
  ],
  "f": () => [
    sprite("fence-mid")
  ],
  "g": () => [
    sprite("fence-right")
  ],
  "/": () => [
    sprite("vine"),
    pos(0, -5)
  ],
	"|": () => [
		sprite("tree"),
    pos(0,-96)
	],
  "#": () => [
    sprite("blank-full-one")
  ],
  "@": () => [
    sprite("blank-full-two")
  ],
  "{": () => [
    sprite("mound-tl")
  ],
  "}": () => [
    sprite("mound-tr")
  ],
  "<": () => [
    sprite("mound-l")
  ],
  ">": () => [
    sprite("mound-r")
  ],
  "[": () => [
    sprite("mound-bl")
  ],
  "]": () => [
    sprite("mound-br")
  ],
  ",": () => [
    sprite("mound-b")
  ], 
  "^": () => [
    sprite("mound-t")
  ],
  ".": () => [
    sprite("mound-m")
  ],                 
});  
  const map = addLevel([
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                         ",
    "                                          [",
    "                                          [",
    "                                          [",
    "                []                        [",
    " !          []     *       !              [",
    "===========~  ~~##======~~================[",
], {
    // define the size of each block
    width: 16,
    height: 16,
    // define what each symbol means, by a function returning a comp list (what you'll pass to add())
    "*": () => [
      sprite("box"),
      pos(0, 5),
      area(),
      solid()
    ],
    "~": () => [
      sprite("water"),
      pos(0, 2),
      area(),
      "danger"
    ],
    "!": () => [
      sprite("sign-one"),
    ],
    "[":() => [
      sprite("end-floor-left-long-ng"),
      area(),
      solid()
    ],
    "]":() => [
      sprite("end-floor-right-long-ng"),
      area(),
      solid()
    ],
    "#": () => [
      sprite("blank-wall"),
      area(),
      solid()
    ],
    "=": () => [
        sprite("mid-floor-short-one"),
        area(),
        solid(),
    ],
    "$": () => [
        sprite("bean"),
        area(),
        pos(0, -9),
    ],
    "^": () => [
        sprite("bean"),
        area(),
        "danger",
    ],
});
}