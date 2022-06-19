import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, PrductProvider, FilterProvider, WishlistProvider ,CartProvider } from './context';
import { AddressProvider } from "./context/address-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PrductProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <AddressProvider>
                  <App />
                </AddressProvider>
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </PrductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
