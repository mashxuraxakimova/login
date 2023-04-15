import React from "react";
import "./Navbar.css";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineHome,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { NAVBAR_BOTTOM_DATA } from "../../static/index";

function Navbar() {
  return (
    <>
      <div className="navbar container">
        <NavLink to={"/"} className="nav__logo">
          <span>uzum market</span>
        </NavLink>
        <button className="nav__katalog-btn">
          <FiMenu />
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input type="text" placeholder="Qidirish" />
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="nav__links">
          <NavLink to={"/"} className="nav__link">
            <AiOutlineHome />
            <span>Kirish</span>
          </NavLink>
          <NavLink to={"/LoginForm"} className="nav__link">
            <BiLogIn />
            <span>Login</span>
          </NavLink>
          <NavLink to={"/login"} className="nav__link">
            <FiUser />
            <span>Saralangan</span>
          </NavLink>
          <NavLink to={"/wishlist"} className="nav__link">
            <AiOutlineHeart />
            <span>Savat</span>
          </NavLink>
          <NavLink to={"/cart"} className="nav__link">
            <AiOutlineShoppingCart />
            <span>Kirish</span>
          </NavLink>
        </div>
      </div>
      <div className="container nav__bottom">
        {NAVBAR_BOTTOM_DATA?.map((el, inx) => (
          <span key={inx}>{el}</span>
        ))}
      </div>{" "}
    </>
  );
}

export default Navbar;
