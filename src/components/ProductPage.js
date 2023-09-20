import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCarousel from "./ProductCarousel";
import ProductDetails from "./ProductDetails";
import './components_css/ProductPage.css'
function ProductPage(){
    window.scrollTo(0,0);
    let params = useParams();
    console.log(params);
    const [product, setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://api.jsonbin.io/v3/b/64d37f768e4aa6225ecd3a45`)
        .then(res => res.json())
        .then(prod=>setProduct(prod.record.products[params.productId - 1]))
    },[params.productId])
    // console.log(product)
    return(
        <>
            <div className="content">
                <div className="container">
                    <ProductCarousel product ={product}/>
                    <ProductDetails product ={product}/>
                </div>
            </div>        
        </>
    )
}

export default ProductPage;