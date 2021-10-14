import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const arrow = <FontAwesomeIcon icon={faArrowLeft}/>

const Country = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams()


    useEffect(()=>{
        const fetchCountryData = async () =>{
            const response = await fetch(
                `https://restcountries.com/v2/name/${name}`
            )
            const country = await response.json()
            setCountry(country)
            console.log(country);
        }
        
    },[])
    return (
        <>
            <Link to="/" className="btn btn-light">{arrow}Back Home</Link>
            <h1>Country data</h1>   
        </>
    )
}

export default Country
