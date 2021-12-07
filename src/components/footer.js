import React from "react";
import logo from "../assets/pictures/logo.png";
import Button from "react-bootstrap/Button";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./footer.css";
import blacklogo from "../assets/pictures/blacklogo.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-height">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3 col-sm-6">
              <img
                className="black-logo"
                alt="Ab store logo"
                src={blacklogo}
                className="d-inline-block store-logo"
              />
              <p className="no-bullets cursive">
                I am Abhilasha Katkiya, an artist, enchanted explorer and a
                storyteller
              </p>

              <Button className="button">Contact us</Button>
            </div>
            <div className="col-md-4 col-sm-6">
              <h5>Follow my adventures elsewhere here:</h5>
              <ul className="no-bullets">
                <li>
                  <a href="https://www.facebook.com/abish4xart">
                    <FaFacebook className="icons pb-1 pt-1" />
                  </a>{" "}
                </li>
                <li>
                  <a href="https://www.instagram.com/ab_4xart/">
                    <FaInstagram className="icons pb-1 pt-1" />
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5>Info</h5>
              <ul className="no-bullets">
                <li>
                  {" "}
                  <a href="#">track my order</a>{" "}
                </li>
                <li>
                  <a href="#">terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund & Return</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
