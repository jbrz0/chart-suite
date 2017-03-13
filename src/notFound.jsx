import React from 'react';
import { Link } from 'react-router';
import logoUrl from './HeaderChart/logo.svg';
import ActionBtn from './ActionBtn/ActionBtn.js';

export default class NotFound extends React.Component {

  render() {
    return (
      <div>
        <Link to="/">
          <img className="notFoundLogo" src={logoUrl} width="340" height="75" alt="Chart Suite" />
        </Link>

        <div className="notFoundWrap">
          <h1>Page Not Found</h1>
          <a href="/" className="notFoundBtn">Click Here To Go Home</a>
        </div>

        <ActionBtn />
      </div>
    )
  }
}
