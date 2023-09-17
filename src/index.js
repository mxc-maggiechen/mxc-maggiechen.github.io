import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

ReactDOM.render(
  <Router basename="/mxc-maggiechen.github.io"> {/* Set the basename to your repository name */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
