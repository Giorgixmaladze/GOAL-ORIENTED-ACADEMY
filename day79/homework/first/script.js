const form = document.getElementById("myForm");

function validateForm() {
    const pass = form.elements.pass.value;
    const p1 = document.getElementById("p1");

    if (pass.length < 8) {
        p1.textContent = "Error: Password must be at least 8 characters.";
        p1.style.color = "red";
    } else {
        p1.textContent = "";
    }
    console.log("form submited succesfully")
}

console.dir(form);

