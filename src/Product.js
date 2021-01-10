import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({image,info,link}) {
  
  return (
  	<div className="product">
        <img src={image} alt=""/>
        <Link to = { link }>
          <button className="btn">{ info }</button> 
        </Link>			
  	</div>
  	);
}


export default Product;