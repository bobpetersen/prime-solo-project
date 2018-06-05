import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    level: state.level,
});

class WaterLevel extends Component {
    render() {
        return(
            <div>
                <h3>This is the water level page</h3>
                <ul>
                   
                </ul>
                <pre>{JSON.stringify(this.props.reduxState.waterLevel)}</pre>
            </div>
        );

    }

}


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(WaterLevel);