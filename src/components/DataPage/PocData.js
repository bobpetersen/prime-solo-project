import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    paddingLeft: 500,
  },
  table: {
    minWidth: 700,
    
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#081B33',
    },
  },
});

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
      return <TableRow key={i}>
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
        <div>
          <Nav />
          <div>
            <header>
            </header>
            <Paper>
              <Table style={{ backgroundColor: '#081B33', paddingLeft: 500,}}>
                <TableHead>
                  <TableRow >
                    <CustomTableCell>Date</CustomTableCell>
                    <CustomTableCell>Water Temp</CustomTableCell>
                    <CustomTableCell>Water Level</CustomTableCell>
                    {/* <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {resultsRow}
                </TableBody>
              </Table>
            </Paper>
            {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
          </div>
          </div>
          </div>
          );
        }
      }
      

      
export default connect(mapStateToProps)(PocData);