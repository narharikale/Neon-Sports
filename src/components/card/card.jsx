

function Card({ product }) {

    const { imageSource, name, discountedPrice, originalPrice, rating, isBestseller } = product

    return (
        <>
            <div style={{ maxWidth: "300px" }} className="d-flex flex-column card br-top-sm justify-between">
                <div>
                    <div className="card-media">
                        <img
                            className="responsive-img br-top-sm"
                            src={imageSource}
                            alt="no img"
                        />
                        {isBestseller ?
                            <div className="badge-text bg-green-200 color-green-600 card-badge-topLeft font-size-sm">
                                <span className="material-icons badge-icon"> trending_up </span>Best Seller
                            </div>
                        : false
                        }

                        <button className="btn-icon card-badge-topRight">
                            <span className="material-icons">favorite_border</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h4 className=" m-0">{name}</h4>

                        <div className="card-desc">
                            <div className="font-weight-600" >₹ {discountedPrice}</div>
                            <div className="text-decoration-linethrough">₹ {originalPrice}</div>
                            <div className="color-green-600">{(100 * (originalPrice - discountedPrice) / originalPrice).toFixed()}%</div>
                            <div className="star-badge-text bg-warn-200  font-size-sm color-warn-600">
                                {rating}
                                <span class="material-icons font-size-sm">
                                    star_border
                                </span>
                            </div>
                        </div>
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