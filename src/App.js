import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import FuneralPlan from './containers/FuneralPlans/FuneralPlans';
import PlanDetails from './components/PlanDetails/PlanDetails';
import Footer from './components/Footer/Footer';

import img1 from "./assets/blog.jpg";
import img2 from "./assets/blog2.jpg";
import img3 from "./assets/blog3.jpg";

class App extends Component {
  state = {
    show: false,
    blogs: [
      {
        id: 1,
        title: "Repatriation Service",
        img: img1,
        date: "May 2, 2019"
      },
      {
        id: 2,
        title: "Rising Costs of Funerals",
        img: img2,
        date: "June 5, 2019"
      },
      {
        id: 3,
        title: "Had a Bereavement?",
        img: img3,
        date: "June 5, 2019"
      }
    ]
  };
  ModalClose = () => {
    this.setState({
      show: false
    });
  };

  ModalOpen = () => {
    this.setState({
      show: true
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout show={this.state.show} clicked={this.ModalClose}>
            <Route
              path="/"
              exact
              component={() => (
                <Home blogs={this.state.blogs} open={this.ModalOpen} />
              )}
            />
            <Route
              clicked={this.ModalClose}
              path="/compare-plan"
              component={FuneralPlan}
            />
            <Route
              path="/plan-details"
              exact
              component={() => (
                <PlanDetails blogs={this.state.blogs} open={this.ModalOpen} />
              )}
            />
            <Route path={["/", "/plan-details"]} exact component={Footer} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
