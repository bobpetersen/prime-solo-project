import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
import 'typeface-roboto'



const Nav = () => (
  

<div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="/temps">
            Water Temp
          </Link>
        </li>
        <li>
          <Link to="/level">
            Water Level
          </Link>
        </li>
        <li>
          <Link to="/data">
            Data Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
);



export default Nav;
