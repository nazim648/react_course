import React from 'react'
import './style.css';
import siteLogo from './logo.png';
import { FaSearch } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';

const Header = () => {
  return (
    <>
      <header>
        <div className="page_width">
          <div className="header_content">
            <nav>
              <ul className='link_list'>
                <li>
                  <a href="#" title='Shop'>Shop</a>
                </li>
                <li>
                  <a href="#" title='About'>About</a>
                </li>
                <li>
                  <a href="#" title='For Business'>For Business</a>
                </li>
                <li>
                  <a href="#" title='Blog'>Blog</a>
                </li>
                <li>
                  <a href="#" title='Support'>Support</a>
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
