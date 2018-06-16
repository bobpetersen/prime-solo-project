import React, { Component } from 'react';
import { triggerLogout } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import moment from 'moment';
import Nav from '../../components/Nav/Nav';
import 'typeface-roboto'
import { Line } from 'react-chartjs-2';
import axios from 'axios';

// const mapStateToProps = reduxState => ({
//   reduxState,
const mapStateToProps = reduxState => ({
  user: reduxState.user,
  reduxState,
});

class WaterTemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }

  componentWillMount() {
    this.fetchPondTemps();
  }

  fetchPondTemps = () => {
    axios({
      method: 'GET',
      url: `/api/temps`
    })
      .then((response) => {
        this.setState({
          chartData: {
            labels: response.data.map((temps) => {
              let tempDate = moment(temps.dt).format('ddd M[/]D');
              return tempDate;
            }),
            datasets: [
              {
                label: 'Pond Temp',
                backgroundColor: [
                  'rgba(14, 28, 51, 0.6)',
                  'rgba(53, 143, 255, 0.5)',
                  'rgba(14, 28, 51, 0.6)',
                  'rgba(53, 143, 255, 0.5)',
                ],
                borderColor: [
                  'rgba(255, 204, 2, 1)',
                  'rgba(219, 52, 10, 1)',
                ],
                borderWidth: 2,
                data: response.data.map(temps => temps.avg_temp),
              },
              {
                label: 'Pool Temp',
                backgroundColor: [
                  'rgba(53, 143, 255, 0.5)',
                  'rgba(14, 28, 51, 0.6)',
                ],
                borderColor: [
                  'rgba(255, 204, 2, 1)',
                  'rgba(219, 52, 10, 1)',
                ],
                borderWidth: 2,
                // data: response.data.map(temps => temps.avg_temp),
              },
              {
                label: 'Reef Tank',
                backgroundColor: [
                  'rgba(14, 28, 51, 0.6)',
                  'rgba(53, 143, 255, 0.5)',
                ],
                borderColor: [
                  'rgba(255, 204, 2, 1)',
                  'rgba(219, 52, 10, 1)',
                ],
                borderWidth: 2,
                // data: response.data.map(temps => temps.avg_temp),
              },
              {
                label: 'Fin the Goldfish',
                backgroundColor: [
                  'rgba(106	168	148, 0.5)',
                  'rgba(14, 28, 51, 0.6)',
                ],
                borderColor: [
                  'rgba(255, 204, 2, 1)',
                  'rgba(219, 52, 10, 1)',
                ],
                borderWidth: 2,
                // data: response.data.map(temps => temps.avg_temp),
              },
            ]
          }
        });
        // console.log(response.data.map(temps => temps.tstz))
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
                text: 'Water Temperature',
                fontSize: 50,
                fontColor: 'rgba(255, 204, 2, 1)',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    fontColor: 'rgba(255, 204, 2, 1)',
                    fontSize: 15,
                    min: 50,
                    max: 90,
                    stepSize: 2,
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontSize: 15,
                    fontColor: 'rgba(255, 204, 2, 1)',
                    min: 30,
                    max: 100,
                    stepSize: 5,
                  }
                }],
              }
            }}
          />
        </div>
        {/* <pre>{JSON.stringify([this.state.chartData])}</pre> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WaterTemp);