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
import BarCodeScanner from './components/barcodetesting';
import Profile from './components/webCamTest';
import QrReadTest from './components/qrTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <QrReadTest />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
