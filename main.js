import { keysArray } from "./keys.js";

// create headline and textarea

let body = document.querySelector(".body");
let main = document.createElement("main");
let container = document.createElement("div");
let headline = document.createElement("h1");
let textArea = document.createElement("textarea");
let description = document.createElement("div");
let changeLenguage = document.createElement("div");

main.classList.add("main");
body.prepend(main);

container.classList.add("container");
main.prepend(container);

headline.classList.add("headline");
headline.textContent = "RSS Виртуальная клавиатура";
container.appendChild(headline);

textArea.classList.add("main__textarea");
textArea.setAttribute("autocapitalize", "off");
textArea.setAttribute("autocorrect", "off");
container.appendChild(textArea);

// create Keyboard

let mainKeyboard = document.createElement("div");
let containerKeyBoard = document.createElement("div");

mainKeyboard.classList.add("main__keyboard");
container.appendChild(mainKeyboard);

containerKeyBoard.classList.add("container__keyboard");
mainKeyboard.appendChild(containerKeyBoard);

description.classList.add("os");
description.textContent = "Клавиатура создана в операционной системе macOS";
container.appendChild(description);

changeLenguage.classList.add("change-lenguage");
changeLenguage.textContent =
  "Для переключения языка комбинация: левыe ctrl + alt";
container.appendChild(changeLenguage);

// Keys
let keysLine = null;
let key = null;
let key_lenguage = null;
let keyDefault = null;
let keyShift = null;
let keyCaps = null;
let keyShiftCaps = null;

let currentKey;
let defaultKeyses;
let shiftKeys;
let capsKeys;
let capsShiftKeys;
let shiftRight;
let shiftLeft;
let capsLock;
let leftCtrl;
let leftAlt;

let englishLenguage;
let russianLenguage;

let currentLenguage = "eng";
let index = 0;

window.addEventListener("load", function () {
  currentLenguage = sessionStorage.getItem("language");
  createElems();

  if (currentLenguage == "eng") {
    index = 0;
  } else if (currentLenguage == "ru") {
    index = 1;
  }

  currentKey = document.querySelectorAll(".key");
  defaultKeyses = document.querySelectorAll(".key_default");
  shiftKeys = document.querySelectorAll(".key_shift");
  capsKeys = document.querySelectorAll(".key_caps");
  capsShiftKeys = document.querySelectorAll(".key_shiftCaps");
  shiftRight = document.querySelector(".ShiftRight");
  shiftLeft = document.querySelector(".ShiftLeft");
  capsLock = document.querySelector(".CapsLock");
  leftCtrl = document.querySelector(".ControlLeft");
  leftAlt = document.querySelector(".AltLeft");
  englishLenguage = document.querySelectorAll(".eng");
  russianLenguage = document.querySelectorAll(".ru");
  clickElem();
});

function createElems() {
  for (let i = 0; i < keysArray.length; i++) {
    keysLine = document.createElement("div");
    keysLine.classList.add("keys_line");
    containerKeyBoard.appendChild(keysLine);

    for (let keys in keysArray[i]) {
      key = document.createElement("div");
      key.classList.add("key");
      key.classList.add(keysArray[i][keys].code);
      keysLine.appendChild(key);
      if (keysArray[i][keys].eng) {
        key_lenguage = document.createElement("div");
        key_lenguage.classList.add("eng");
        key.appendChild(key_lenguage);
        if (currentLenguage == "ru") {
          key_lenguage.classList.add("hide");
        }
        createEngKeys(i, keys);
      }
      if (keysArray[i][keys].ru) {
        key_lenguage = document.createElement("div");
        key_lenguage.classList.add("ru");
        key.appendChild(key_lenguage);
        if (currentLenguage == "eng") {
          key_lenguage.classList.add("hide");
        }
        createRusKeys(i, keys);
      }
    }
  }
}
// Functions createkeys

