import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Nav from '../../components/Nav/Nav';
import './UserPage.css';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Image from '../Images/pond-one.png';
import Pic from '../Images/pond_two.png';



const mapStateToProps = state => ({
  user: state.user,
});



class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    const { classes } = this.props;
    // const { spacing } = this.state;

    let content = null;

    return (
      <div>
        <Nav />
        {content}
            <div class="grid-container">
                <div class="item1">1</div>
                <div class="item2">       
                    <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
                </div>
                <div class="item3">3</div>
                <div class="item4">4</div>
                <div class="item5">5</div>
                <div class="item6">6</div>
            </div>

      </div>
    )
  }
}

// export default connect(mapStateToProps)(withStyles(styles)(UserPage));
export default connect(mapStateToProps)(UserPage);

