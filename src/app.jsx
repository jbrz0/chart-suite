import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import Welcome from './welcome.jsx';
// import LineChartTwo from './Charts/Line/LineChartTwo.jsx';
// import LineChartThree from './Charts/Line/LineChartThree.jsx';
// import LineChartFour from './Charts/Line/LineChartFour.jsx';
// import LineChartFive from './Charts/Line/LineChartFive.jsx';
// import LineChartSix from './Charts/Line/LineChartSix.jsx';
// import BarChartTwo from './Charts/Bar/BarChartTwo.jsx';
// import BarChartThree from './Charts/Bar/BarChartThree.jsx';
// import BarChartFour from './Charts/Bar/BarChartFour.jsx';
// import BarChartFive from './Charts/Bar/BarChartFive.jsx';
// import BarChartSix from './Charts/Bar/BarChartSix.jsx';


export default class App extends React.Component {
  render() {
    return (

      <Router history={browserHistory}>
        <Route path="/" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./welcome.jsx').default);
          })
        }} />
        <Route path="line/2" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Line/LineChartTwo.jsx').default);
          })
        }} />
        <Route path="line/3" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Line/LineChartThree.jsx').default);
          })
        }} />
        <Route path="line/4" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Line/LineChartFour.jsx').default);
          })
        }} />
        <Route path="line/5" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Line/LineChartFive.jsx').default);
          })
        }} />
        <Route path="line/6" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Line/LineChartSix.jsx').default);
          })
        }} />
        <Route path="bar/2" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Bar/BarChartTwo.jsx').default);
          })
        }} />
        <Route path="bar/3" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Bar/BarChartThree.jsx').default);
          })
        }} />
        <Route path="bar/4" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Bar/BarChartFour.jsx').default);
          })
        }} />
        <Route path="bar/5" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Bar/BarChartFive.jsx').default);
          })
        }} />
        <Route path="bar/6" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./Charts/Bar/BarChartSix.jsx').default);
          })
        }} />

          {/* <Route path="*" component={NoMatch}/> */}
      </Router>

    )
  }
}