function createRusKeys(i, keys) {
  if (keysArray[i][keys].ru.default) {
    keyDefault = document.createElement("div");
    keyDefault.textContent = keysArray[i][keys].ru.default;
    keyDefault.classList.add("key_default");
    key_lenguage.appendChild(keyDefault);
  }

  if (keysArray[i][keys].ru.shift) {
    keyShift = document.createElement("div");
    keyShift.textContent = keysArray[i][keys].ru.shift;
    keyShift.classList.add("key_shift");
    keyShift.classList.add("hide");
    key_lenguage.appendChild(keyShift);
  }

  if (keysArray[i][keys].ru.caps) {
    keyCaps = document.createElement("div");
    keyCaps.textContent = keysArray[i][keys].ru.caps;
    keyCaps.classList.add("key_caps");
    keyCaps.classList.add("hide");
    key_lenguage.appendChild(keyCaps);
  }

  if (keysArray[i][keys].ru.shiftCaps) {
    keyShiftCaps = document.createElement("div");
    keyShiftCaps.textContent = keysArray[i][keys].ru.shiftCaps;
    keyShiftCaps.classList.add("key_shiftCaps");
    keyShiftCaps.classList.add("hide");
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

document.addEventListener("keydown", function (event) {
  if (
    (event.code == "ShiftLeft" && !capsLock.classList.contains("active")) ||
    (event.code == "ShiftRight" && !capsLock.classList.contains("active"))
  ) {
    shiftKeys.forEach((element) => {
      element.classList.toggle("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.toggle("hide");
    });
  }
  if (event.code == "CapsLock" && !capsLock.classList.contains("active")) {
    shiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.add("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.remove("hide");
    });
  }
  if (event.code == "CapsLock" && capsLock.classList.contains("active")) {
    defaultKeyses.forEach((element) => {
      element.classList.toggle("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.add("hide");
    });
  }
  if (
    (shiftLeft.classList.contains("active") && event.code == "CapsLock") ||
    (shiftRight.classList.contains("active") && event.code == "CapsLock")
  ) {
    shiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.add("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.add("hide");
    });
    capsShiftKeys.forEach((element) => {
      element.classList.remove("hide");
    });
  }
  if (
    (capsLock.classList.contains("active") && event.code == "ShiftLeft") ||
    (capsLock.classList.contains("active") && event.code == "ShiftRight")
  ) {
    shiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.add("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.add("hide");
    });
    capsShiftKeys.forEach((element) => {
      element.classList.remove("hide");
    });
  }
});

textArea.addEventListener("keydown", function (event) {
  event.preventDefault();
});

let setSession = () => {
  sessionStorage.setItem("language", "ru");
  console.log(sessionStorage);
};

setSession();
document.addEventListener("keydown", function (event) {
  let cursorStart = textArea.selectionStart;
  currentKey.forEach((element) => {
    if (element.className.includes(event.code)) {
      element.classList.add("active");
      if (
        leftCtrl.classList.contains("active") &&
        leftAlt.classList.contains("active")
      ) {
        if (currentLenguage == "eng") {
          setSession();
          currentLenguage = "ru";
          index = 1;
          englishLenguage.forEach((elem) => {
            elem.classList.add("hide");
          });
          russianLenguage.forEach((elem) => {
            elem.classList.remove("hide");
          });
        } else if (currentLenguage == "ru") {
          setSession();
          currentLenguage = "eng";
          index = 0;
          russianLenguage.forEach((elem) => {
            elem.classList.add("hide");
          });
          englishLenguage.forEach((elem) => {
            elem.classList.remove("hide");
          });
        }
      }

      if (event.code === "Space") {
        event.preventDefault();
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart + 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
      if (event.code === "Tab") {
        event.preventDefault();
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          "    " +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart + 4;
        textArea.selectionEnd = textArea.selectionStart;
      }
      if (event.code === "Enter") {
        event.preventDefault();
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          "\n" +
          textArea.value.slice(cursorStart);
        let nextLinePosition = textArea.value.indexOf("\n", cursorStart) + 1;
        textArea.selectionStart = nextLinePosition;
        textArea.selectionEnd = textArea.selectionStart;
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
      if (event.code === "Delete") {
        event.preventDefault();
        if (textArea.selectionStart < textArea.value.length) {
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            textArea.value.slice(cursorStart + 1);
          textArea.selectionStart = cursorStart;
          textArea.selectionEnd = textArea.selectionStart;
        }
      }
      const { code } = event;
      if (
        code === "ArrowUp" ||
        code === "ArrowDown" ||
        code === "ArrowLeft" ||
        code === "ArrowRight"
      ) {
        event.preventDefault();
      }

      if (
        code != "ShiftLeft" &&
        code != "ShiftRight" &&
        code != "Tab" &&
        code != "Backspace" &&
        code != "CapsLock" &&
        code != "ControlLeft" &&
        code != "ControlRight" &&
        code != "Delete" &&
        code != "AltLeft" &&
        code != "AltRight" &&
        code != "MetaLeft" &&
        code != "Enter"
      ) {
        if (
          !shiftLeft.classList.contains("active") &&
          !shiftRight.classList.contains("active") &&
          !capsLock.classList.contains("active")
        ) {
          const child = element.querySelectorAll(".key_default")[index];
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          (!capsLock.classList.contains("active") &&
            shiftLeft.classList.contains("active")) ||
          (shiftRight.classList.contains("active") &&
            !capsLock.classList.contains("active"))
        ) {
          const child = element.querySelectorAll(".key_shift")[index];
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          capsLock.classList.contains("active") &&
          !shiftLeft.classList.contains("active") &&
          !shiftRight.classList.contains("active")
        ) {
          const child = element.querySelectorAll(".key_caps")[index];
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          (capsLock.classList.contains("active") &&
            shiftLeft.classList.contains("active")) ||
          (shiftRight.classList.contains("active") &&
            capsLock.classList.contains("active"))
        ) {
          const child = element.querySelectorAll(".key_shiftCaps")[index];
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
      element.classList.add("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.remove("hide");
    });
  }
  if (
    event.code == "CapsLock" &&
    !shiftLeft.classList.contains("active") &&
    !shiftRight.classList.contains("active")
  ) {
    shiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.remove("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.add("hide");
    });
  }
  if (
    (event.code == "CapsLock" && shiftLeft.classList.contains("active")) ||
    (event.code == "CapsLock" && shiftRight.classList.contains("active"))
  ) {
    defaultKeyses.forEach((element) => {
      element.classList.add("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.add("hide");
    });
    shiftKeys.forEach((element) => {
      element.classList.remove("hide");
    });
    capsShiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
  }

  if (
    (capsLock.classList.contains("active") && event.code == "ShiftLeft") ||
    (capsLock.classList.contains("active") && event.code == "ShiftRight")
  ) {
    shiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
    defaultKeyses.forEach((element) => {
      element.classList.add("hide");
    });
    capsKeys.forEach((element) => {
      element.classList.remove("hide");
    });
    capsShiftKeys.forEach((element) => {
      element.classList.add("hide");
    });
  }
});

// click
function clickElem() {
  currentKey.forEach((element) => {
    element.addEventListener("mousedown", function (event) {
      let cursorStart = textArea.selectionStart;
      this.classList.add("active");

      if (
        (this.classList.contains("ShiftLeft") &&
          !capsLock.classList.contains("active")) ||
        (this.classList.contains("ShiftRight") &&
          !capsLock.classList.contains("active"))
      ) {
        shiftKeys.forEach((element) => {
          element.classList.remove("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.add("hide");
        });
      }

      if (this.classList.contains("CapsLock")) {
        shiftKeys.forEach((element) => {
          element.classList.add("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.add("hide");
        });
        capsKeys.forEach((element) => {
          element.classList.remove("hide");
        });
      }

      if (
        (this.classList.contains("CapsLock") &&
          shiftRight.classList.contains("active")) ||
        (this.classList.contains("CapsLock") &&
          shiftLeft.classList.contains("active"))
      ) {
        shiftKeys.forEach((element) => {
          element.classList.add("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.add("hide");
        });
        capsKeys.forEach((element) => {
          element.classList.add("hide");
        });
        capsShiftKeys.forEach((element) => {
          element.classList.remove("hide");
        });
      }

      if (
        (this.classList.contains("ShiftLeft") &&
          capsLock.classList.contains("active")) ||
        (this.classList.contains("ShiftRight") &&
          capsLock.classList.contains("active"))
      ) {
        shiftKeys.forEach((element) => {
          element.classList.add("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.add("hide");
        });
        capsKeys.forEach((element) => {
          element.classList.add("hide");
        });
        capsShiftKeys.forEach((element) => {
          element.classList.remove("hide");
        });
      }

      if (this.classList.contains("Space")) {
        event.preventDefault();
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart + 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
      if (this.classList.contains("Tab")) {
        event.preventDefault();
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          "    " +
          textArea.value.slice(cursorStart);
        textArea.selectionStart = cursorStart + 4;
        textArea.selectionEnd = textArea.selectionStart;
      }
      if (this.classList.contains("Enter")) {
        event.preventDefault();
        textArea.value =
          textArea.value.slice(0, cursorStart) +
          "\n" +
          textArea.value.slice(cursorStart);
        let nextLinePosition = textArea.value.indexOf("\n", cursorStart) + 1;
        textArea.selectionStart = nextLinePosition;
        textArea.selectionEnd = textArea.selectionStart;
      }
      if (this.classList.contains("Backspace")) {
        event.preventDefault();
        if (textArea.selectionStart > 0) {
          textArea.value =
            textArea.value.slice(0, cursorStart - 1) +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart - 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
      }

      if (this.classList.contains("Delete")) {
        event.preventDefault();
        if (textArea.selectionStart < textArea.value.length) {
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            textArea.value.slice(cursorStart + 1);
          textArea.selectionStart = cursorStart;
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
        !this.classList.contains("Delete") &&
        !this.classList.contains("AltLeft") &&
        !this.classList.contains("AltRight") &&
        !this.classList.contains("MetaLeft") &&
        !this.classList.contains("Enter")
      ) {
        if (
          !shiftLeft.classList.contains("active") &&
          !shiftRight.classList.contains("active") &&
          !capsLock.classList.contains("active")
        ) {
          const child = element.querySelectorAll(".key_default")[index];
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          (!capsLock.classList.contains("active") &&
            shiftLeft.classList.contains("active")) ||
          (!capsLock.classList.contains("active") &&
            shiftRight.classList.contains("active"))
        ) {
          const child = element.querySelectorAll(".key_shift")[index];
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          capsLock.classList.contains("active") &&
          !shiftLeft.classList.contains("active") &&
          !shiftRight.classList.contains("active")
        ) {
          const child = element.querySelectorAll(".key_caps")[index];
          textArea.value =
            textArea.value.slice(0, cursorStart) +
            child.textContent +
            textArea.value.slice(cursorStart);
          textArea.selectionStart = cursorStart + 1;
          textArea.selectionEnd = textArea.selectionStart;
        }
        if (
          (capsLock.classList.contains("active") &&
            shiftLeft.classList.contains("active")) ||
          (capsLock.classList.contains("active") &&
            shiftRight.classList.contains("active"))
        ) {
          const child = element.querySelectorAll(".key_shiftCaps")[index];
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
      if (
        this.classList.contains("ShiftLeft") ||
        this.classList.contains("ShiftRight")
      ) {
        shiftKeys.forEach((element) => {
          element.classList.toggle("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.toggle("hide");
        });
      }

      if (
        (this.classList.contains("ShiftLeft") &&
          capsLock.classList.contains("active")) ||
        (this.classList.contains("ShiftRight") &&
          capsLock.classList.contains("active"))
      ) {
        shiftKeys.forEach((element) => {
          element.classList.remove("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.add("hide");
        });
        capsKeys.forEach((element) => {
          element.classList.add("hide");
        });
        capsShiftKeys.forEach((element) => {
          element.classList.add("hide");
        });
      }
      if (this.classList.contains("CapsLock")) {
        shiftKeys.forEach((element) => {
          element.classList.add("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.toggle("hide");
        });
        capsKeys.forEach((element) => {
          element.classList.add("hide");
        });
      }
      if (
        (this.classList.contains("CapsLock") &&
          shiftRight.classList.contains("active")) ||
        (this.classList.contains("CapsLock") &&
          shiftLeft.classList.contains("active"))
      ) {
        shiftKeys.forEach((element) => {
          element.classList.remove("hide");
        });
        defaultKeyses.forEach((element) => {
          element.classList.add("hide");
        });
        capsKeys.forEach((element) => {
          element.classList.add("hide");
        });
        capsShiftKeys.forEach((element) => {
          element.classList.add("hide");
        });
      }
    });
  });
}
