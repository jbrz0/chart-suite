import React from 'react';
import {Link} from 'react-router';

// Svg
import logoUrl from './logo.svg';

class HeaderChart extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container chartContainer">
          <Link className="brand" to="/">
            <img src={logoUrl} width="340" height="75" alt="Chart Suite" />
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderChart;
