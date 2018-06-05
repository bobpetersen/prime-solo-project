import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getTemp } from '../../redux/actions/tempActions';
// import Nav from '../../components/Nav/Nav';
// import { TEMP_ACTIONS } from '../../redux/actions/tempActions';

const mapStateToProps = reduxState => ({
    reduxState,
});

class WaterTemp extends Component {
    
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({ type: 'FETCH_TEMP' });
    }
    render() {
        // let temps = this.props.reduxState.map((i) => <li key={i.id}>{i.temp}</li>);
        return (
            <div>
                <h3>This is the water temp page</h3>
                <ul>
                    {/* {temps} */}
                </ul>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>

        );
    }

}


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(WaterTemp);
