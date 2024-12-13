import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../../App";
import axios from "axios";
import { useParams } from 'react-router-dom'

function Single() {

    const [data, setData] = useState(null)
    const { selected } = useContext(dataContext)
    const { code } = useParams()

    useEffect(() => {
        getSingleCountryData()
    }, [])
    function getSingleCountryData() {
        axios(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((res) => {
                setData(res.data[0])
                console.log(res.data[0])
            })
    }
    return (
        <div >
            <h2>{data?.name?.common}</h2>
            <img src={data?.flags?.png} alt="Here is an image" />
            <div>
                <h3>Capital: {data?.capital}</h3>
                <h3>Continent: {data?.continents}</h3>
                <h3>Population: {data?.population} </h3>
                <h3>Language: {data?.languages?.eng} </h3>
            </div>

        </div>
    )
}

export default Single