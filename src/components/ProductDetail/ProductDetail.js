import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../fakeData/products.JSON'
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey}=useParams()
    const[products,setProducts]= useState([])
    useEffect(()=>{
        fetch(data)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
                
        const ProductDetail=products.find(pd=> pd.key===productKey)
      console.log(ProductDetail.name)

      
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Buy product!!!</h1>
            {/* <h3>name:{ProductDetail.name}</h3> */}
            {/* <Product ProductDetail={ProductDetail} ></Product> */}
          
        </div>
    );
};

export default ProductDetail;