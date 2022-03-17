

function Card({product}) {

    const { imageSource , name  ,discountedPrice , originalPrice } = product

    return (    
        <>
            <div  className="d-flex flex-column card br-top-sm">
                <div className="card-media">
                    <img
                        className="responsive-img br-top-sm"
                        src={imageSource}
                        alt="no img"
                    />
                    <button className="btn-icon card-badge-topRight">
                        <span className="material-icons">favorite_border</span>
                    </button>
                </div>
                <div className="card-body">
                    <h4 className=" m-0">{name.toLowerCase()}</h4>
                    
                    <div className="card-desc font-weight-600">
                        <div>₹ {discountedPrice}</div>
                        <div className="text-decoration-linethrough">₹ {originalPrice}</div>
                        <div className="color-green-600">{(100 * (originalPrice - discountedPrice) / originalPrice).toFixed()}%</div>
                    </div>
                </div>
                <button className="btn btn-add-cart btn-primary mr-btn-10px font-size-regular">
                    Add to Cart
                </button>
            </div>

        </>
    );
}

export default Card;