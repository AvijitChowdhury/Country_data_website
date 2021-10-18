import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalpopulation =0;
    // for(let i=0 ;i<cart.length ;i++ ){
    //     const carts =cart[i];
    //     totalpopulation+=carts.population;
    // }
    const totalpopulation =cart.reduce((sum,country)=>sum+country.population,0)
    
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Total population: {totalpopulation}</h2>
        </div>
    );
};

export default Cart;