import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';
import { connect } from 'react-redux';
import 'typeface-roboto'
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import WaterLevel from './components/WaterLevel/WaterLevel';
import WaterTemp from './components/WaterTemp/WaterTemp';
// import DataPage from './components/DataPage/DataPage';
import PocData from './components/DataPage/PocData';
import './styles/main.css';

const App = () => (
  
  <div>
    <Header title="AquaSense"/>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />

        <Route
          path="/temps"
          component={WaterTemp}
        />
        <Route
          path="/level"
          component={WaterLevel}
        />
        <Route
          path="/data"
          component={PocData}
        />
        {/* <Route
          path="/data"
          component={DataPage}
        /> */}
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
