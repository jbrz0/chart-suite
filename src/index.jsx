import React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

// import Welcome from './welcome.jsx';

let injectTapEventPlugin = require('react-tap-event-plugin');
window.React = React;
injectTapEventPlugin();

render(<App />, document.getElementById('app'));

// if (module && module.hot) {
//   module.hot.accept('./welcome.jsx', () => {
//     const AppInner = require('./welcome.jsx').default;
//     render(
//       <AppContainer>
//         <App/>
//       </AppContainer>,
//       document.querySelector("#app")
//     );
//   });
// }
