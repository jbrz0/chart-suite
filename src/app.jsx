import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import NotFound from './notFound.jsx';

export default class App extends React.Component {
  render() {
    return (

      <Router history={browserHistory}>
        <Route path="/" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./welcome.jsx').default); })
        }} />
        <Route path="bar" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Bar/BarChartTemplate.jsx').default); })
        }} />
        <Route path="line" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Line/LineChartTemplate.jsx').default); })
        }} />
        <Route path="*" component={NotFound}/>
      </Router>

    )
  }
}
