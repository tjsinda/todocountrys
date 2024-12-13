import React from "react";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {


    return (
        <div className="home">
            <h1>Hello All  this is my Home Page</h1>
            <h1>Click the button to view the pages</h1>
            <div className="d-flex justify-content-center gap-1 m-5">
                <Link to={'/countries'} >
                    <Button value={'Countries'} />
                </Link>
                <Link to={'/todo'}>
                    <Button value={'Todo'} />
                </Link>
            </div>

        </div>
    )
}

export default Home