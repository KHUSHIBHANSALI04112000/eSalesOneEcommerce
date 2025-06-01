import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ProductCard} from './ProductCard.js'
import './LandingPage.css'

export const LandingPage = () => {
    const [product, setProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/products/getProduct')
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error('error while fetching the products', err))
    },[])

    if(!product){
        return(
            <div>
                Loading Products....
            </div>
        )
    }

    return(
        <div className='landing-page'>
            <h1 className='landing-title'>Product Deatils</h1>
            <ProductCard key={product[0]._id} product={product[0]} />
        </div>
    )
}