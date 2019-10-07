import React, { Component } from 'react';

import Funeral from './FuneralDetail/FuneralDetail';
import './FuneralDetails.css';

export default class funeralDetails extends Component {
                 state = {
                   services: [
                     {
                       id: 1,
                       h1: "Stay Close to Home",
                       p:
                         "We are owned by the people who understand your needs best – independent funeral directors, each one ready to extend a comforting arm whenever it’s needed. What’s more, over 3,000 funeral directors throughout the UK accept Golden Charter plans."
                     },
                     {
                       id: 2,
                       h1: "Funeral Planning Authority",
                       p:
                         "As an FPA registered provider, Golden Charter is committed to protecting our customers’ payments and guaranteeing to cover the funeral director's services specified in your plan. Over 500,000 people have already trusted us to take care of their funeral."
                     },
                     {
                       id: 3,
                       h1: "NEW! Golden Charter Rewards",
                       p:
                         "Save £s every day on big name brands with our customer rewards programme. It’s a little thank you from us when you take out your plan and it’s another great reason to plan ahead with Golden Charter."
                     },
                     {
                       id: 4,
                       h1: "Reassurance",
                       p:
                         "Many of our funeral directors are family run businesses who hold a trusted place in the community and this means you can be certain your family will receive a genuinely personal service when it matters most."
                     },
                     {
                       id: 5,
                       h1: "Your Payments Are Protected",
                       p:
                         "When you take out a plan, rest assured your payments are protected. Depending on how you wish to pay, plan holder funds are either paid into the Golden Charter Trust or to one of the UK’s leading life assurance policies."
                     },
                     {
                       id: 6,
                       h1: "Free to choose your plan.",
                       p:
                         "You can choose your favourite and affordable plan because we have several plans based on different people."
                     }
                   ]
                 };
                 render() {
                   const services = this.state.services.map(service => {
                     return <Funeral key={service.id} h1={service.h1} p={service.p} />;
                   });
                   return <div className="FuneralDetails">{services}</div>;
                 }
               }