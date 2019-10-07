import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import './ComparePlan.css';

const basic = props => (
  <div className="ComparePlan">
    <div className="CompareIntro">
      <h1>Compare our plans</h1>
      <p>
        Everyone has different needs – and we provide a range of funeral plans
        designed to meet your requirements at a price you can afford.
      </p>
      <p>
        The table below provides an at-a-glance summary of the different plan
        options and what each includes. Though they all cover cremation in their
        standard form, each (with the exception of the Direct Cremation plan)
        can also be tailored for burial.
      </p>
    </div>
    <table className="planTable" style={{ width: "100%" }}>
      <tr className="CompanyName">
        <th></th>
        <td>Basic</td>
        <td>Standard</td>
        <td>Perl</td>
        <td>Diamond</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>£2895</td>
        <td>£3495</td>
        <td>£3850</td>
        <td>£4099</td>
      </tr>
      <tr>
        <th>Coffin</th>
        <td>Basic</td>
        <td>A simple, Venneered coffin with nameplate.</td>
        <td>High quality</td>
        <td>Superior</td>
      </tr>
      <tr>
        <th>
          Transportation of the deceased to the funeral director’s premises
          within 25 miles
        </th>
        <td>Duiring working hours</td>
        <td>Duiring working hours</td>
        <td>24 hours</td>
        <td>24 hours</td>
      </tr>
      <tr>
        <th>
          Funeral procession to funeral location (fees and costs of a service at
          a separate location not included)
        </th>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
      </tr>
      <tr>
        <th>One following Limousines</th>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
      </tr>
      <tr>
        <th>An Funeral hearses and bearers</th>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
      </tr>
      <tr>
        <th>A list provided to the family of mourners who sent flowers</th>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
        <td>
          <span className="CheckNo">
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
        <td>
          <span className="CheckYes">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </td>
      </tr>
      <tr>
        <th></th>
        <td>
          <button onClick={props.open}>Request this plan</button>
        </td>
        <td>
          <button onClick={props.open}>Request this plan</button>
        </td>
        <td>
          <button onClick={props.open}>Request this plan</button>
        </td>
        <td>
          <button onClick={props.open}>Request this plan</button>
        </td>
      </tr>
    </table>
  </div>
);

export default basic;
