import React, { useRef } from "react";
import { render } from "react-dom";

export function Compo(){
    const input = useRef(null)

    const handleButtonClick = function (){
        console.log(input.current.value)
    }
    return <div>
        <input type="text" ref={input}/>
        <button onClick={handleButtonClick}>Recuperer la valeur</button>
    </div>
}