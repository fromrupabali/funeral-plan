import React from 'react';
import './App.css';
import FuneralPlans from './containers/FuneralPlans/FuneralPlans';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AboutPlan from './components/AboutPlan/AboutPlan';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="SimpleText">
           <AboutPlan />
        </div>
        <div id="section2" className="FuneralPlan">
          <FuneralPlans />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
