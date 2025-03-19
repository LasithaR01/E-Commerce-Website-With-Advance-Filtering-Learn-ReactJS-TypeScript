import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import signin from "../../pages/SignIn";
import signup from "../../pages/SignUp";



const Search = ({ CartItem }) => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  // Add scroll event listener to toggle active class on scroll
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    if (search) {
      search.classList.toggle("active", window.scrollY > 100);
    }
  });

  // Toggle user options visibility
  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          {/* Logo Section */}
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Search Box Section */}
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          {/* Icons Section */}
          <div className="icon f_flex width">
            {/* User Icon with Dropdown */}
            <div className="user-icon" onClick={toggleUserOptions}>
              <i className="fa fa-user icon-circle"></i>
            </div>
            {showUserOptions && (
              <div className="user-options">
                {/* Link to Login Page */}
                <Link to="/signin">
                  <button className="dropdown-button">SignIn</button>
                </Link>
                {/* Link to Register (Sign Up) Page */}
                <Link to="/signup">
                  <button className="dropdown-button">SignUp</button>
                </Link>
              </div>
            )}

            {/* Cart Icon */}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;