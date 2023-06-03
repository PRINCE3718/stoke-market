import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap-icons/font/bootstrap-icons.css"
import './stoke-market.css';
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import HOT from './components/HOT COLLECTIONS';
import Aslider from './components/Aslider';
import Best from './components/Best';
import Footer from './components/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <About/>
    <HOT/>
    <Aslider/>
    <Best/>
    <Footer/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
