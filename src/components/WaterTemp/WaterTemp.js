import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Nav from '../../components/Nav/Nav';
import 'typeface-roboto'
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const mapStateToProps = reduxState => ({
  reduxState,
});

class WaterTemp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
    }
  }

  componentWillMount() {
    this.fetchPondTemps();
    // this.props.dispatch({ type: 'FETCH_TEMP' });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
  }

  fetchPondTemps = () => {
    axios({
      method: 'GET',
      url: `/api/temps`
    })
      .then((response) => {
        // alert(response.data.map(temps => temps.tstz))
        this.setState({
          chartData: {
            labels: response.data.map((temps) => {
              let tempDate = moment(temps.tstz).format('ddd M[/]D');
              return tempDate;
            }),
            datasets: [
              {
                label: 'Pond Temps',
                data: response.data.map(temps => temps.temp),
                backgroundColor: '#96F7F7'
              }
            ]
          }
        });
        // alert(response.data.map(temps => temps.tstz))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <div style={{ width: '1000px', height: '600px', margin: '0 auto' }}>
          <Line
            data={this.state.chartData}
            options={{
              tooltips: {

              },
              title: {
                display: "Title",
                text: 'Water Temperature',
                fontSize: 35,
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    min: 60,
                    max: 85,
                  }
                }]
              }
            }}
          />
        </div>
        {/* <pre>{JSON.stringify([this.props.reduxState.temp.tempReducer])}</pre> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WaterTemp);