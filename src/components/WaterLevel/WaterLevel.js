import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

class WaterLevel extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to temps API
        this.props.dispatch({ type: 'FETCH_LEVEL' });
    }
    render() {

        return(
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
                            {this.props.reduxState.level.levelReducer.map(levels => {
                                return (<TableRow key={levels.id}>
                                    <CustomTableCell>{levels.tstz}</CustomTableCell>
                                    <CustomTableCell numeric></CustomTableCell>
                                    <CustomTableCell numeric>{levels.level}</CustomTableCell>
                                    <CustomTableCell numeric></CustomTableCell>
                                    <CustomTableCell numeric></CustomTableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                {/* <pre>{JSON.stringify([this.props.reduxState.level.levelReducer])}</pre> */}
            </div>
        );

    }

}


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(WaterLevel);