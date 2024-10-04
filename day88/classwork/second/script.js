// გექნებათ 1 ღილაკი, ღილაკზე დაჭერისას უნდა დაემატოს
//  ახალი პარაგრაფი შემთხვევითი 
// რიცხვით 0-იდან 1000-მდე დიაპაზონში, body თეგში


const btn =  document.getElementById("btn");

btn.addEventListener("click",(e) => {
    e.preventDefault();
    const p = document.createElement("p");

    p.innerHTML = Math.floor(Math.random() * 1001);

    btn.parentElement.appendChild(p)
        
})