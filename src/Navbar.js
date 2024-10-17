import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import "./Navbar.css";
import { ReactComponent as ProductsIcon } from "./assets/Products.svg"; 
import { ReactComponent as RecipesIcon } from "./assets/Recipes.svg";
import { ReactComponent as TipsIcon } from "./assets/Tips.svg";
import { ReactComponent as HolidaysIcon } from "./assets/Holidays.svg";
import { ReactComponent as StoryIcon } from "./assets/Story.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [showProductGrid, setShowProductGrid] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="navbar-logo">
          <img
            src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap Logo"
            className="bootstrap-logo"
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="navbar-menu collapse navbar-collapse" id="navbarNav">
            <div
              className="nav-item dropdown menuItem"
              onMouseEnter={() => setShowProductGrid(true)}
              onMouseLeave={() => setShowProductGrid(false)}
            >
              <div className="d-flex justify-content-center align-items-center">
                <ProductsIcon />
                <br />
              </div>
              PRODUCTS
            </div>
            <NavLink to="/recipes" className={"menuItem"}>
              <div className="d-flex justify-content-center align-items-center">
                <RecipesIcon />
                <br />
              </div>
              RECIPES
            </NavLink>
            <NavLink to="/tips" className={"menuItem"}>
              <div className="d-flex justify-content-center align-items-center">
                <TipsIcon />
                <br />
              </div>
              TIPS & HOW-TOS
            </NavLink>
            <NavLink to="/holidays" className={"menuItem"}>
              <div className="d-flex justify-content-center align-items-center">
                <HolidaysIcon />
                <br />
              </div>
              HOLIDAYS & ENTERTAINING
            </NavLink>
            <NavLink to="/story" className={"menuItem"}>
              <div className="d-flex justify-content-center align-items-center">
                <StoryIcon />
                <br />
              </div>
              OUR STORY
            </NavLink>
          </div>
          <div className="navbar-social navbar-collapse" id='navbarNav'>
            <FaSearch className="search-icon" />
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaPinterest className="social-icon" />
          </div>
        </div>
      </nav>
      {showProductGrid && (
        <>
          <div
            className="orange-background-overlay"
            onMouseEnter={() => setShowProductGrid(true)}
            onMouseLeave={() => setShowProductGrid(false)}
          />
          <div
            className="product-grid-overlay"
            onMouseEnter={() => setShowProductGrid(true)}
            onMouseLeave={() => setShowProductGrid(false)}
          >
            <ProductGrid />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
