import React from 'react';

// Svg
import FooterLogo from './logo-footer.svg';

class Footer extends React.Component {

  render() {
    return (
      <div className="footerWrap">
        <a href="/"><img src={FooterLogo} className="footerLogo" /></a>
        <a href="mailto:hello@chartsuiteapp.com" className="footerMailLink"><p>hello@chartsuiteapp.com</p></a>
      </div>
    );
  }
}

export default Footer;
