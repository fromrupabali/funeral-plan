import React, { Component } from 'react';

import Background from '../../assets/b2.jpg';
import Navigation from '../Navigation/NavigationItems/NavigationItems';
import './Header.css';


export default class Header extends Component{
    state = {
    imageHeight: null,
    imageWidth: null
  }
  componentDidMount() {
    this.setImageSize()
  }

  setImageSize = () => {
   if(window.innerWidth < 768) {
       this.setState({imageWidth: "100%", imageHeight: 200})
     } else {
       this.setState({imageWidth: "100%", imageHeight: '90vh'})
     }  
   }
    render(){
         const sectionStyle = {
           width: this.state.imageWidth,
           height: this.state.imageHeight,
           backgroundImage: `url(${Background})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           opacity:'0.9'
         };
       return (
         <div className="Header">
           <div style={sectionStyle}>
             <div className="nav">
                 <Navigation />
             </div>
             <div className="HeaderText">
               <h1>Compare and buy a funeral plan</h1>
               <p>
                 Everyone has different needs - and we provide a range of
                 funeral plans designed to meet your requirements at a price you
                 can efford.
               </p>
                 <a href="#section2">Find more</a>
             </div>
           </div>
         </div>
       );
    }
}; 