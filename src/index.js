import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom"; // Import BrowserRouter
import App from './App';

ReactDOM.render(
  <HashRouter> {/* Set the basename to your repository name */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
