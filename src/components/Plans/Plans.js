import React from 'react';
import { Link } from "react-router-dom";

import './Plans.css';

const plans = () => (
  <div className="Plans">
    <h1 className="PlanHeading">
      We have 5 comprehensive Funeral Plans to choose from...
    </h1>
    <div className="allPlans">
      <div className="singlePlan">
        <div className="PlanIntro">
          <h4>Basic plan</h4>
          <p>A simple funeral at affordable price.</p>
        </div>
        <div className="PlanPrice">
          <p>Pay monthly from</p>
          <h1>£13.59</h1>
        </div>
        <div className="PlanButton">
          <Link to="/plan-details">View plan details</Link>
        </div>
      </div>
      <div className="singlePlan">
        <div className="PlanIntro">
          <h4>The standard plan</h4>
          <p>
            Affordable plan with greater flexibility in regards to time and
            place of funeral
          </p>
        </div>
        <div className="PlanPrice">
          <p>Pay monthly from</p>
          <h1>£16.59</h1>
        </div>
        <div className="PlanButton">
          <Link to="/plan-details">View plan details</Link>
        </div>
      </div>
      <div className="singlePlan">
        <div className="PlanIntro">
          <h4>The Perl plan</h4>
          <p>
            Including added benefits of one limousine and higher quality coffin.
          </p>
        </div>
        <div className="PlanPrice">
          <p>Pay monthly from</p>
          <h1>£18.59</h1>
        </div>
        <div className="PlanButton">
          <Link to="/plan-details">View plan details</Link>
        </div>
      </div>
      <div className="singlePlan">
        <div className="PlanIntro">
          <h4> The diamond plan</h4>
          <p>
            Most comprehensive funeral plan including twon limousine and a
            superior coffin.
          </p>
        </div>
        <div className="PlanPrice">
          <p>Pay monthly from</p>
          <h1>£19.34</h1>
        </div>
        <div className="PlanButton">
          <Link to="/plan-details">View plan details</Link>
        </div>
      </div>
    </div>
  </div>
);

export default plans;