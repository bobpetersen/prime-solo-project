import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css'
import 'typeface-roboto'
import { triggerLogout } from '../../redux/actions/loginActions';

 // this.props.history.push('home'
const Nav = (props) => (
<div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/data">
            Data Page
          </Link>
        </li>
        {/* <li>
          <Link to="/user">
            User Home
          </Link>
        </li> */}
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
        {/* <li>
          <Link to="/data">
            Data Page
          </Link>
        </li> */}
        <div className="pull-right">
        <li>
          <a className="navBara"
              onClick={() => props.dispatch(triggerLogout())}
          >
            Log Out
          </a>
        </li>
        </div>
      </ul>
    </div>
  </div>
);



export default connect()(Nav);
