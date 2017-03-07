import React from 'react';

// Svg
import FeaturesOne from './features-01.svg';
import FeaturesTwo from './features-02.svg';
import FeaturesThree from './features-03.svg';

class Features extends React.Component {

  render() {
    return (
      <div className="featuresRoot">
        <div className="container featuresContainer"><a className="screenshotAnchor" name="features"></a>
          <div>
            <img src={FeaturesOne} className="featuresIcon" alt="Feature 1"/>
            <h2>Intuitive interface</h2>
            <p>Edit info directly in browser</p>
          </div>
          <div>
            <img src={FeaturesTwo} className="featuresIcon" alt="Feature 2"/>
            <h2>Save your work</h2>
            <p>Save charts as PNG</p>
          </div>
          <div>
            <img src={FeaturesThree} className="featuresIcon" alt="Feature 3"/>
            <h2>Variety of charts</h2>
            <p>Line & bar charts to customize</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
