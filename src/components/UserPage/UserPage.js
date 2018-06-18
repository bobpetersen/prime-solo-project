import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Nav from '../../components/Nav/Nav';
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import './UserPage.css';

const mapStateToProps = state => ({
  user: state.user,
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: '#FFCC02',
  },
  body: {
    fontSize: 16,
    color: '#FFCC02',

  },
}))(TableCell);

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
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
  }

  componentWillMount() {
    console.log('componentWillMount');
    // this.fetchCurrentLevel();
    this.fetchCurrentTemp();
    // this.props.dispatch({ type: 'FETCH_LEVEL' });
  }

  fetchCurrentTemp() {
    axios.get(`/api/currentTemp`).then((response) => {
      console.log('this is from the data page GET', response.data)
      this.setState({
        results: response.data
      })
    }).catch((error) => {
      console.log('error with GET current');
    })
  }

  render() {
    let resultsRow = this.state.results.map((allData, { i }) => {
      return <TableRow style={{ backgroundColor: '#081B33' }} key={i}>
        <CustomTableCell>{moment(allData.tstz).format('ddd M[/]D, h:mm')}</CustomTableCell>
        <CustomTableCell>{allData.temp}</CustomTableCell>
        <CustomTableCell>{allData.level}</CustomTableCell>
        {/* <TableCell>{allData.airTemp}</TableCell> */}
        {/* <TableCell>{allData.humidity}</TableCell> */}
        {/* <TableCell><Button onClick={() => { this.deleteFeedback(feedback.id) }}><Delete /></Button></TableCell> */}
      </TableRow>
    })
    return (
      <div>
        <Nav />
        <div class="flex-container">
          <div class="item1">
            <Table>
              <TableHead>
                <TableRow >
                  <CustomTableCell>Date</CustomTableCell>
                  <CustomTableCell>Water Temp</CustomTableCell>
                  <CustomTableCell>Water Level</CustomTableCell>
                  {/* <TableCell>Air Temp</TableCell> */}
                  {/* <TableCell>Delete</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {resultsRow}
              </TableBody>
            </Table>
          </div>
          <div classclassName="item2">
            <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
          </div>
          <div className="item3"></div>
          <div className="item4"></div>
          <div className="item5">5</div>
          <div className="item3">3</div>
          <div className="item4">4</div>
          <div className="item5">5</div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(UserPage);

