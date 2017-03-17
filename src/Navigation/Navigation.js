import React from 'react';
import ReactTooltip from 'react-tooltip';
var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Navigation extends React.Component {

  componentDidMount() {
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() { scroll.scrollToTop(); }
  scrollToBottom() { scroll.scrollToBottom(); }
  scrollTo() { scroll.scrollTo(100); }
  scrollMore() { scroll.scrollMore(100); }

  render() {
    return (
      <div className="root navRoot" role="navigation">
        <a href="/line" className="link linkOne">
          new chart
        </a>
        <Link className="link linkTwo" activeClass="active" to={this.props.features} spy={true} smooth={true}
          offset={50} duration={500} onSetActive={this.handleSetActive}>
          features
        </Link>
        <Link className="link linkThree" activeClass="active" to={this.props.screenshots} spy={true} smooth={true}
          offset={50} duration={500} onSetActive={this.handleSetActive}>
          screenshots
        </Link>
        <a href="mailto:chartsuiteapp@gmail.com"
          className="link linkFour" data-tip="chartsuiteapp@gmail.com">contact
        </a>
        <ReactTooltip effect="solid" place="bottom" />
      </div>
    );
  }
}

Navigation.propTypes = {
  features: React.PropTypes.string,
  screenshots: React.PropTypes.string
};
