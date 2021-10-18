import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Country from '../Country/Country';
import './Countries.css';


const Countries = () => {

    const [countries,setCountries] = useState([]);

    const [cart ,setCart] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        .catch(error=>console.log(error))
    },[])
    console.log(countries);
    const handleAddCountry =(country)=>{
        console.log('clicked',country)
        const newCart = [...cart,country];
        setCart(newCart);
    };
    return (
    <div> 
        <h2 style={{textAlign:'center'}}>Country loaded : {countries.length}</h2>
        <h3 style={{textAlign:'center'}}>Country added: {cart.length}</h3>
        <Cart cart={cart}></Cart>
        
        <div className="container">
            
            {
                countries.map(country=><Country  country={country} handleAddCountry={handleAddCountry}></Country>)
            }
        </div>
    </div>    
    );
};

export default Countries;