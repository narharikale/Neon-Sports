import { createContext, useContext } from "react";


const cartContext = createContext(null);
const useCart = () => useContext(cartContext);

function CartProvider({ children }) {



    return ( 
        <cartContext.Provider>
            { children }
        </cartContext.Provider>

    );
}



export  { CartProvider , useCart };