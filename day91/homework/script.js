const myForm = document.getElementById("myform");




const button = document.getElementById("submit");

button.addEventListener("click" ,(e) => {
    e.preventDefault();
    const dayValue = myForm.day.value;
    const monthValue = myForm.month.value;
    const yearValue = myForm.year.value

    
    
    const date = new Date();
    const currDay = date.getDate()
    const currMonths = date.getMonth() + 1
    const currYears  = date.getFullYear()

    const p = document.getElementsByClassName("error");
   

    const days = document.getElementsByClassName("number");
    days[2].textContent = Number(dayValue) - currDay;
    days[1].textContent = Number(monthValue) - currMonths;
    days[0].textContent = currYears - Number(yearValue);
    if(dayValue === ""){
        p[0].style.color = "red";
        p[0].textContent = "This field is required"
        myForm.day.style.borderColor = "red"
    }if(monthValue === ""){
        p[1].style.color = "red";
        p[1].textContent = "This field is required";
         myForm.month.style.borderColor = "red";
    }if(yearValue == ""){
        p[2].style.color = "red";
        p[2].textContent = "This field is required"
         myForm.year.style.borderColor = "red"
    }else{
        p[0].textContent = "";
        p[1].textContent = "";
        p[2].textContent = "";
        myForm.day.style.borderColor = "grey"
        myForm.month.style.borderColor = "grey"
        myForm.year.style.borderColor = "grey"

    }
    console.dir(p[1])




    if((dayValue <1 || dayValue > 31)){
        days[2].textContent = "--";
        
    }if((monthValue > 12 || monthValue < 1)){
        days[1].textContent ="--";
    }if((yearValue > currYears)){
        days[0].textContent ="--"
    }

    


    
    
    
    

    
})