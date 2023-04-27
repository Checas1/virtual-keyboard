// create headline and textarea

let body = document.querySelector(".body");
let main = document.createElement("main");
let container = document.createElement("div");
let headline = document.createElement("h1");
let textArea = document.createElement("textarea");
main.classList.add("main");
body.prepend(main);

container.classList.add("container");
main.prepend(container);

headline.classList.add("headline");
headline.textContent = "RSS Виртуальная клавиатура";
container.appendChild(headline);

textArea.classList.add("main__textarea");
container.appendChild(textArea);

// create Keyboard

let mainKeyboard = document.createElement("div");
let containerKeyBoard = document.createElement("div");

mainKeyboard.classList.add("main__keyboard");
container.appendChild(mainKeyboard);

containerKeyBoard.classList.add("container__keyboard");
mainKeyboard.appendChild(containerKeyBoard);

// Keys Array
const keysArray = [
  [
    {
      ru: { default: "ё", shift: "Ё", caps: "Ё", shiftCaps: "ё" },
      eng: { default: "`", shift: "~", caps: "`", shiftCaps: "`" },
      code: "Backquote",
    },
    {
      ru: { default: "1", shift: "!", caps: "1", shiftCaps: "!" },
      eng: { default: "1", shift: "!", caps: "1", shiftCaps: "!" },
      code: "Digit1",
    },
    {
      ru: { default: "2", shift: `"`, caps: "2", shiftCaps: `"` },
      eng: { default: "2", shift: "@", caps: "2", shiftCaps: "@" },
      code: "Digit2",
    },
    {
      ru: { default: "3", shift: `№`, caps: "3", shiftCaps: `№` },
      eng: { default: "3", shift: "#", caps: "3", shiftCaps: "#" },
      code: "Digit3",
    },
    {
      ru: { default: "4", shift: `%`, caps: "4", shiftCaps: `%` },
      eng: { default: "4", shift: "$", caps: "4", shiftCaps: "$" },
      code: "Digit4",
    },
    {
      ru: { default: "5", shift: `:`, caps: "5", shiftCaps: `:` },
      eng: { default: "5", shift: "%", caps: "5", shiftCaps: "%" },
      code: "Digit5",
    },
    {
      ru: { default: "6", shift: `,`, caps: "6", shiftCaps: `,` },
      eng: { default: "6", shift: "^", caps: "6", shiftCaps: "^" },
      code: "Digit6",
    },
    {
      ru: { default: "7", shift: `.`, caps: "7", shiftCaps: `.` },
      eng: { default: "7", shift: "&", caps: "7", shiftCaps: "&" },
      code: "Digit7",
    },
    {
      ru: { default: "8", shift: `;`, caps: "8", shiftCaps: `;` },
      eng: { default: "8", shift: "*", caps: "8", shiftCaps: "*" },
      code: "Digit8",
    },
    {
      ru: { default: "9", shift: `(`, caps: "9", shiftCaps: `(` },
      eng: { default: "9", shift: "(", caps: "9", shiftCaps: "(" },
      code: "Digit9",
    },
    {
      ru: { default: "0", shift: `)`, caps: "0", shiftCaps: `)` },
      eng: { default: "0", shift: ")", caps: "0", shiftCaps: ")" },
      code: "Digit0",
    },
    {
      ru: { default: "-", shift: `_`, caps: "-", shiftCaps: `_` },
      eng: { default: "-", shift: "_", caps: "-", shiftCaps: "_" },
      code: "Minus",
    },
    {
      ru: { default: "=", shift: `+`, caps: "=", shiftCaps: `+` },
      eng: { default: "=", shift: "+", caps: "=", shiftCaps: "+" },
      code: "Equal",
    },
    {
      ru: {
        default: "Backspace",
        shift: `Backspace`,
        caps: "Backspace",
        shiftCaps: `Backspace`,
      },
      eng: {
        default: "Backspace",
        shift: "Backspace",
        caps: "Backspace",
        shiftCaps: "Backspace",
      },
      code: "Backspace",
    },
  ],
  [],
  [],
  [],
  [],
];
let keysLine = null;
let key = null;
let key_lenguage = null;
for (let i = 0; i < keysArray.length; i++) {
  keysLine = document.createElement("div");
  keysLine.classList.add("keys_line");
  containerKeyBoard.appendChild(keysLine);
  if (i == 0) {
    for (let keys in keysArray[i]) {
      console.log(keysArray[i][keys]);
      key = document.createElement("div");
      key.textContent = keysArray[i][keys].eng.default;
      key.classList.add("key");
      key.classList.add();
      keysLine.appendChild(key);
      for (let y = 0; y < 2; y++) {
        key_lenguage = document.createElement("div");
        key.appendChild(key_lenguage);
      }
    }
  }
}
