let puzzle = document.querySelector(".puzzle-container");
let startButton = document.querySelector(".startBtn");
let complete = document.querySelector(".complete-text");

let cnt = 0;

let lll = new Array(15).fill().forEach((_, i) => {
    let li = document.createElement("li");
    li.setAttribute("index", i);
    li.classList.add(`list${i}`);
    puzzle.appendChild(li);
    cnt++;

    li.innerHTML = cnt;

    console.log(li);
});
