import React from 'react';
import 'typeface-roboto'



const Header = ({ title }) => (
  <div class="grid">
    <div class="col-2-3-4" className="instructions">
      <div class="col-1">
        <h1 className="lead">{title}</h1>
      </div>
    </div>
  </div>
);

export default Header;
