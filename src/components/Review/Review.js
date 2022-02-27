import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    // const [cart,setCart]=useState([])

    // useEffect(()=>{
    //     // cart show koret a code gulo korte hobe
        
    //         const savedCart=getDb()
    //         const productKeys=Object.keys(savedCart)
    //         // const count=productKeys.map(key=>savedCart[key])
    //         const cartProducts=productKeys.map(key=>{
    //             const product =fakedb.find(pd=>pd.key===key);
    //             product.quantity=savedCart[key];
    //             return product
    //         })
    //         setCart(cartProducts);
    // },[])
    return (
        <div>
            {/* <h1>Review item:{cart.lenght}</h1> */}
            {/* {
                Cart.map{pd=><ReviewItem product={pd}></ReviewItem>}
            }
             */}
             <h1>Review Item</h1>
             <ReviewItem></ReviewItem>
        </div>
    );
};

export default Review;