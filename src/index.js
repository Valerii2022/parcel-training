const handleWrapperOver = ({ target }) => {
  const color =
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

  if (target.classList.contains("color-wrapper")) {
    target.style.backgroundColor = color;
  }
};

const handleWrapperOut = ({ target }) => {
  const color = "#fff";

  if (target.classList.contains("color-wrapper")) {
    target.style.backgroundColor = color;
  }
};

const wrapperRef = document.querySelector(".wrapper");

wrapperRef.addEventListener("mouseover", handleWrapperOver);
wrapperRef.addEventListener("mouseout", handleWrapperOut);

// body.style.backgroundColor = `'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()'`;

// class Hero {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// const soldier = new Hero("boss");

// const result = (a, b) => a * b;

// console.log(result(2, 8));
