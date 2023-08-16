import { useEffect, useState } from "react";
import './components_css/Categories.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../RTK/Slices/CategorySlice";

function Categories() {
  const categories = useSelector(state => state.categories);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCategories())
  },[])
  return (
    <div className="Categories">
        <h2>Choose Your Occasion</h2>
      <div className="container">
        {categories.map((product) => {
            return (
            <div className="cat" key={product.id}>
                <div className="img-back">
                <img src={product.image} alt=""></img>
                </div>
                <span>{product.title}</span>
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default Categories;
