import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import '../Product/Product.css'

const Cart = (props) => {
    const cart=props.cart
    // console.log(cart)

    // let totalquantity=0
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     if(!product.totalquantity){
    //         product.quantity=1
    //     }
    //     totalquantity=totalquantity+product.quantity
    //     // console.log(totalquantity)
    //     console.log(product.quantity)
    // }
    // const total=cart.reduce((total,prd)=>total+prd.price,0)
    // const total=cart.reduce((total,prd)=>total+prd.price*totalquantity,0)

    let totalquantity=0
    let total=0;
    for(const product of cart){
        console.log(product.price)
        if(!product.quantity){
            product.quantity=1
        }
        total=total+product.price*product.quantity
        totalquantity=totalquantity+product.quantity
    }

    
    
    
    // const totalquantity=cart.reduce((totalquantity,prd)=>totalquantity+prd.quantity,0)
    // console.log(totalquantity)

    let shipping=0;
    if(total>0){
        shipping=0
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>10){
        shipping=12;
    }

    // const tax=total/10.toFixed(2);
    // const formatNumber=(num)=>{
    //     const precision=num.tofixed(2)
    //     return Number(precision);
    // }
    return (
        <div>
            <h4 className='text-danger'>Order summary</h4>
            <p>Ordered items:{totalquantity}</p>
            <p>price:{total}</p>
            {/* <p>tax:{tax}</p> */}
            <p><small>shipping cost:{shipping}</small></p>
            <p>Total price:{total+shipping}</p>
            <br />
            <Link to='/review'>
            <button className='main-button'>Review</button>
            </Link>
        </div>
    );
};

export default Cart;