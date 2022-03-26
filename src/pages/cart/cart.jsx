import { CartProductCard, PriceDetailsCard } from "../../components";







function Cart() {


    return (  
        
             <div className="cart-container"> 
                <div className="d-flex flex-column gap-2"> 
                    <CartProductCard/>
                </div>
                <PriceDetailsCard/>
             </div>
        
    );
}

export {Cart};