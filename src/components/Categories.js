import { useEffect } from "react";
import './components_css/Categories.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../RTK/Slices/CategorySlice";
import { Link } from "react-router-dom";

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
        {categories.map((product , index) => {
            return (
            <Link className="cat" key={product.id} to={`/products/${categories[index].title}`}>
                <div className="img-back">
                <img src={product.image} alt=""></img>
                </div>
                <span>{product.title}</span>
            </Link>
            );
        })}
      </div>
    </div>
  );
}

export default Categories;
