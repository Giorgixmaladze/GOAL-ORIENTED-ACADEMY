import { useState,useEffect } from "react";


function Calculator(){
    


    

    return(

        <main>
            <div id="calculator">
                
                <input type="text" readOnly name="num" id="inp" />
                <div id="nums">
                    <button className="nums" >7</button>
                    <button className="nums">8</button>
                    <button className="nums">9</button>
                    <button id="del">DEL</button>
                    <button className="nums">4</button>
                    <button className="nums">5</button>
                    <button className="nums">6</button>
                    <button className="nums">+</button>
                    <button className="nums">1</button>
                    <button className="nums">2</button>
                    <button className="nums">3</button>
                    <button className="nums">-</button>
                    <button className="nums">.</button>
                    <button className="nums">0</button>
                    <button className="nums">/</button>
                    <button className="nums">x</button>
                </div>
                <div id="other">
                    <button type="reset" id="reset">RESET</button>
                    <button id="equal">=</button>
                </div>
                
                
            </div>
        </main>
    )
}

export default Calculator