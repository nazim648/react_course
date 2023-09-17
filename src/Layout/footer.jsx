import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="page_width">
          <div className="footer_content">
            <div className="becom_alen">
              <h4 className="become_title">Become an Alen Insider</h4>
              <p className="become_desp">Subscribe to our newsletter and get 5% off your first purchase, plus exclusive offers and insider tips to achieve the indoor air of your dreams.</p>
              <div className="become_input">
                <div className="arrow_icon"><FaArrowRight/></div>
                <input type="email" name="contact" id="contact" placeholder="Email Address" />
              </div>
              <div className="become_social_icon">
                <ul className="social_icons">
                  <li><a href="#"><FaTwitter/></a></li>
                  <li><a href="#"><FaFacebook/></a></li>
                  <li><a href="#"><FaInstagram/></a></li>
                  <li><a href="#"><FaLinkedin/></a></li>
                </ul>
              </div>
            </div>
            <div className="shop">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">Air Purifies</a></li>
                <li><a href="#">Air Filter</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">On Sale</a></li>
              </ul>
            </div>
            <div className="about_us">
            <h3>Shop</h3>
              <ul>
                <li><a href="#">Air Purifies</a></li>
                <li><a href="#">Air Filter</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">On Sale</a></li>
              </ul>
            </div>
            <div className="customer_suport">
            <h3>Shop</h3>
              <ul>
                <li><a href="#">Air Purifies</a></li>
                <li><a href="#">Air Filter</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">On Sale</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
