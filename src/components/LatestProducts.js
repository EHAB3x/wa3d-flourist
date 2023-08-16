import { useEffect, useState } from "react";
import "./components_css/LatestProducts.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/Slices/ProductsSlice";
function LatestProducts() {


  const product = useSelector(state => state.product);
  const dispatch = useDispatch();

  const path = window.location.href;

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  

  return (
    <div className="latest">
      <h2>Latest Additions</h2>
      <div className="container">
        {product.map((product) => {
          return (
            <Link className="box" key={product.id} to={`/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} EGP</p>
                <span>Code: FW-{product.id}</span>            
            </Link>
          );
        })}
      </div>
      {path === "http://localhost:3000/" &&<Link to="/products" className="moreBtn">Show More...</Link>}
    </div>
  );
}

export default LatestProducts;
