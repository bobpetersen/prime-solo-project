import React from 'react';
import Button from '@material-ui/core/Button';


const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
    <Button
      variant="contained" color="default"
      onClick={this.logout}
    >
      Log Out
          </Button>
  </div>
);

export default Header;
