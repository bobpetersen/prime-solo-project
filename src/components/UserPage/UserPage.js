import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../../components/Nav/Nav';
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

const styles = {
  card: {
    width: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

};


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

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
        <Grid direction='row' spacing='48' container className={classes.root} >
          <Grid item lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Image}
              />
              <CardContent>
                <Typography gutterBottom variant="display3">
                  Water Temperature
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group
                  of squamate reptiles, with over 6,000 species,
                  ranging
                  across all continents except Antarctica
                </Typography>
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
          </Grid>
          <Grid item lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Pic}
              />
              <CardContent>
                <Typography gutterBottom variant="display3">
                  Water Level
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group
                  of squamate reptiles, with over 6,000 species,
                  ranging
                  across all continents except Antarctica
                </Typography>
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
          </Grid>
        </Grid>
      </div>
    )
  }
}


Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(UserPage));

