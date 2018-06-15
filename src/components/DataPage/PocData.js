import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import './dataPage.css';

const mapStateToProps = reduxState => ({
  reduxState,
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

class PocData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
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
    let resultsRow = this.state.results.map((allData, {i}) => {
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
        <div >
          <Nav />
          <div className="grid-container" >
            <header>
            </header>
          {/* <Paper background-color="#00112b" class="table-container"> */}
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
            {/* </Paper> */}
            {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
          </div>
          </div>
        </div>
          );
        }
      }
         
export default connect(mapStateToProps)(PocData);