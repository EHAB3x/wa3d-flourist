import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import './components_css/Category.css'

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
      <div className='container'>
        {product.map((product)=>(
            product.category === params.category && 
            <Link className="box" key={product.id} to={`/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price} EGP</p>
                  <span>Code: FW-{product.id}</span>            
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Category