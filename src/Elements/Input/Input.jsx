import React, { forwardRef } from "react";
import './Input.css'


const Input = forwardRef(({ type, placeholder, handleInput, todoinput }, ref) => {
    return (
        <input ref={ref} value={todoinput} onChange={handleInput} type={type ?? 'text'} placeholder={placeholder ?? 'Enter the data'} className="input" />
    )
})
export default Input