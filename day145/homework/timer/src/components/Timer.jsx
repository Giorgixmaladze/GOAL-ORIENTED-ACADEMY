import { use } from "react";
import { useState, useEffect } from "react";
import "./style.css"


function Timer() {
    const [seconds, setSeconds] = useState(localStorage.getItem("seconds") || 0)
    const [timerState, setTimerState] = useState("off")


    useEffect(() => {
        if (seconds > 0 && timerState == "on") {
            setTimeout(() => {
                setSeconds(seconds - 1)
                localStorage.setItem("seconds", JSON.stringify(seconds))
            }, 1000)
        }
    }, [seconds])

    function handleSubmit(e) {
        e.preventDefault()
        let second = e.target.second.value
        setTimerState("on")
        setSeconds(second)
        e.target.reset()
    }

    function startTimer() {
        setTimerState("on")
        setSeconds(seconds - 1)
        if(seconds <= 0){
            setSeconds(0)
        }
    }

    function stopTimer() {
        setTimerState("off")
    }

    return (
        <div id="container">

                <form onSubmit={handleSubmit}>
                    <input type="number" name="second" />
                    <button>Submit</button>
                </form>
                <div id="buttons">
                <button onClick={startTimer}>Start timer</button>
                <button onClick={stopTimer}>Stop timer</button>
                </div>


                <p>{seconds == 0 ? "Time is out" : seconds}</p>
        </div>
    )
}

export default Timer;