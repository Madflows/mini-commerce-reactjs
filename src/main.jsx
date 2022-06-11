import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
      <Router base="/">
        <Toaster />
        <App />
      </Router>
    </CartProvider>
);
