import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, PrductProvider, FilterProvider, WishlistProvider } from './context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PrductProvider>
          <FilterProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </FilterProvider>
        </PrductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
