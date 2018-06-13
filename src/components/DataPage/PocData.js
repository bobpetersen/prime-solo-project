import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Nav from '../../components/Nav/Nav';
import axios from 'axios';

const mapStateToProps = reduxState => ({
  reduxState,
});

class PocData extends Component {
  constructor() {
    super();
    this.state = {
      tempData: {},
      levelData: {},
    };
  }

  componentWillMount() {
    // this.fetchCurrentLevel();
    // this.fetchCurrentTemp();
    // this.props.dispatch({ type: 'FETCH_LEVEL' });
  }

fetchCurrentTemp

  render() {
    const columns = [{
      id: 'date',
      Header: 'Date',
      accessor: '' 
    }, {
      id: 'waterTemp',
      Header: 'Water Temp',
      accessor: '',
    }, {
      id: 'waterLevel',
      Header: 'Water Level',
      accessor: '',
    }, {
      id: 'airTemp', // Required because our accessor is not a string
      Header: 'Air Temp',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      id: 'humidity', // Required because our accessor is not a string
      Header: 'Humidity',
      accessor: d => d.friend.name // Custom value accessors!
    }]

    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <ReactTable
            // data={data}
            columns={[
              {
                columns: [
                  {
                    Header: "Date",
                    accessor: "date"
                  },
                ]
              },
              {
                columns: [
                  {
                    Header: "Water Temp",
                    accessor: "waterTemp"
                  },
                ]
              },
              {
                columns: [
                  {
                    Header: "Water Level",
                    accessor: "level"
                  },
                ]
              },
              {
                columns: [
                  {
                    Header: "Air Temp",
                    accessor: "airTemp"
                  },
                ]
              },
              {
                columns: [
                  {
                    Header: "Humidity",
                    accessor: "humidity"
                  }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}




export default connect(mapStateToProps)(PocData);