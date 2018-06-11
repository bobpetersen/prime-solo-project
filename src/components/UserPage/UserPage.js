import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Line } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Image from '../Images/pond-one.png';
import Pic from '../Images/pond_two.png';
import './userPage.css'


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
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <Button
            variant="contained" color="default"
            onClick={this.logout}
          >
            Log Out
          </Button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
        <div className="wrapper">
        <div>
            <Card className="pondCard">
            <CardMedia
                style={{ height: "200px", width:"400px" }}
                image={Image}
            />
            <CardContent>
              <Typography className="cardTypography" gutterBottom variant="display3">
                Water Temperature
          </Typography>
                <Line
                  data={this.state.chartData}
                  options={{
                    tooltips: {

                    },
                    title: {
                      display: "Title",
                      text: 'Water Temperature',
                      fontSize: 50,
                      fontColor: 'rgba(255, 204, 2, 1)',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [{
                        ticks: {
                          fontColor: 'rgba(255, 204, 2, 1)',
                          fontSize: 15,
                          min: 50,
                          max: 80,
                          stepSize: 2,
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 15,
                          fontColor: 'rgba(255, 204, 2, 1)',
                          min: 30,
                          max: 100,
                          stepSize: 5,
                        }
                      }],
                    }
                  }}
                />
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
          </Button>
              <Button size="small" color="primary">
                Learn More
          </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className="pondCard">
            <CardMedia
                style={{ height: "200px", width: "400px"  }}
                image={Pic}
            />
            <CardContent>
                <Typography className="cardTypography"  gutterBottom variant="display3">
                Water Level
          </Typography>
                <Line
                  data={this.state.chartData}
                  options={{
                    tooltips: {

                    },
                    title: {
                      display: "Title",
                      text: 'Water Level',
                      fontSize: 50,
                      fontColor: 'rgba(255, 204, 2, 1)',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                    maintainAspectRatio: false,
                    scales: {
                      xAxes: [{
                        ticks: {
                          fontSize: 15,
                          fontColor: 'rgba(255, 204, 2, 1)',
                          min: 30,
                          max: 100,
                          stepSize: 5,
                        }
                      }],
                      yAxes: [{
                        ticks: {
                          fontSize: 15,
                          fontColor: 'rgba(255, 204, 2, 1)',
                          min: 30,
                          max: 100,
                          stepSize: 5,
                        }
                      }]
                    }
                  }}
                />
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
          </Button>
              <Button size="small" color="primary">
                Learn More
          </Button>
            </CardActions>
          </Card>
          </div>
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

