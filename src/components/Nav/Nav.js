import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css'
import 'typeface-roboto'
import { triggerLogout } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';



  
  // this.props.history.push('home');

const Nav = (props) => (
  

<div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
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
        <div className="pull-right">
        <li>
          <Button className="navBarButton"
            variant="contained" color="default"
              onClick={() => props.dispatch(triggerLogout())}
          >
            Log Out
          </Button>
        </li>
        </div>
      </ul>
    </div>
  </div>
);



export default connect()(Nav);
