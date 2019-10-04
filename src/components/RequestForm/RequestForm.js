import React, { Component} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import './RequestForm.css';
export default class RequestForm extends Component {
        state={
            name:'',
            email:'',
            plan:'',
            message:''

        }
        handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        };

        handleSubmit = event => {
        event.preventDefault();
        const message_data = {
            email: this.state.email,
            name: this.state.name,
            plan:this.state.plan,
            message: this.state.message
        };

        console.log(message_data);
                   
    };
        render() {
        return (
          <div className="FormBuilder">
            <div className="FormClose">
              <button onClick={this.props.clicked} className="CloseIcon">
                <span>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </button>
            </div>
            <h2>Send us a message</h2>
            <form className="Form" onSubmit={this.handleSubmit}>
              <div className="FormSection">
                <label>Your Name</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="FormSection">
                <label>Your Email</label>
                <input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="FormSection">
                <label>Your Plan</label>
                <select onChange={this.handleChange} name="plan" required>
                  <option value="basic">Basic</option>
                  <option value="standars">Standard</option>
                  <option value="Perl">Perl</option>
                  <option value="diamond">Diamond</option>
                </select>
              </div>
              <div>
                <label>Your message</label>
                <textarea
                  onChange={this.handleChange}
                  name="message"
                ></textarea>
              </div>
              <div>
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        );
        }
    }