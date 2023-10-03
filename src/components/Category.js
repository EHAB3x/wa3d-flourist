import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const Category = () => {
    const params = useParams();
    const [product , setProduct] = useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/EHAB3x/DB/main/db.json")
        .then(res => res.json())
        .then(data => setProduct(data.products))
    },[])
    console.log(params.category);
    console.log(product);
  return (
    <div className='category'>
      {product.map((product)=>(
          product.category === params.category && <h2>{product.title}</h2>
      ))}
    </div>
  )
}

export default Category