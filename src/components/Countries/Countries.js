import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = () => {

    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        .catch(error=>console.log(error))
    },[])
    console.log(countries);
    return (
        <div className="container">
            {
                countries.map(country=><Country {...country}></Country>)
            }
        </div>
    );
};

export default Countries;