import React from 'react';

import './Home.css';
import Plans from '../../components/Plans/Plans';
import Header from '../../components/Header/Header';
import FuneralDetails from '../../components/FuneralDetails/FuneralDetails';
import Blogs from '../../components/Blogs/Blogs';


const home = (props) => (
      <div>
        <section>
          <Header />
        </section>
        <section id="section2" className="PlanSection">
          <Plans show={props.open} />
        </section>
        <section className="WhyChoose">
          <h1 className="heading">Why choose us?</h1>
          <FuneralDetails />
        </section>
        <section className="BlogContainer">
          <Blogs blogs={props.blogs} />
        </section>
      </div>
    );

    export default home;