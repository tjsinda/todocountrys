import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Notfound() {

    const navigate = useNavigate()

    useEffect(() => {
        moveto()
    })

    function moveto() {
        setTimeout(() => {
            navigate('/home')
        }, 1500);
    }
    return (
        <h1 className="text-dark">
            404 ERROR PAGE NOT FOUND
        </h1>
    )
}

export default Notfound