import React, { useRef, useState } from "react";
import Todoinput from "../Todoinput/Todoinput";
import Todolist from "../Todolist/Todolist";
import './Todomain.css'

function Todomain() {

    const [todoinput, setTodoinput] = useState([])
    const [todolist, setTodolist] = useState([])
    const inputref = useRef()

    function handleInput(event) {
        setTodoinput(event.target.value)
    }
    function handleAdd() {
        console.log('Add')
        setTodolist([...todolist, { label: todoinput, done: false }])
        console.log(...todolist)
        setTodoinput('')
        if (inputref.current) {
            inputref.current.focus()
        }
    }
    function handleDelete(index) {
        console.log('Delete')
        const temp = [...todolist]
        temp.splice(index, 1)
        setTodolist(temp)
        console.log(...todolist)
    }
    function handleDone(index) {
        console.log('Done')
        const temp = [...todolist]
        temp[index].done = true
        setTodolist(temp)
        console.log(...todolist)
    }

    return (
        <div className="todomain">
            <Todoinput inputref={inputref} todoinput={todoinput} handleInput={handleInput} handleAdd={handleAdd} />
            <div className="todolist-container">
                {
                    todolist.map((element, index) => <Todolist handleDone={handleDone} handleDelete={handleDelete} item={element} index={index} key={index} />)
                }
            </div>

        </div>
    )
}

export default Todomain