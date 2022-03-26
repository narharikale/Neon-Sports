function CartProductCard() {
  return (
    <>
      <div className="card-horizontal">
        <div className="w-100-per">
          <img
            className="responsive-img"
            src="/assets/img/shoes2.jpg"
            alt="no img"
          />
        </div>
        <div className="d-flex flex-column p-1 gap-1 w-100-per">
          <div className="card-body-header d-flex flex-column gap-1">
            <h2 className="m-0">Backpack</h2>
            
            <div className="d-flex flex-column font-weight-600">
              <div className="d-flex gap-1">
                <span>₹ 699 </span>
                <span className="text-decoration-linethrough"> ₹ 1398</span>
              </div>
            </div>
            <div className=" font-weight-600 color-green-600">50% off</div>
            <div className="d-flex gap-sm ">
              Quantity : <button className="br-round br-1px">-</button>
              <span className="bg-gray-200 cart-count-num">2</span>
              <button className="br-round br-1px">+</button>
            </div>
          </div>
          <button className="btn btn-add-cart btn-secondary w-100-per font-size-regular">
            Remove from Cart
          </button>
          <button className="btn btn-add-cart btn-outline w-100-per font-size-regular">
            Move to Wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export { CartProductCard };
