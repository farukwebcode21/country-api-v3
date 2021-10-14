import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
    //    fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

        const fetchCountryData = async()=>{
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries);
            
        }
        fetchCountryData();
    },[])

    const removeCountry =(cca3) =>{
         const newCountry = countries.filter(
             (country) => country.cca3 !== cca3)
         setCountries(newCountry);
    }

    return (
        <>
           <section className="grid">
           {
                countries.map((country) => {
                    const {name, flags, population, region, capital, cca3} = country

                    return <article key={cca3}>
                        <div>
                            <img src={flags.png} alt={name}/>
                            <div className="details">
                                <h3>{name.common.slice(0, 20)}</h3>
                                <h4>Population:<span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                                <div className ="buttons">
                                    <Link className="btn" to={`/countries/${name.common}`}>Learn more</Link>
                                    <button className="btn" onClick={()=>removeCountry(cca3)}>Remove Country</button>
                                </div>
                            </div>
                        </div>
                    </article>
                })
            }

           </section>
        </>
    )
}

export default Countries
