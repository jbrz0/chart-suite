import React from 'react';
import ReactTooltip from 'react-tooltip';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
// var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Navigation extends React.Component {

  componentDidMount() {
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }

  render() {
    return (
      <div className="root navRoot" role="navigation">
        <a href="/line/6" className="link linkOne">
          new chart
        </a>
        <Link className="link linkTwo" activeClass="active" to="features" spy={true} smooth={true}
          offset={50} duration={500} onSetActive={this.handleSetActive}>
          features
        </Link>
        <Link className="link linkThree" activeClass="active" to="screenshots" spy={true} smooth={true}
          offset={50} duration={500} onSetActive={this.handleSetActive}>
          screenshots
        </Link>
        {/* <a href="/#plans" className="link linkFour">Plans</a> */}

          <a href="mailto:hi@chartsuiteapp.com"
            className="link linkFour" data-tip="hi@chartsuiteapp.com">contact
          </a>
          <ReactTooltip effect="solid" place="bottom" />

      </div>
    );
  }
}

export default Navigation;
