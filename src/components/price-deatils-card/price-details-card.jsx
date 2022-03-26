function PriceDetailsCard() {
  return (
    <>
      <div>
        <div className="card card-textonly p-2 p-sticky-top">
          <ul className="d-flex gap-1 flex-column justify-between list-style-none mx-2">
            <li className="d-flex justify-between">
              <div className="d-flex align-center">
                {" "}
                <span className="material-icons">local_offer</span> Have a
                coupon?
              </div>
              <button className="br-sm btn btn-outline">Apply</button>
            </li>
          </ul>
          <h3 className="m-0">Price Details</h3>
          <hr />
          <ul className="d-flex gap-1 flex-column justify-between list-style-none">
            <li className="d-flex justify-between">
              <span>Price</span> <span>₹1398</span>
            </li>
            <li className="d-flex justify-between">
              <span>Discount</span> <span>-₹699</span>
            </li>
            <li className="d-flex justify-between">
              <span>Delivery Charges</span> <span>Free</span>
            </li>
          </ul>
          <hr />
          <h4>
            <p className="d-flex justify-between">
              <span>Total</span> <span>₹699</span>
            </p>
          </h4>
          <hr />
          <p>you will save ₹699 on this order </p>
          <button className="btn btn-primary font-size-regular w-100-per">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export { PriceDetailsCard };
