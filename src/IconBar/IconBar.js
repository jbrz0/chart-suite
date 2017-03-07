import React from 'react';

// Svg
import iconOne from './icons-01.svg';
import iconTwo from './icons-03.svg';
import iconThree from './icons-02.svg';

class IconBar extends React.Component {

  render() {
    return (
      <div className="iconBarRoot">

        <div className="icons">
          <div><img src={iconOne} alt="Create" /></div>
          <div><img src={iconTwo} alt="Edit" /></div>
          <div><img src={iconThree} alt="Save" /></div>
        </div>

        <div className="iconText">
          <div><p className="bannerDesc">Create</p></div>
          <div><p className="bannerDesc">Edit</p></div>
          <div><p className="bannerDesc">Save</p></div>
        </div>

      </div>
    );
  }
}

export default IconBar;
