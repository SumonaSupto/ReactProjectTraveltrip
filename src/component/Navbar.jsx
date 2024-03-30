import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div class="nav__content">
          <a href="">
            <div className="text-3xl font-semibold brand-font text-cyan-400 propoin  hover:text-emerald-400">
              TravelTrip
            </div>
          </a>

          <label for="check" class="checkbox">
            <i class="ri-menu-line"></i>
          </label>
          <input type="checkbox" name="check" id="check" />
          <ul>
            <li>
              <a href="#">
                <i class="fa-solid fa-house-user mr-2"></i>Home
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-address-card mr-2"></i>About
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-handshake-angle mr-2"></i>Service
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-address-book mr-2"></i>Contact
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                Sign In<i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
