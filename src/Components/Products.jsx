import React from 'react';
import ProductBox from './ProductBox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';



function Products() {
  return (
    <div id='products'>
        <h1>Choose & Enjoy</h1>
        <p>A sandwich consisting of a piece of boneless, sometimes fried chicken served in a bun, typically hot</p>

        <div className='a-container'>
            <ProductBox image={pimage1} title="Chicken Burger" />
            <ProductBox image={pimage2} title="Beef Burger" />
            <ProductBox image={pimage2} title="Lamb Burger" />


        </div>
    </div>
  )
}

export default Products;
