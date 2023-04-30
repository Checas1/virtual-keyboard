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
  [
    {
      ru: { default: "Tab", shift: "Tab", caps: "Tab", shiftCaps: "Tab" },
      eng: { default: "Tab", shift: "Tab", caps: "Tab", shiftCaps: "Tab" },
      code: "Tab",
    },
    {
      ru: { default: "й", shift: "Й", caps: "Й", shiftCaps: "й" },
      eng: { default: "q", shift: "Q", caps: "Q", shiftCaps: "q" },
      code: "KeyQ",
    },
    {
      ru: { default: "ц", shift: `Ц`, caps: "Ц", shiftCaps: `ц` },
      eng: { default: "w", shift: "W", caps: "W", shiftCaps: "w" },
      code: "KeyW",
    },
    {
      ru: { default: "у", shift: `У`, caps: "У", shiftCaps: `у` },
      eng: { default: "e", shift: "E", caps: "E", shiftCaps: "e" },
      code: "KeyE",
    },
    {
      ru: { default: "к", shift: `К`, caps: "К", shiftCaps: `к` },
      eng: { default: "r", shift: "R", caps: "R", shiftCaps: "r" },
      code: "KeyR",
    },
    {
      ru: { default: "е", shift: `Е`, caps: "Е", shiftCaps: `е` },
      eng: { default: "t", shift: "T", caps: "T", shiftCaps: "t" },
      code: "KeyT",
    },
    {
      ru: { default: "н", shift: `Н`, caps: "Н", shiftCaps: `н` },
      eng: { default: "y", shift: "Y", caps: "Y", shiftCaps: "y" },
      code: "KeyY",
    },
    {
      ru: { default: "г", shift: `Г`, caps: "Г", shiftCaps: `г` },
      eng: { default: "u", shift: "U", caps: "U", shiftCaps: "u" },
      code: "KeyU",
    },
    {
      ru: { default: "ш", shift: `Ш`, caps: "Ш", shiftCaps: `ш` },
      eng: { default: "i", shift: "I", caps: "I", shiftCaps: "i" },
      code: "KeyI",
    },
    {
      ru: { default: "щ", shift: `Щ`, caps: "Щ", shiftCaps: `щ` },
      eng: { default: "o", shift: "O", caps: "O", shiftCaps: "o" },
      code: "KeyO",
    },
    {
      ru: { default: "з", shift: `З`, caps: "З", shiftCaps: `з` },
      eng: { default: "p", shift: "P", caps: "P", shiftCaps: "p" },
      code: "KeyP",
    },
    {
      ru: { default: "х", shift: `Х`, caps: "Х", shiftCaps: `х` },
      eng: { default: "[", shift: "{", caps: "[", shiftCaps: "{" },
      code: "BracketLeft",
    },
    {
      ru: { default: "ъ", shift: `Ъ`, caps: "Ъ", shiftCaps: `ъ` },
      eng: { default: "]", shift: "}", caps: "]", shiftCaps: "}" },
      code: "BracketRight",
    },
    {
      ru: { default: `\\`, shift: `/`, caps: "\\", shiftCaps: `/` },
      eng: { default: "\\", shift: "/", caps: "\\", shiftCaps: "/" },
      code: "Backslash",
    },
    {
      ru: {
        default: "Del",
        shift: `Del`,
        caps: "Del",
        shiftCaps: `Del`,
      },
      eng: {
        default: "Del",
        shift: "Del",
        caps: "Del",
        shiftCaps: "Del",
      },
      code: "Delete",
    },
  ],
  [
    {
      ru: {
        default: "CapsLock",
        shift: "CapsLock",
        caps: "CapsLock",
        shiftCaps: "CapsLock",
      },
      eng: {
        default: "CapsLock",
        shift: "CapsLock",
        caps: "CapsLock",
        shiftCaps: "CapsLock",
      },
      code: "CapsLock",
    },
    {
      ru: { default: "ф", shift: "Ф", caps: "Ф", shiftCaps: "ф" },
      eng: { default: "a", shift: "A", caps: "A", shiftCaps: "a" },
      code: "KeyA",
    },
    {
      ru: { default: "ы", shift: `Ы`, caps: "Ы", shiftCaps: `ы` },
      eng: { default: "s", shift: "S", caps: "S", shiftCaps: "s" },
      code: "KeyS",
    },
    {
      ru: { default: "в", shift: `В`, caps: "В", shiftCaps: `в` },
      eng: { default: "d", shift: "D", caps: "D", shiftCaps: "d" },
      code: "KeyD",
    },
    {
      ru: { default: "а", shift: `А`, caps: "А", shiftCaps: `а` },
      eng: { default: "f", shift: "F", caps: "F", shiftCaps: "f" },
      code: "KeyF",
    },
    {
      ru: { default: "п", shift: `П`, caps: "П", shiftCaps: `п` },
      eng: { default: "g", shift: "G", caps: "G", shiftCaps: "g" },
      code: "KeyG",
    },
    {
      ru: { default: "р", shift: `Р`, caps: "Р", shiftCaps: `р` },
      eng: { default: "h", shift: "H", caps: "H", shiftCaps: "h" },
      code: "KeyH",
    },
    {
      ru: { default: "о", shift: `О`, caps: "О", shiftCaps: `о` },
      eng: { default: "j", shift: "J", caps: "J", shiftCaps: "j" },
      code: "KeyJ",
    },
    {
      ru: { default: "л", shift: `Л`, caps: "Л", shiftCaps: `л` },
      eng: { default: "k", shift: "K", caps: "K", shiftCaps: "k" },
      code: "KeyK",
    },
    {
      ru: { default: "д", shift: `Д`, caps: "Д", shiftCaps: `д` },
      eng: { default: "l", shift: "L", caps: "L", shiftCaps: "l" },
      code: "KeyL",
    },
    {
      ru: { default: "ж", shift: `Ж`, caps: "Ж", shiftCaps: `ж` },
      eng: { default: ";", shift: ":", caps: ";", shiftCaps: ":" },
      code: "Semicolon",
    },
    {
      ru: { default: "э", shift: `Э`, caps: "Э", shiftCaps: `э` },
      eng: { default: "'", shift: `"`, caps: "'", shiftCaps: `"` },
      code: "Quote",
    },
    {
      ru: {
        default: "Enter",
        shift: `Enter`,
        caps: "Enter",
        shiftCaps: `Enter`,
      },
      eng: {
        default: "Enter",
        shift: "Enter",
        caps: "Enter",
        shiftCaps: "Enter",
      },
      code: "Enter",
    },
  ],
  [
    {
      ru: {
        default: "Shift",
        shift: "Shift",
        caps: "Shift",
        shiftCaps: "Shift",
      },
      eng: {
        default: "Shift",
        shift: "Shift",
        caps: "Shift",
        shiftCaps: "Shift",
      },
      code: "ShiftLeft",
    },
    {
      ru: { default: "я", shift: "Я", caps: "Я", shiftCaps: "я" },
      eng: { default: "z", shift: "Z", caps: "Z", shiftCaps: "z" },
      code: "KeyZ",
    },
    {
      ru: { default: "ч", shift: `Ч`, caps: "Ч", shiftCaps: `ч` },
      eng: { default: "x", shift: "X", caps: "X", shiftCaps: "x" },
      code: "KeyX",
    },
    {
      ru: { default: "с", shift: `С`, caps: "С", shiftCaps: `с` },
      eng: { default: "c", shift: "C", caps: "C", shiftCaps: "c" },
      code: "KeyC",
    },
    {
      ru: { default: "м", shift: `М`, caps: "М", shiftCaps: `м` },
      eng: { default: "v", shift: "V", caps: "V", shiftCaps: "v" },
      code: "KeyV",
    },
    {
      ru: { default: "и", shift: `И`, caps: "И", shiftCaps: `и` },
      eng: { default: "b", shift: "B", caps: "B", shiftCaps: "b" },
      code: "KeyB",
    },
    {
      ru: { default: "т", shift: `Т`, caps: "Т", shiftCaps: `т` },
      eng: { default: "n", shift: "N", caps: "N", shiftCaps: "n" },
      code: "KeyN",
    },
    {
      ru: { default: "ь", shift: `Ь`, caps: "Ь", shiftCaps: `ь` },
      eng: { default: "m", shift: "M", caps: "M", shiftCaps: "m" },
      code: "KeyM",
    },
    {
      ru: { default: "б", shift: `Б`, caps: "Б", shiftCaps: `б` },
      eng: { default: ",", shift: "<", caps: ",", shiftCaps: "<" },
      code: "Comma",
    },
    {
      ru: { default: "ю", shift: `Ю`, caps: "Ю", shiftCaps: `ю` },
      eng: { default: ".", shift: ">", caps: ".", shiftCaps: ">" },
      code: "Period",
    },
    {
      ru: { default: ".", shift: `,`, caps: ".", shiftCaps: `,` },
      eng: { default: "/", shift: "?", caps: "/", shiftCaps: "?" },
      code: "Slash",
    },
    {
      ru: { default: "↑", shift: `↑`, caps: "↑", shiftCaps: `↑` },
      eng: { default: "↑", shift: `↑`, caps: "↑", shiftCaps: `↑` },
      code: "ArrowUp",
    },
    {
      ru: {
        default: "Shift",
        shift: `Shift`,
        caps: "Shift",
        shiftCaps: `Shift`,
      },
      eng: {
        default: "Shift",
        shift: "Shift",
        caps: "Shift",
        shiftCaps: "Shift",
      },
      code: "ShiftRight",
    },
  ],
  [
    {
      ru: { default: "Ctrl", shift: "Ctrl", caps: "Ctrl", shiftCaps: "Ctrl" },
      eng: { default: "Ctrl", shift: "Ctrl", caps: "Ctrl", shiftCaps: "Ctrl" },
      code: "ControlLeft",
    },
    {
      ru: { default: "Win", shift: `Win`, caps: "Win", shiftCaps: `Win` },
      eng: { default: "Win", shift: "Win", caps: "Win", shiftCaps: "Win" },
      code: "MetaLeft",
    },
    {
      ru: { default: "Alt", shift: `Alt`, caps: "Alt", shiftCaps: `Alt` },
      eng: { default: "Alt", shift: "Alt", caps: "Alt", shiftCaps: "Alt" },
      code: "AltLeft",
    },
    {
      ru: { default: " ", shift: ` `, caps: " ", shiftCaps: ` ` },
      eng: { default: " ", shift: " ", caps: " ", shiftCaps: " " },
      code: "Space",
    },
    {
      ru: { default: "Alt", shift: `Alt`, caps: "Alt", shiftCaps: `Alt` },
      eng: { default: "Alt", shift: "Alt", caps: "Alt", shiftCaps: "Alt" },
      code: "AltRight",
    },
    {
      ru: { default: "←", shift: `←`, caps: "←", shiftCaps: `←` },
      eng: { default: "←", shift: "←", caps: "←", shiftCaps: "←" },
      code: "ArrowLeft",
    },
    {
      ru: { default: "↓", shift: `↓`, caps: "↓", shiftCaps: `↓` },
      eng: { default: "↓", shift: "↓", caps: "↓", shiftCaps: "↓" },
      code: "ArrowDown",
    },
    {
      ru: { default: "→", shift: `→`, caps: "→", shiftCaps: `→` },
      eng: { default: "→", shift: "→", caps: "→", shiftCaps: "→" },
      code: "ArrowRight",
    },
    {
      ru: { default: "Ctrl", shift: `Ctrl`, caps: "Ctrl", shiftCaps: `Ctrl` },
      eng: { default: "Ctrl", shift: "Ctrl", caps: "Ctrl", shiftCaps: "Ctrl" },
      code: "ControlRight",
    },
  ],
];

