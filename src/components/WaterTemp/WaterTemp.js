import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Nav from '../../components/Nav/Nav';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto'
import { Line, Bar, Radar } from 'react-chartjs-2';


const mapStateToProps = reduxState => ({
    reduxState,
});

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


class WaterTemp extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to temps API
        this.props.dispatch({ type: 'FETCH_TEMP' });
    }
    render() {
        return (

            <div>
            
                <Nav />
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Date</CustomTableCell>
                                <CustomTableCell numeric>Water Temp</CustomTableCell>
                                <CustomTableCell numeric>Water Level</CustomTableCell>
                                <CustomTableCell numeric>Air Temp</CustomTableCell>
                                <CustomTableCell numeric>Humidity</CustomTableCell>
                            </TableRow>
                        </TableHead >
                        <TableBody>
                            {this.props.reduxState.temp.tempReducer.map(temps => {
                                return (<TableRow key={temps.id}>
                                    <CustomTableCell>{moment(temps.tstz).format('ddd M[/]D [at] h:mm')}</CustomTableCell>
                                    <CustomTableCell numeric>{temps.temp}</CustomTableCell>
                                    <CustomTableCell numeric></CustomTableCell>
                                    <CustomTableCell numeric></CustomTableCell>
                                    <CustomTableCell numeric></CustomTableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                {/* {this.props.reduxState.temp.tempReducer.map(temps => <li key={temps.id}>{temps.temp}</li>)} */}
                {/* <pre>{JSON.stringify([this.props.reduxState.temp.tempReducer])}</pre> */}
            </div>
        );
    }

}


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(WaterTemp);
