import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import '../node_modules/normalize.css/normalize.css'

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
  document.getElementById("root")
);