// Keys
let keysLine = null;
let key = null;
let key_lenguage = null;

let keyDefault = null;
let keyShift = null;
let keyCaps = null;
let keyShiftCaps = null;

for (let i = 0; i < keysArray.length; i++) {
  keysLine = document.createElement("div");
  keysLine.classList.add("keys_line");
  containerKeyBoard.appendChild(keysLine);

  for (let keys in keysArray[i]) {
    key = document.createElement("div");
    key.classList.add("key");
    key.classList.add(keysArray[i][keys].code);
    keysLine.appendChild(key);
    console.log(keysArray[i][keys]);
    if (keysArray[i][keys].eng) {
      key_lenguage = document.createElement("div");
      key_lenguage.classList.add("eng");
      key.appendChild(key_lenguage);
      createEngKeys(i, keys);
    }
    if (keysArray[i][keys].ru) {
      key_lenguage = document.createElement("div");
      key_lenguage.classList.add("ru");
      key.appendChild(key_lenguage);
      // createRusKeys(i, keys);
    }
  }
}

// Functions createkeys

function createRusKeys(i, keys) {
  if (keysArray[i][keys].ru.default) {
    console.log(keysArray[i][keys].ru.default);
    keyDefault = document.createElement("div");
    keyDefault.classList.add("key_default");
    key_lenguage.appendChild(keyDefault);
  }

  if (keysArray[i][keys].ru.shift) {
    keyShift = document.createElement("div");
    keyShift.classList.add("key_shift");
    key_lenguage.appendChild(keyShift);
  }

  if (keysArray[i][keys].ru.caps) {
    keyCaps = document.createElement("div");
    keyCaps.classList.add("key_caps");
    key_lenguage.appendChild(keyCaps);
  }

  if (keysArray[i][keys].ru.shiftCaps) {
    keyShiftCaps = document.createElement("div");
    keyShiftCaps.classList.add("key_shiftCaps");
    key_lenguage.appendChild(keyShiftCaps);
  }
}

