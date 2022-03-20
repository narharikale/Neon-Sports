import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { PrductProvider } from './context/product-context';
import { FilterProvider } from './context/filter-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PrductProvider>
      <FilterProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
      </FilterProvider>
    </PrductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
