import React from 'react';

class XValAmtLine extends React.Component {

  render() {
    return (
      <div>
        <span className="chartEditorLabel">X Values</span>
        <div className="amountWrap">
          <a href="/line/2"><button>2</button></a>
          <a href="/line/3"><button>3</button></a>
          <a href="/line/4"><button>4</button></a>
          <a href="/line/5"><button>5</button></a>
          <a href="/line/6"><button className="activeXAmount">6</button></a>
        </div>
      </div>
    );
  }

}

export default XValAmtLine;
