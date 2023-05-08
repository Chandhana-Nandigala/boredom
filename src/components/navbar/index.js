import React from "react";
import { Link } from "react-scroll";
import "./index.css";

const Navbar = () => {
  return (
    <div class="flex items-center h-16 fixed w-screen z-50 bg-black">
      <img
        src={require("../../assets/logo.png")}
        alt="logo"
        style={{ height: 80 }}
      />
      <div className="flex items-center w-10/12 justify-between ml-8 ">
        <ul class="flex space-x-10 items-center  w-10/12 ">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
          <Link to="products" spy={true} smooth={true} duration={500}>
            Products
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About us
          </Link>
          <input
            class="flex h-9 w-1/2 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
            type="text"
            placeholder="Serach"
          />
        </ul>
        <div class=" items-center justify-between space-x-4">
          <button type="button">Account</button>
          <button type="button">Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
