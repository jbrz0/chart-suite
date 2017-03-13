import React from 'react';
import Header from './Header/Header.js';
import Navigation from './Navigation/Navigation.js';
import IconBar from './IconBar/IconBar.js';
import Video from './Video/Video.js';
import Features from './Features/Features.js';
import Screenshots from './Screenshots/Screenshots.js';
import Footer from './Footer/Footer.js';
import ActionBtn from './ActionBtn/ActionBtn.js';

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Welcome extends React.Component {
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
      <div>
        <Header>
          <Navigation className="nav"
          features="features" screenshots="screenshots" />
        </Header>
        <IconBar />
        <Video />
        <Element name="features" className="features">
          <Features />
        </Element>
        <Element name="screenshots" className="screenshots">
          <Screenshots />
        </Element>
        <Footer />
        <ActionBtn />
      </div>
    )
  }
}
