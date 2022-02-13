import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
const [products,setProducts]=useState([])
const [cart,setCart]=useState([])
useEffect(()=>{
    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

const handleAddProduct=(product)=>{
    const newCart=[...cart,product]
    setCart(newCart)
}
    return (
        <div className="shop-container">
            <div className="product-conatiner">
                    {
                        products.map(pd=><Product handleAddProduct={handleAddProduct} product={pd} ></Product>)
                    }
            </div>
            <div className="cart-conatiner">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;