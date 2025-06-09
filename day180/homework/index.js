const form = document.querySelector("form");
let colors = [];
const addColor = (color) => {
    if (colors.some(item => item === color)) {
        return;
    }
    colors.push(color);
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const color = document.querySelector("input");
    addColor(color.value);
    console.log(colors);
});
