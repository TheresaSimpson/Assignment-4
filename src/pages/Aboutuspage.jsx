import React from "react";
import { NavLink } from "react-router-dom";
import "./Aboutuspage.css";
import logo2 from '../logo2.png';
// import groupimg from '../groupimg.jpg';

const Aboutuspage = () => {
  return (
    <div class="about">
      <nav id="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <img src={logo2} alt="" height="50" width="50" />
          </div>

          {/* <!-- navigation links --> */}
          <ul className="links">
            <NavLink to="/">
              <li>
                <a href="home">Home</a>
              </li>
            </NavLink>

            <li>
              <a href="about">About Us</a>
            </li>
            <NavLink to="/login">
              <li>
                <a href="" className="btn-apply-dark">
                  Login
                </a>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>

      <section className="section-1">
        <div className="sec1-text-container">
          <h3 className="h3-hearder1"> Overview</h3>
          <p>
            Code Coast is a tech hub located in Cape coast the central region of
            Ghana. code coast is established to provide training to build a
            world class competitive software engineers and support
            entrepreneurs. at code coast we build and ship quality but
            affordable softwares across the globe. our startups live and
            succeed, THEY DON'T DIE
          </p>
        </div>
        <div className="sec1-img-container"></div>
      </section>
      <section className="section-2">
        <div className="sec2-img-container"></div>
        <div className="sec2-text-container">
          <h3 className="h3-hearder2">Why We Do What We Do</h3>
          <p>
            <b>
              Code Coast seeks to build the revolutionary technology industry
              which will impact beneficiaries with a market ready tech skill
              enforcing personal development and capacity build that create an
              enabling environment for technology start-ups to flourish whiles
              software engineers write quality yet affordable solutions to their
              clients.
            </b>
            <br />
            <strong className="hd-inner">
              You Know What? This is just above see level.
            </strong>
          </p>
        </div>
      </section>
      <footer className = "about-footer">
        <div className="row1">
          <ul>
            <NavLink to="/">
              <li>
                <a href="">Home</a>
              </li>
            </NavLink>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>

        <div className="row2">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>

            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className = 'row3'>
        <ul>
        <li>
        Terms & Conditions
        </li>
        <li>
        Privacy 
        </li>
        </ul>
        </div>

      </footer>
    </div>
  );
};

export default Aboutuspage;
