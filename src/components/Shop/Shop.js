import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
const [products,setProducts]=useState([])
const [cart,setCart]=useState([])
const[displayProduct,setdisplayProduct]=useState([])
useEffect(()=>{
    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>{
        setProducts(data)
        setdisplayProduct(data)
    })
    
},[])

useEffect(()=>{
    const savedCart=getStoredCart()
    const storedCart=[]
    // saveCart ar modde for loop chalaiya key variable a nise in diyechi jehetu ata object array hole of  hobe array hole/for of korbo array ar upor for in korbo object ar upor
   if(products.length){
    for (const key in savedCart){
        // console.log(key,savedCart[key])
        const addedProduct=products.find(product=>product.key===key);
        if(addedProduct){
            const quantity=savedCart[key]
            addedProduct.quantity=quantity
          
            storedCart.push(addedProduct)
        }
        // console.log(addedProduct)
    }
    setCart(storedCart)
   }
},[products])

const handleAddProduct=(product)=>{
    const newCart=[...cart,product]
    setCart(newCart)
    // add local storage (for now)
    const sameProduct=newCart.filter(pd=>pd.key===product.key)
    const count=sameProduct.length
    addToDb(product.key,count)
}
    const handleSearch=event=>{
       const searchText=event.target.value;
      
       const matchProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
      
       setdisplayProduct(matchProducts)
       
    }
    return (
        <>
        <div className="search-container">
            <input
            onChange={handleSearch}
            type="text" 
            placeholder='search product'/>
        </div>
        <div className="shop-container">
            <div className="product-conatiner">
                {/*  search with show all  product */}
                    {
                        displayProduct.map(pd=><Product handleAddProduct={handleAddProduct} key={pd.key} product={pd} ></Product>)
                    }
                    
                    {/* without search only show product */}
                     {/* {
                        Products.map(pd=><Product handleAddProduct={handleAddProduct} key={pd.key} product={pd} ></Product>)
                    } */}
            </div>
            <div className="cart-conatiner">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;