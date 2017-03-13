import React from 'react';
import logoUrl from '../HeaderChart/logo.svg';
import { Link } from 'react-router';

class ChartHeader extends React.Component {

  render() {
    return (
      <div>
        <Link className="brand" to="/">
          <img src={logoUrl} width="340" height="75" alt="Chart Suite" />
        </Link>
        <button onClick={this.props.openModal} className="chartSettingsBtn">
          <i className="material-icons settingsIcon">settings</i>
        </button>
      </div>
    );
  }

}

export default ChartHeader;
