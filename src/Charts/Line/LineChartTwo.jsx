import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Modal from 'react-modal';

import SVGElement from '../../saveImg/svg_todataurl.js'; // eslint-disable-line no-unused-vars
import ActionBtn from '../../ActionBtn/ActionBtn.js';
import XValAmt from '../XValAmt.jsx';
import In from '../InputChartMenu.jsx';
import CustomStylesFile from '../CustomStyles.jsx';
import ChartHeader from '../ChartHeader.jsx';
// import stateData from '../StateData.jsx';

const customStyles = CustomStylesFile;

export default class LineChartTwo extends React.Component {

  constructor(props) {
    super(props);

    // this.state = stateData;
    this.state = {
      Cat1Box1: 1, Cat1Box2: 2, Cat1Box3: 4,
      Cat1Box4: 7, Cat1Box5: 2, Cat1Box6: 4,
      Cat2Box1: 3, Cat2Box2: 1, Cat2Box3: 0,
      Cat2Box4: 8, Cat2Box5: 1, Cat2Box6: 0,
      y1: '2015', y2: '2016', y3: '2017',
      y4: '2018', y5: '2019', y6: '2020',
      minNum: 0, maxNum: 8,
      catOne: 'Bikes', catTwo: 'Skateboards',
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  hC(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  exportPng() {
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "#fromcanvas { display: block !important; }";
    document.body.appendChild(css);

    document.querySelector('svg.recharts-surface').id = 'svg';
    var svg = document.getElementById("svg");
    var img = document.getElementById("fromcanvas");

    svg.toDataURL("image/png", {
      callback: function(data) {
        img.setAttribute("src", data);
      }
    })
  }

  openModal() {
    this.setState({modalIsOpen: true});
    document.body.style.overflow = 'hidden';
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({modalIsOpen: false});
    document.body.style.overflow = 'auto';
  }

  render() {

    let data = [
      {name: this.state.y1, uv: this.state.Cat2Box1, pv: this.state.Cat1Box1},
      {name: this.state.y2, uv: this.state.Cat2Box2, pv: this.state.Cat1Box2},
    ];

    return (
      <div>
        <ActionBtn />
        <div className="chartWrap">
          <ChartHeader openModal={this.openModal} />
          <ResponsiveContainer>
            <LineChart  data={data} width={1600} height={1000}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="name"/>
              <YAxis type="number" dataKey="1000000000000"
                domain={[parseInt(this.state.minNum), parseInt(this.state.maxNum)]} allowDataOverflow={true} />
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/><Legend />
              <Line type="monotone" dataKey="pv" name={this.state.catOne} stroke="#8884d8" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="uv" name={this.state.catTwo} stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} style={customStyles}
          contentLabel="Chart Edit Menu">

          <h2>Chart Settings</h2>
          <button onClick={this.closeModal} className="closeChartSettings">
            <i className="material-icons">close</i>
          </button>

          <span className="chartEditorLabel">Categories</span>
          <In val={this.state.catOne} ph="Category" onC={this.hC.bind(this, 'catOne')} />
          <In val={this.state.catTwo} ph="Category" onC={this.hC.bind(this, 'catTwo')} />

          <span className="chartEditorLabel">Min/Max Y Value</span>
          <In val={this.state.minNum} ph="Min" onC={this.hC.bind(this, 'minNum')} />
          <In val={this.state.maxNum} ph="Max" onC={this.hC.bind(this, 'maxNum')} />

          <XValAmt />

          <In val={this.state.y1} ph="X Val 1" onC={this.hC.bind(this, 'y1')} />
          <In val={this.state.y2} ph="X Val 2" onC={this.hC.bind(this, 'y2')} />
          <br />

          <span className="chartEditorLabel">Y Values: <strong>{this.state.catOne}</strong></span>
          <In val={this.state.Cat1Box1} ph="Y Val 1" onC={this.hC.bind(this, 'Cat1Box1')} />
          <In val={this.state.Cat1Box2} ph="Y Val 2" onC={this.hC.bind(this, 'Cat1Box2')} />
          <br />

          <span className="chartEditorLabel">Y Values: <strong>{this.state.catTwo}</strong></span>
          <In val={this.state.Cat2Box1} ph="Y Val 1" onC={this.hC.bind(this, 'Cat2Box1')} />
          <In val={this.state.Cat2Box2} ph="Y Val 2" onC={this.hC.bind(this, 'Cat2Box2')} />
          <br />

          <button onClick={this.exportPng} className="exportPngBtn">Save as PNG</button> <br />
          <img id="fromcanvas" className="exportedPng" />
        </Modal>
      </div>
    )
  }
}
