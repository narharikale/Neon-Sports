import { useCart } from "../../context/cart-context";



function PriceDetailsCard() {

    const { cartData , reducedData } = useCart();
    
  
   const {totalDiscoutPrice , totalOriginalPrice}= reducedData
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
              <span>Price</span> <span> ₹{ totalOriginalPrice }</span>
            </li>
            <li className="d-flex justify-between">
              <span>Discount</span> <span className="color-green-600" >-₹ { totalOriginalPrice - totalDiscoutPrice } </span>
            </li>
            <li className="d-flex justify-between">
              <span>Delivery Charges</span> <span>Free</span>
            </li>
          </ul>
          <hr />
          <h4>
            <p className="d-flex justify-between font-size-regular">
              <span>Total</span> <span>₹ { totalDiscoutPrice }</span>
            </p>
          </h4>
          <hr />
          <p>you will save ₹{ totalOriginalPrice - totalDiscoutPrice } on this order </p>
          <button className="btn btn-primary font-size-regular w-100-per">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export { PriceDetailsCard };
