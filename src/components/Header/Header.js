import React from 'react';
import 'typeface-roboto'



const Header = ({ title }) => (
  <div className="grid">
    <div className="col-2-3-4" className="instructions">
      <div className="col-1">
        <h1 className="lead">{title}</h1>
      </div>
    </div>
  </div>
);

export default Header;
