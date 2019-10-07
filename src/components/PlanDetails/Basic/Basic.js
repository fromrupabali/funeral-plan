import React, { Component } from "react";

import Img from "../../../assets/feature.jpg";
import "../PlanDetails.css";
import Includes from "../Includes/Includes";
import NotIncludes from "../NotIncludes/NotIncludes";

export default class PlanDetails extends Component {
  state = {
    planDetails: {
      id: 1,
      title: "Stratsone and Bently Basic Plan",
      description:
        "This is Strastone and bently most affordable plan, and for those people who do not wish for an elaborate funeral or a service of any kind, but want to make matters simple and reduce the financial burden for those left behind.Our Funeral Directors will take care of all the necessary arrangements, ensuring the cremation goes smoothly and with minimum stress for the family.",
      includes: [
        "Collection of the deceased by the Funeral Director",
        "A simple basic veneered coffin",
        "Care and preparation of the deceased prior to cremation",
        "Advice and guidance on all aspects of the funeral arrangements including the certification and registration of the death",
        "Transportation of the deceased to the Crematorium",
        "Crematorium fees",
        "Any fees payable to doctors or a Coroner for the issue of death or cremation medical certificates, or Coroners certificates",
        "Return of ashes to family/chosen person"
      ],
      notIncludes: [
        "There is no Chapel of Rest viewing",
        "There is no service for family and friends to pay their final respects",
        "Cremation only (no burial)",
        "Choice of Crematorium",
        "No additional extras are available for a Simple Plan"
      ],
      featureImage: Img,
      payPerMonth: 23
    }
  };

  render() {
    return (
      <div className="plan">
          <img className="Feature" src={Img} alt="fetureimg" />
        <div className="planAbout">
          <h1>{this.state.planDetails.title}</h1>
          <div className="planDescription">
            <div className="DescriptionTxt">
              <p>{this.state.planDetails.description}</p>
            </div>
            <div className="planPayment">
              <h3>FROM</h3>
              <h1>£{this.state.planDetails.payPerMonth}</h1>
              <h3>PER MONTH</h3>
              <button onClick={this.props.open}>Request this plan</button>
            </div>
          </div>
        </div>
        <div className="Opnt">
          <div className="Include">
            <h3>What is included ?</h3>
            <Includes includes={this.state.planDetails.includes} />
          </div>
          <div className="NotInclude">
            <h3>What is not included ?</h3>
            <NotIncludes includes={this.state.planDetails.notIncludes} />
          </div>
        </div>
      </div>
    );
  }
}
