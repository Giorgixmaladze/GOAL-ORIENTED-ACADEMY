const interval = setInterval(checkMinute, 1000);

function checkMinute() {
    const currentDate = new Date();
    const currentMinute = currentDate.getMinutes();

    if (currentMinute === 35) {
        clearInterval(interval)
        console.log("Interval disabled at minute 35.");
    }
}





let time = 0

let interval2 = setInterval(function(){
    time ++
    console.log(time)
    if(time === 35){
        clearInterval(interval2);
        console.log("time out")
    }
    
},1000)