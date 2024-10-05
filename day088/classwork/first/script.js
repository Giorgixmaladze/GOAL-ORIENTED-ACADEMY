const form = document.getElementById("myform");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    const fullname = form.fullname.value;
    const email = form.email.value;
    const pass = form.pass.value

    const tr = document.createElement("tr");

    const fullnameTd = document.createElement("td");
    fullnameTd.innerHTML = fullname;

    const emailTd = document.createElement("td");
    emailTd.innerHTML = email;

    const passTd = document.createElement("td");
    passTd.innerHTML = pass;

    tr.appendChild(fullnameTd);
    tr.appendChild(emailTd);
    tr.appendChild(passTd);


    form.nextElementSibling.children[1].appendChild(tr);
})

