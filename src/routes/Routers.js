import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "./../pages/ProductDetails";
import Cart from "./../pages/Cart";
import Checkout from "./../pages/Checkout";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
