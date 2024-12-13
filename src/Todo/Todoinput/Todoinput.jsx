import React from "react";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import './Todoinput.css'

function Todoinput({ handleAdd, handleInput, todoinput, inputref }) {
    return(
        <div className="todoinput">
            <Input ref={inputref} todoinput={todoinput} handleInput={handleInput} />
            <Button fn={handleAdd} value={'Add'} />
        </div>
    )
}

export default Todoinput