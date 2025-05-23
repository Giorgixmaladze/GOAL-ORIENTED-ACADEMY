import { useState, useEffect } from "react";


function Calculator() {
    const [firstNumber, setFirstnumber] = useState("")
    const [secondNumber, setSecondnumber] = useState("")
    const [op, setOp] = useState("")

    const handleClick = (item) => {
      
        if (item === "reset") {
            setFirstnumber("");
            setSecondnumber("");
            setOp("");
        } else if (item === "del") {
            if (secondNumber) {
                setSecondnumber(secondNumber.slice(0, -1));
            } else {
                setFirstnumber(firstNumber.slice(0, -1));
            }
        } else if (item === "=") {
            let result;
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);

            if(op === "+"){
                result = num1 + num2
            }else if(op ==="-"){
                result = num1 - num2
            }else if(op === "*"){
                result = num1 * num2
            }else if(op === "/"){
                result = num1 !== 0 ? num1 / num2 : "Error"
            }
            setFirstnumber(result.toString());
        
            setSecondnumber("");
            setOp("");
        } else if (["+", "-", "*", "/"].includes(item)) {
            setOp(item);
        } else {
            if (op === "") {
                setFirstnumber(firstNumber + item);
            } else {
                setSecondnumber(secondNumber + item);
            }
        }

   
    }

    return (

        <main>
            <div id="calculator">

                <input type="text" value={firstNumber === "" ? "0" : (op.length === 0 || secondNumber === "" ?
                    (firstNumber[0] === "" && firstNumber[1] !== "." && firstNumber.length === 2 ? firstNumber.slice(1, 16) : firstNumber.slice(0, 16)) :
                    (secondNumber === "" ? "0" : secondNumber.slice(0, 16))

                )} readOnly name="num" id="inp" />
                <div id="nums">
                    <button className="nums" onClick={() => handleClick(7)}>7</button>
                    <button className="nums" onClick={() => handleClick(8)}>8</button>
                    <button className="nums" onClick={() => handleClick(9)}>9</button>
                    <button id="del" onClick={() => handleClick("del")} >DEL</button>
                    <button className="nums" onClick={() => handleClick(4)}>4</button>
                    <button className="nums" onClick={() => handleClick(5)}>5</button>
                    <button className="nums" onClick={() => handleClick(6)}>6</button>
                    <button className="nums" onClick={() => handleClick("+")}>+</button>
                    <button className="nums" onClick={() => handleClick(1)}>1</button>
                    <button className="nums" onClick={() => handleClick(2)}>2</button>
                    <button className="nums" onClick={() => handleClick(3)}>3</button>
                    <button className="nums" onClick={() => handleClick("-")}>-</button>
                    <button className="nums" onClick={() => handleClick(".")}>.</button>
                    <button className="nums" onClick={() => handleClick(0)}>0</button>
                    <button className="nums" onClick={() => handleClick("/")}>/</button>
                    <button className="nums" onClick={() => handleClick("*")}>x</button>

                    <button type="reset" id="reset" onClick={() => handleClick("reset")}>RESET</button>
                    <button id="equal" onClick={() => handleClick("=")}>=</button>

                </div>




            </div>
        </main>
    )
}

export default Calculator