function createEngKeys(i, keys) {
  if (keysArray[i][keys].eng.default) {
    keyDefault = document.createElement("div");
    keyDefault.textContent = keysArray[i][keys].eng.default;
    keyDefault.classList.add("key_default");
    key_lenguage.appendChild(keyDefault);
  }

  if (keysArray[i][keys].eng.shift) {
    keyShift = document.createElement("div");
    keyShift.textContent = keysArray[i][keys].eng.shift;
    keyShift.classList.add("key_shift");
    keyShift.classList.add("hide");
    key_lenguage.appendChild(keyShift);
  }

  if (keysArray[i][keys].eng.caps) {
    keyCaps = document.createElement("div");
    keyCaps.textContent = keysArray[i][keys].eng.caps;
    keyCaps.classList.add("key_caps");
    keyCaps.classList.add("hide");
    key_lenguage.appendChild(keyCaps);
  }

  if (keysArray[i][keys].eng.shiftCaps) {
    keyShiftCaps = document.createElement("div");
    keyShiftCaps.textContent = keysArray[i][keys].eng.shiftCaps;
    keyShiftCaps.classList.add("key_shiftCaps");
    keyShiftCaps.classList.add("hide");
    key_lenguage.appendChild(keyShiftCaps);
  }
}

// Check Shift Button
// Current button
let currentKey = document.querySelectorAll(".key");
let defaultKeyses = document.querySelectorAll(".key_default");
let shiftKeys = document.querySelectorAll(".key_shift");

