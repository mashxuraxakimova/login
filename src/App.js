import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import Cart from "./router/cart/Cart";
import LoginForm from "./router/login/loginform";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
