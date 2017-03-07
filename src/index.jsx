import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

let injectTapEventPlugin = require('react-tap-event-plugin');
window.React = React;
injectTapEventPlugin();

render(<App />, document.getElementById('app'));
