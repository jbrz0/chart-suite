import React from 'react';

class XValAmt extends React.Component {

  render() {
    return (
      <div>
        <span className="chartEditorLabel">X Values</span>
        <div className="amountWrap">
          <a href="/bar/2"><button>2</button></a>
          <a href="/bar/3"><button>3</button></a>
          <a href="/bar/4"><button>4</button></a>
          <a href="/bar/5"><button>5</button></a>
          <a href="/bar/6"><button className="activeXAmount">6</button></a>
        </div>
      </div>
    );
  }

}

export default XValAmt;
