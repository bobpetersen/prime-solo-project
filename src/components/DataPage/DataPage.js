import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import './DataPage.css';
import './resizable-styles.css';
// import WaterLevel from '../../components/WaterLevel/WaterLevel';
import axios from 'axios';



const mapStateToProps = reduxState => ({
  reduxState,
});

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waterData: '',
    }
  }

  componentWillMount() {
    this.fetchPondLevel();
    // this.props.dispatch({ type: 'FETCH_LEVEL' });
  }

  fetchPondLevel = () => {
    axios({
      method: 'GET',
      url: `/api/level`
    })
      .then((response) => {
        const waterAvg = response.data[0].avg_level
        this.setState({
          waterData: waterAvg,
        });
        console.log(response.data[0].avg_level)

      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const layout = [
      { i: 'a', x: 3, y: 3, w: 2, h: 3 },
      { i: 'b', x: 0, y: 0, w: 3, h: 3 },
      { i: 'c', x: 4, y: 0, w: 4, h: 2 },
      { i: 'd', x: 4, y: 0, w: 4, h: 2 },
      { i: 'e', x: 0, y: 0, w: 2, h: 4 },
      { i: 'f', x: 4, y: 0, w: 2, h: 4 },
      { i: 'g', x: 4, y: 0, w: 4, h: 2 },
      { i: 'h', x: 4, y: 0, w: 4, h: 2 },
    ];



    return (
    <div>
        <div>
          <Nav />
        </div>
      
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1400}>
          <div key="a">
          <p>
          TESTING
          </p>
          </div>
          <div key="b">Latest Average Water Level <p>{parseFloat(this.state.waterData)}</p></div>
          <div key="c">c</div>
          <div key="d">d</div>
          <div key="e">e</div>
          <div key="f">f</div>
          <div key="g">g</div>
          <div key="h">h</div>
          <div>

            </div>
        </GridLayout>
     </div>
    );
  }

}

export default connect(mapStateToProps)(DataPage);