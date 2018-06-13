import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import PropTypes from 'prop-types';
import './DataPage.css';
import './resizable-styles.css';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import axios from 'axios';
import { Line } from 'react-chartjs-2';



const mapStateToProps = reduxState => ({
  reduxState,
});

class DataPage extends Component {
  constructor(props){
    superprops(props);
      this.state = {
      waterLevel: "",
    }
  }
  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    style: PropTypes.object,
    barWidth: PropTypes.number,
    margin: PropTypes.number,
    onMouseMove: PropTypes.func,
  };

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
    const { points, height, style, barWidth, margin, onMouseMove } = this.props;
    const strokeWidth = 1 * ((style && style.strokeWidth) || 0);
    const marginWidth = margin ? 2 * margin : 0;
    const width =
      barWidth ||
      (points && points.length >= 2
        ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
        : 0);
        
    return (

      <div>
      <div>
        <Nav />
      </div>
        <Sparklines data={[5, 10, 5, 20]}>
          <g transform="scale(1,-1)">
            {points.map((p, i) =>
              <rect
                key={i}
                x={p.x - (width + strokeWidth) / 2}
                y={-height}
                width={width}
                height={Math.max(0, height - p.y)}
                style={style}
                onMouseMove={onMouseMove && onMouseMove.bind(this, p)}
              />,
            )}
          </g>
          <SparklinesBars />
        </Sparklines>
      </div>

       
    );
  }

}

export default connect(mapStateToProps)(DataPage);