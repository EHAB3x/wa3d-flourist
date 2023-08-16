import './components_css/Landing.css';
import { Link} from "react-router-dom";
function Landing(){
    return(
        <div className="landing">
            <div className="intro">
                <h1>Spring is always there for you</h1>
                <span>A bouquet of the best and rarest flowers</span>
                <Link to="/products"><button className="button-27">Buy Now</button></Link>
            </div>
        </div>
    )
}

export default Landing;