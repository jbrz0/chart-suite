import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Welcome from './welcome.jsx';
import LineChartTwo from './Charts/Line/LineChartTwo.jsx';
import LineChartThree from './Charts/Line/LineChartThree.jsx';
import LineChartFour from './Charts/Line/LineChartFour.jsx';
import LineChartFive from './Charts/Line/LineChartFive.jsx';
import LineChartSix from './Charts/Line/LineChartSix.jsx';

import BarChartTwo from './Charts/Bar/BarChartTwo.jsx';
import BarChartThree from './Charts/Bar/BarChartThree.jsx';
import BarChartFour from './Charts/Bar/BarChartFour.jsx';
import BarChartFive from './Charts/Bar/BarChartFive.jsx';
import BarChartSix from './Charts/Bar/BarChartSix.jsx';


export default class App extends React.Component {
  render() {
    return (

      <Router history={browserHistory}>
          <Route path="/" component={Welcome} />
          {/* <Route path="chart" component={ChartLineSix} /> */}
          <Route path="line/2" component={LineChartTwo} />
          <Route path="line/3" component={LineChartThree} />
          <Route path="line/4" component={LineChartFour} />
          <Route path="line/5" component={LineChartFive} />
          <Route path="line/6" component={LineChartSix} />
          <Route path="bar/2" component={BarChartTwo} />
          <Route path="bar/3" component={BarChartThree} />
          <Route path="bar/4" component={BarChartFour} />
          <Route path="bar/5" component={BarChartFive} />
          <Route path="bar/6" component={BarChartSix} />
          {/* <Route path="chart/7" component={ChartLineSeven} />
          <Route path="chart/8" component={ChartLineEight} /> */}
          {/* <Route path="*" component={NoMatch}/> */}
      </Router>

    )
  }
}
