import React, { Component } from 'react';

import Background from '../../assets/b2.jpg';
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
       this.setState({imageWidth: "100%", imageHeight: 300})
     } else {
       this.setState({imageWidth: "100%", imageHeight: '80vh'})
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
             <div className="HeaderText">
               <h1>Flexible funeral plans from Strastone And Bently</h1>
               <p>
                 The safe, simple way to help peace of mind, for your familly.
               </p>
                 <a href="#">Find more</a>
             </div>
           </div>
         </div>
       );
    }
}; 