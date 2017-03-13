import React from 'react';

export default class InL extends React.Component {

  render() {
    return (
      <input type="text" value={this.props.val} placeholder={this.props.ph}
        onChange={this.props.onC}
        className="chartEditorInput chartEditorInputLeft" />
    );
  }

}

// InL.propTypes = {
//   val: React.PropTypes.oneOfType([
//             React.PropTypes.string,
//             React.PropTypes.number
//         ]),
//   onC: React.PropTypes.string,
//   ph: React.PropTypes.string,
// };
