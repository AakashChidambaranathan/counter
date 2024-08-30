const decreasebut = document.getElementById("de");
const resetbut = document.getElementById("re");
const incressbut = document.getElementById("in");
const conterlabel = document.getElementById("labelconter");

let count = 0;

incressbut.onclick = function() {
    count++;
    conterlabel.textContent = count;
}
decreasebut.onclick = function() {
    count--;
    conterlabel.textContent = count;
}
resetbut.onclick = function() {
    count = 0;
    conterlabel.textContent = count;
}
