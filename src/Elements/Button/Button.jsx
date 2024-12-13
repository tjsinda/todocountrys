import React from "react";
import './Button.css'

function Button({ value, fn, index }) {
    return(
        <button onClick={() => fn && fn(index)} className={"button"} >
            {value ?? 'Click'} 
        </button>
    )
}

export default Button