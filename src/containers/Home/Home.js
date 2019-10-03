import React, { Component } from 'react';

import './Home.css';
import Plans from '../../components/Plans/Plans';
import Header from '../../components/Header/Header';
import FuneralDetails from '../../components/FuneralDetails/FuneralDetails';
import Blogs from '../../components/Blogs/Blogs';

import img1 from '../../assets/background.jpg';
import img2 from "../../assets/background.jpg";
import img3 from "../../assets/background.jpg";

export default class Home extends Component {
                 state = {
                   blogs: [
                     {
                       id: 1,
                       title:
                         "We need to talk more about black mentorship burnout and how.",
                       img: img1,
                       date: "May 2, 2019"
                     },
                     {
                       id: 2,
                       title:
                         "My korean mother doesn’t understand my american success",
                       img: img2,
                       date: "June 5, 2019"
                     },
                     {
                       id: 3,
                       title:
                         "Gigi saul guerrero’s latest combines a real-life horror with fantasy",
                       img: img3,
                       date: "June 5, 2019"
                     }
                   ]
                 };
                 render() {
                   return (
                     <div>
                       <section>
                         <Header />
                       </section>
                       <section className="PlanSection">
                         <Plans />
                       </section>
                       <section className="WhyChoose">
                         <h1 className="heading">Why choose us?</h1>
                         <FuneralDetails />
                       </section>
                       <section className="BlogContainer">
                         <Blogs blogs={this.state.blogs}/>
                       </section>
                     </div>
                   );
                 }
               } 
