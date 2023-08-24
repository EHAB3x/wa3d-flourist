import { useEffect } from "react";
import "./components_css/Rates.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../RTK/Slices/UserSlice";

function Rates() {
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

  return (
    <div className="partner text-center">
      <h2 className="">Our Rates</h2>
      <div className="container text-center my-3">
            <div className="row mx-auto my-auto justify-content-center">
                <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        {
                            users.map((user) =>{
                                return(
                                    <div className={`carousel-item ${user.id === 1 ? 'active' :""}`} key={user.id}>
                                        <div className="col-md-3">
                                            <div className="box">
                                                <img src={user.image} alt=""/>
                                                <h3>{user.name}</h3>
                                                <p>{user.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>		
        </div>
    </div>
  );
}

export default Rates;
