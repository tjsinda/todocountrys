import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";

function Countries() {
    console.log('Country mounded')

    const [all, setAll] = useState([])

    useEffect(() => {
        getCountries()
    },[])

    function getCountries() {
        axios('https://restcountries.com/v3.1/all')
        .then((res) => {
            setAll(res.data)
        })
    }

    return (
        <div className="d-flex justify-content-center gap-5 flex-wrap">
            {
                all.map((cnty) => <Cards data={cnty} /> )
            }
        </div>
    )
}

export default Countries