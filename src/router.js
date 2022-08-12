import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/home";
import RegisterUser from "./pages/register";
import LoginUser from "./pages/login"
import Product from "./pages/products"
// import Admin from "./pages/dashboard";
import Dashboard from "./pages/dashboard";

export default function AppRouter() {
  return (
    <Router>
      <Home path="/" />
      
      <RegisterUser path="/register" />
      <LoginUser path="/login" />
      <Product path="/products" />
      <Dashboard path="/dashboard" />
    </Router>
  );
}