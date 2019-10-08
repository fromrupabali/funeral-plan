import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import FuneralPlan from './containers/FuneralPlans/FuneralPlans';
import BasicPlan from './components/PlanDetails/Basic/Basic';
import StandardPlan from "./components/PlanDetails/Standard/Standard";
import PerlPlan from "./components/PlanDetails/Perl/Perl";
import DiamondPlan from "./components/PlanDetails/Diamond/Diamond";
import ComparePlan from './components/ComparePlans/ComparePlans';
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
      <HashRouter>
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
              path="/agent"
              component={FuneralPlan}
            />
            <Route
              path="/plan-details/basic"
              exact
              component={() => <BasicPlan open={this.ModalOpen} />}
            />
            <Route
              path="/plan-details/standard"
              exact
              component={() => <StandardPlan open={this.ModalOpen} />}
            />
            <Route
              path="/plan-details/perl"
              exact
              component={() => <PerlPlan open={this.ModalOpen} />}
            />
            <Route
              path="/plan-details/diamond"
              exact
              component={() => <DiamondPlan open={this.ModalOpen} />}
            />
            <Route 
              path="/compare-plan" component={()=> <ComparePlan open={this.ModalOpen}/>}/>
              
            <Footer />
          </Layout>
        </div>
      </HashRouter>
    );
  }
}
export default App;
