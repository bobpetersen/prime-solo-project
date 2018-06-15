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


class WaterLevel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
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
        // alert(response.data.map(temps => temps.tstz))
        console.log(response.data)

        this.setState({
          chartData: {
            labels: response.data.map((levels) => {
              let levelDate = moment(levels.dt).format('ddd M[/]D');
              return levelDate;
            }),
            datasets: [
              {
                label: 'Pond Levels',
                backgroundColor: [
                  'rgba(14, 28, 51, 0.6)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 204, 2, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255,99,132,1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
                data: response.data.map(levels => levels.avg_level),
              }
            ]
          }
        });
        // console.log(response.data.map(levels => levels.avg_level))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <div style={{ width: '90%', height: '800px', margin: '0 auto' }}>
          <Line
            data={this.state.chartData}
            options={{
              tooltips: {

              },
              title: {
                display: "Title",
                text: 'Water Level',
                fontSize: 50,
                fontColor: 'rgba(255, 204, 2, 1)',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  ticks: {
                    fontSize: 15,
                    fontColor: 'rgba(255, 204, 2, 1)',
                    min: 30,
                    max: 100,
                    stepSize: 5,
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontSize: 15,
                    fontColor: 'rgba(255, 204, 2, 1)',
                    min: 0,
                    max: 24,
                    stepSize: 2,
                  }
                }]
              }
            }}
          />
        </div>
        {/* <pre>{JSON.stringify([this.state.chartData])}</pre> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WaterLevel);