
import './components_css/ProductCarousel.css'
function ProductCarousel(props){
    const {product} = props;
    return(
            <div id="carouselExampleIndicators" className="carousel slide car">
                <div className="carousel-indicators">
                    <img src={product.image} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                    <img src={product.image} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                    <img src={product.image} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={product.image} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={product.image} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={product.image} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

    )
}

export default ProductCarousel;