import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="content-container">
        <div className="row d-flex  align-items-baseline">
          <div className="col-sm-12 col-md-4 col-lg-6 antipode">
            <h1>ANTIPODE WEATHER</h1>
            <h3>Try searching for:</h3>
            <h3>Taipei, Madrid, Perth, or Honolulu.</h3>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2 yourCity">
            <h2>Find the weather in...</h2>
            <form>
              <div>
                <input type="text" value="Placeholder" />
                <input type="button"/>
              </div>
              <div>
                <input type="text" value="Your location" disabled />
                <input type="button"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex content-container justify-content-center align-items-baseline weather">
        <div className="row d-flex">
          <div className="col-12 col-md-4 antipodal">
            <h2 className="big">Antipode City</h2>
            <span><i className="fa-solid fa-rainbow big" /></span>
            <h2>
              <span>Temp </span>
              <span>Units</span>
            </h2>
          </div>
          <div className="col-12 col-md-4">
            <img className="centerImage rotateimg90" src={require('./circlearrows.svg').default} alt='circlearrows image' />
          </div>
          <div className="col-12 col-md-4 chosen">
            <div>
              <h2 className="big">Your City</h2>
              <span><i className="fa-solid fa-rainbow big" /></span>
              <h2>
                <span>Temp </span>
                <span>33°C</span>
                <span> | </span>
                <span>88°F</span>
              </h2>
              <p>Mon 2:33PM</p>
            </div>
            <div className="row">
              <div className="col">
                <p>Description
                </p>
                <p>Humidity</p>
                <p>Wind</p>
              </div>
            </div>
            <div className="row">
              <div className="col" />
              <div className="col" id="lastFiveDays">Last five days</div>
            </div>
          </div>
        </div>
      </div>
        <footer>
          <span>This project was coded by Isabel Klint and is open sourced on Github.</span>
        </footer>
    </div>
  )
}
