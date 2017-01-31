import React from 'react';

export default class ActionBtn extends React.Component {
  render() {
    return(
      <div>
        <ul id="menu" className="mfb-component--br mfb-zoomin" data-mfb-toggle="hover">
          <li className="mfb-component__wrap">
            <a href="#" className="mfb-component__button--main">
              <i className="mfb-component__main-icon--resting material-icons actionBtnIcon">add</i>
              <i className="mfb-component__main-icon--active material-icons actionBtnIcon">close</i>
            </a>
            <ul className="mfb-component__list">
              <li>
                <a href="/bar/6" data-mfb-label="New Bar Chart" className="mfb-component__button--child">
                  <i className="mfb-component__child-icon material-icons actionBtnIcon">insert_chart</i>
                </a>
              </li>
              <li>
                <a href="/line/6" data-mfb-label="New Line Chart" className="mfb-component__button--child">
                  <i className="mfb-component__child-icon material-icons actionBtnIcon">show_chart</i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