let shiftRight = document.querySelector(".ShiftRight");
let shiftLeft = document.querySelector(".ShiftLeft");

// keyDown

document.addEventListener("keydown", function (event) {
  if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
    shiftKeys.forEach((element) => {
      element.classList.toggle("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.toggle("hide");
    });
  }
});

// textArea Active

document.addEventListener("click", (event) => {
  if (textArea.contains(event.target)) {
    textArea.classList.add("active");
  }
});

document.addEventListener("click", (event) => {
  if (!textArea.contains(event.target)) {
    textArea.classList.remove("active");
  }
});

// add Shift active

document.addEventListener("keydown", function (event) {
  let cursorStart = textArea.selectionStart;
  currentKey.forEach((element) => {
    if (element.className.includes(event.code)) {
      element.classList.add("active");

      if (event.code === "Space") {
        event.preventDefault();
      }
      if (event.code === "Tab") {
        event.preventDefault();
        textArea.value += "    ";
      }
      if (event.code === "Enter") {
        event.preventDefault();
        textArea.value += "\n";
      }
      if (event.code === "Backspace") {
        event.preventDefault();
        if (textArea.selectionStart > 0) {
          textArea.value =
            textArea.value.slice(0, cursorStart - 1) +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart - 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
      }
      if (
        event.code === "ArrowUp" ||
        event.code === "ArrowDown" ||
        event.code === "ArrowLeft" ||
        event.code === "ArrowRight"
      ) {
        event.preventDefault();
      }
      if (
        event.code != "ShiftLeft" &&
        event.code != "ShiftRight" &&
        event.code != "Tab" &&
        event.code != "Backspace" &&
        event.code != "CapsLock" &&
        event.code != "ControlLeft" &&
        event.code != "ControlRight" &&
        event.code != "Del" &&
        event.code != "AltLeft" &&
        event.code != "AltRight" &&
        event.code != "MetaLeft" &&
        event.code != "Enter"
      ) {
        if (
          !shiftLeft.classList.contains("active") &&
          !shiftRight.classList.contains("active")
        ) {
          const child = element.querySelector(".key_default");
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          shiftLeft.classList.contains("active") ||
          shiftRight.classList.contains("active")
        ) {
          const child = element.querySelector(".key_shift");
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
      }
    }
  });
});

// keyUp

document.addEventListener("keyup", function (event) {
  currentKey.forEach((element) => {
    if (element.className.includes(event.code)) {
      element.classList.remove("active");
    }
  });

  if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
    shiftKeys.forEach((element) => {
      element.classList.toggle("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.toggle("hide");
    });
  }
});

// click

currentKey.forEach((element) => {
  element.addEventListener("mousedown", function (event) {
    let cursorStart = textArea.selectionStart;
    this.classList.add("active");

    if (this.classList.contains("Space")) {
      event.preventDefault();
    }
    if (this.classList.contains("Tab")) {
      event.preventDefault();
      textArea.value += "    ";
    }
    if (this.classList.contains("Enter")) {
      event.preventDefault();
      textArea.value += "\n";
    }
    if (this.classList.contains("Backspace")) {
      event.preventDefault();
      // textArea.value = textArea.value.slice(0, -1);
      if (textArea.selectionStart > 0) {
        textArea.value =
          textArea.value.slice(0, cursorStart - 1) +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart - 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
    }
    if (
      !this.classList.contains("ShiftLeft") &&
      !this.classList.contains("ShiftRight") &&
      !this.classList.contains("Tab") &&
      !this.classList.contains("Backspace") &&
      !this.classList.contains("CapsLock") &&
      !this.classList.contains("ControlLeft") &&
      !this.classList.contains("ControlRight") &&
      !this.classList.contains("Del") &&
      !this.classList.contains("AltLeft") &&
      !this.classList.contains("AltRight") &&
      !this.classList.contains("MetaLeft") &&
      !this.classList.contains("Enter")
    ) {
      if (
        !shiftLeft.classList.contains("active") &&
        !shiftRight.classList.contains("active")
      ) {
        const child = element.querySelector(".key_default");
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          child.textContent +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart + 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
      if (
        shiftLeft.classList.contains("active") ||
        shiftRight.classList.contains("active")
      ) {
        const child = element.querySelector(".key_shift");
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          child.textContent +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart + 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
    }
  });
});

currentKey.forEach((element) => {
  element.addEventListener("mouseup", function () {
    this.classList.remove("active");
  });
});

textArea.addEventListener("keydown", function (event) {
  event.preventDefault();
});
