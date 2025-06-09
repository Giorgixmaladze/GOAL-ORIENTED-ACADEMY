type Color = {
  name: string;
  isFavorite: boolean;
};

let colors: Color[] = [];
let favorites: Color[] = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("colorForm") as HTMLFormElement;
  const input = document.getElementById("colorInput") as HTMLInputElement;
  const colorDiv = document.getElementById("colorList") as HTMLDivElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() !== "") {
      addColor(input.value.trim());
      input.value = "";
    }
  });

  function addColor(colorName: string) {
    if (colors.some((item) => item.name === colorName)) return;

    const newColor: Color = { name: colorName, isFavorite: false };
    colors.push(newColor);
    renderAllColors(colors);
  }

  function renderAllColors(arr: Color[]) {
    colorDiv.innerHTML = "";
    const ul = document.createElement("ul");

    arr.forEach((color, index) => {
      const li = document.createElement("li");
      li.textContent = color.name + " ";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = color.isFavorite;
      checkbox.addEventListener("change", () => {
        addFavorite(index);
      });

      li.appendChild(checkbox);
      ul.appendChild(li);
    });

    colorDiv.appendChild(ul);
  }

  function addFavorite(index: number) {
    const color = colors[index];
    color.isFavorite = true;

    const alreadyFavorite = favorites.some((fav) => fav.name === color.name);
    if (!alreadyFavorite) {
      favorites.push(color);
    }

    console.log("Favorites:", favorites);
  }
});