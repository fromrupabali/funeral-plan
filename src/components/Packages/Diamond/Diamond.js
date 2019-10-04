import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const diamond = () => (
  <table className="planTable" style={{ width: "100%" }}>
    <tr className="CompanyName">
      <th></th>
      <td>Golden Charter</td>
      <td>Safe Hands</td>
      <td>Dignity</td>
      <td>Capital life</td>
    </tr>
    <tr>
      <th>Price</th>
      <td>3495</td>
      <td>2390</td>
      <td>3295</td>
      <td>3475</td>
    </tr>
    <tr>
      <th>Coffin</th>
      <td>Simple</td>
      <td>A simple, Venneered coffin with namespace.</td>
      <td>Wood effect</td>
      <td>Quality Venneered.</td>
    </tr>
    <tr>
      <th>
        Transportation of the deceased to the funeral director’s premises within
        25 miles
      </th>
      <td>24 hours</td>
      <td>24 hours</td>
      <td>24 hours</td>
      <td>24 hours</td>
    </tr>
    <tr>
      <th>
        Funeral procession to funeral location (fees and costs of a service at a
        separate location not included)
      </th>
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
      <th>One following Limousines</th>
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
      <th>An Funeral hearses and bearers</th>
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
  </table>
);

export default diamond;
