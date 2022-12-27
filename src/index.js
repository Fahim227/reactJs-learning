import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Products from './components/products';
import Counters from './components/counters';
import NavBar from './components/navBar';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavBar/>
    <Router>
      <Routes >
        <Route path="">
        <Counters />
        </Route>
        <Route path="/products">
        <Products />
        </Route>
      </Routes >
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
