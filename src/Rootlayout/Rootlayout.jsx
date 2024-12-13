import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Elements/Button/Button";
import './Rootlayout.css'

function Rootlayout() {
    return (
        <>
            <nav className="d-flex justify-content-center gap-3 m-1">
                <Link to={'/'} >
                    <Button value={'Home'} />
                </Link>
                <Link to={'/countries'} >
                    <Button value={'Countries'} />
                </Link>
                <Link to={'/todo'} >
                    <Button value={'Todo'} />
                </Link>
            </nav>

            <section>
                <Outlet />
            </section>

            <footer>
                {/* This is Footer */}
            </footer>
        </>

    )
}

export default Rootlayout