import React from "react";
import { NavLink } from "react-router-dom";
import codecoastlogo from "../codecoastlogo.png";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import "./Loginpage.css";

const Loginpage = () => {
  return (
    <div className="login">
      <div className="login-inner">
        <header>
          <nav>
            <div className="header-div1">
              <img src={codecoastlogo} alt="" height="50" width="50" />
              <div class="header-div2">
                <a href="">CODE COAST HUB</a>
                <h3>/code> coast </h3>
              </div>

              <h1>Virtual Classroom</h1>
            </div>
            <div>
              <NavLink to = "/">
                <button className="btn-2">Home</button>
              </NavLink>
            </div>

            <div>
              <input
                className="search-input"
                list="courses"
                name="course"
                id="course"
                placeholder="Search Courses"
              />
              <datalist id="courses">
                <option value="html"></option>
                <option value="css"></option>
                <option value="javascript"></option>
                <option value="react"></option>
              </datalist>

              <button className="search-btn">Search</button>
            </div>
          </nav>
        </header>

        <section className="sec1">
          <div className="form-div">
            <form>
              <input
                className="input-info"
                type="text"
                placeholder="Username"
              />
              <br />
              <input
                className="input-info"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="chkb">
                <input id="chkb" type="checkbox" /> Remember Me
              </div>
              <br />
              <br />
              <button className="login-btn">Log in</button> <br />
              <a href="">Forgotten your username or password ?</a>
            </form>
          </div>
        </section>
      </div>

      <footer className="footer-container">
        <div className="contact">
          <ul>
            <li>
              <a href="" className="contact">
                Contact Us
              </a>
            </li>

            <li>
              <a href="" className="contact">
                codecoasthub.com.gh
              </a>
            </li>
            <li className="contact">+233 888 777 999</li>
          </ul>
          <hr />
          <p>Code Coast Hub &copy; 2021 All Rights Reserved</p>
        </div>
        <div className="footer-about">
          <NavLink to="/about">
            <a className="footer-about" href="">
              About Us
            </a>
          </NavLink>
        </div>
        <div className="img-content">
          <div>
            <img src={image1} alt="" width="100%" height="100%" />
          </div>
          <div>
            <img src={image2} alt="" width="100%" height="100%" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Loginpage;
