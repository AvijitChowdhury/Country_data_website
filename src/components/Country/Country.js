import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,flag,population,region,capital,area} =props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='country'>
            <div className="image"><img src={flag} alt="" /></div>
            <div className="country-details">
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
                <p>Area: {area}</p>
                <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>

    );
};

export default Country;