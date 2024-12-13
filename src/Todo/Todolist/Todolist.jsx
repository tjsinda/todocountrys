import React from "react";
import Button from "../../Elements/Button/Button";
import './Todolist.css'

function Todolist({ index, item, handleDelete, handleDone }) {
    return(
        <div className="todolist">
            <p className={`${item.done ? 'element-done' : ''}`}>{index + 1}. {item.label} </p>
            <Button fn={handleDelete} index={index} value={'Delete'} />
            <Button fn={handleDone} index={index} value={'Done'} />
        </div>
    )
}

export default Todolist