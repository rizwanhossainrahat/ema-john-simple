import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import {Link, link} from 'react-router-dom'
const Product = (props) => {
    const {img,name,seller,price,stock,key}=props.product
    return (
        <div className='product'>
            <div >
                    <img src={img} alt="" />
            </div>
            <div >
            <h4 className='name'><Link to={'/product/'+key}>{name}</Link> </h4>
            <br />
            <p><small>by:{seller}</small></p>
            <p>price:${price}</p>
            <p><small>only{stock} left in stock order soon</small></p>
            <Rating  
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly>
               
            </Rating>
            <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}>  <FontAwesomeIcon icon={faShoppingCart} /> add cart</button>
            </div>
           
        </div>
    );
};

export default Product;