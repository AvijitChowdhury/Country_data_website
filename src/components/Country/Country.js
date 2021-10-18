import React from 'react';
import './Country.css';

const Country = ({name,flag,population,region,capital,area}) => {
    
    return (
        <div className='country'>
            <div className="image"><img src={flag} alt="" /></div>
            <div className="country-details">
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
                <p>Area: {area}</p>
            </div>
        </div>

    );
};

export default Country;