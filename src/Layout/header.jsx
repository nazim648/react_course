import React from 'react'
import './style.css';
import siteLogo from './logo.png';
import { FaSearch } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  
  return (
    <>
      <header>
        <div className="page_width">
          <div className="header_content">
            <div className="hamburger">
<FaHamburger/>
            </div>
            <nav>
              <ul className='link_list'>
                <li>
                  <Link to="/" title='Home'>Home</Link>
                </li>
                <li>
                  <Link to="/about" title='About'>About</Link>
                </li>
                <li>
                  <Link to="/business" title='For Business'>For Business</Link>
                </li>
                <li>
                  <Link to="/blog" title='Blog'>Blog</Link>
                </li>
                <li>
                  <Link to="/support" title='Support'>Support</Link>
                </li>
              </ul>
            </nav>
            <div className="logo">
              <img src={siteLogo} alt="Alen" title='siteLogo' />
            </div>
            <div className="navbar_icon">
              <div className="search_icon">
                <FaSearch />
              </div>
              <div className="cart_icon">
                <IoMdCart />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
