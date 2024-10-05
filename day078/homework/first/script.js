const butt = document.getElementById('butt');
const p1 = document.getElementById('p1');
let clickCounter = 0;

function count () {
    clickCounter++;
    p1.textContent = clickCounter;
};



