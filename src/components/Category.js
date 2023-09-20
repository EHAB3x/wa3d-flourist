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
  return (
    <div className='category'>
      
    </div>
  )
}

export default Category