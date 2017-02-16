import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import SVGElement from './saveImg/svg_todataurl.js'; // eslint-disable-line no-unused-vars



export default class CSLineChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input1: 0,
      input2: 0,
      nameOne: 'Name One',
      theDataMin: 0,
      theDataMax: 10000,
      data: [
            {name: nameOne, uv: input1, pv: input2},
            {name: 'Page B', uv: 3000, pv: 1398},
            {name: 'Page C', uv: 2000, pv: 9800},
            {name: 'Page D', uv: 2780, pv: 3908},
            {name: 'Page E', uv: 1890, pv: 4800},
            {name: 'Page F', uv: 2390, pv: 3800},
            {name: 'Page G', uv: 3490, pv: 4300},
      ],
    }



  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);

  }

  doButterfly() {
    document.querySelector('svg.recharts-surface').id = 'svg';
    var svg = document.getElementById("svg");
    var img = document.getElementById("fromcanvas");

    svg.toDataURL("image/png", {
      // keepOutsideViewport: true,
      // keepNonSafe: true,

      // adjust sizing of output, only works after DOM render
      callback: function(data) {
        img.setAttribute("src", data);
        // var a = document.querySelector("#fromcanvas");
        // a.style.width = '1500px';
      }
    })
  }

  addRow() {
    this.data.push(this.row);
  }

  render() {

    // var valueOne = this.state.input1;
    // var valueTwo = this.state.input2;
    var nameOne = this.state.nameOne;
    var DataMin = this.state.theDataMin;
    var DataMax = this.state.theDataMax;

    // var row = {name: 'Page G', uv: 3490, pv: 4300}

    // let data = [
    //       {name: nameOne, uv: this.state.input1, pv: valueTwo},
    //       {name: 'Page B', uv: 3000, pv: 1398},
    //       {name: 'Page C', uv: 2000, pv: 9800},
    //       {name: 'Page D', uv: 2780, pv: 3908},
    //       {name: 'Page E', uv: 1890, pv: 4800},
    //       {name: 'Page F', uv: 2390, pv: 3800},
    //       {name: 'Page G', uv: 3490, pv: 4300},
    // ];

    return (
      <div>

        <div className="chartWrap">
        <ResponsiveContainer>
        <LineChart  data={this.state.data} width={1600} height={1300}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis type="number" dataKey="1000000000000" domain={[parseInt(DataMin), parseInt(DataMax)]} allowDataOverflow={true} />
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


      <div className="controls">
      {this.state.input1}<br/>
      {this.state.input2}<br/>
        <button onClick={this.addRow.bind(this)}>ADD ROW</button>
        <input type="text" value={this.state.input1}
          onChange={this.handleChange.bind(this, 'input1')} placeholder="input1" />
        <input type="text" value={this.state.input2}
          onChange={this.handleChange.bind(this, 'input2')} placeholder="input2" />
        <input type="text" value={this.state.nameOne}
          onChange={this.handleChange.bind(this, 'nameOne')} placeholder="nameOne"/>
        <input type="text" value={this.state.theDataMin}
          onChange={this.handleChange.bind(this, 'theDataMin')} placeholder="theDataMin"/>
        <input type="text" value={this.state.theDataMax}
          onChange={this.handleChange.bind(this, 'theDataMax')} placeholder="theDataMax" /><br />

            <button onClick={this.doButterfly}>Get DataURL</button> <br />
            <img id="fromcanvas" alt="exported chart image" />
      </div> {/* controls end */}

      </div>









      </div>
    )
  }
}





// var Hello = React.createClass({
//   getInitialState: function() {
//       return {input1: 0,
//               input2: 0};
//   },
//   render() {
//     var valueOne = this.state.input1;
//     var valueTwo = this.state.input2;
//     return (
//       <div>
//       {valueOne}<br/>
//       {valueTwo}<br/>
//         <input type="text" value={this.state.input1}
//                            onChange={this.handleChange.bind(this, 'input1')} />
//         <input type="text" value={this.state.input2}
//                            onChange={this.handleChange.bind(this, 'input2')} />
//       </div>
//     );
//   },
//   handleChange(name, e) {
//     var change = {};
//     change[name] = e.target.value;
//     this.setState(change);
//   }
// });