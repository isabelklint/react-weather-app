import React from "react";
import './App.css';
import Top from './Top.js';
import Antipodal from './Antipodal.js';
import Chosen from './Chosen.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Top />
        <div className="d-flex content-container justify-content-center align-items-baseline weather">
          <div className="row d-flex">
            <Antipodal />
            <div className="col-12 col-md-4">
              <img className="centerImage rotateimg90" src={require('./circlearrows.svg').default} alt='circlearrows image' />
            </div>
            <Chosen />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
