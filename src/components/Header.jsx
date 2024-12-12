import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 shadow-md" id="header">
      <nav className="container mx-auto flex justify-center gap-8 text-white">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/showcategories"}>Categories</NavLink>
      </nav>
    </header>
  );
};

export default Header;
