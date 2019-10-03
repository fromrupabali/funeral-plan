import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import FuneralPlan from './containers/FuneralPlans/FuneralPlans';
import PlanDetails from './components/PlanDetails/PlanDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/compare-plan" component={FuneralPlan} />
          <Route path ="/plan-details" component={PlanDetails}/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
