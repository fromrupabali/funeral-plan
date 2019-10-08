import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const standard = () => (
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
      <td>A simple, Venneered coffin with nameplate.</td>
      <td>Wood effect</td>
      <td>Quality venerred</td>
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
      <th>Choice of time and date of funeral</th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>
    <tr>
      <th>
        Transportation of the deceased to the funeral director’s premises within
        25 miles
      </th>
      <td>Duiring working hours</td>
      <td>Duiring office hours</td>
      <td>Duiring Working hours</td>
      <td>Duiring Working hours</td>
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
      <th>Two following Limousines</th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>
    <tr>
      <th>A list provided to the family of mourners who sent flowers</th>
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
      <th>Family support and guidance provided by the funeral director</th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>
    <tr>
      <th>Family visits to the Chapel of Rest at a mutually agreed time</th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>
    <tr>
      <th>
        Personal and regular contact with the family to provide advice and
        guidance on all aspects of arranging the funeral
      </th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>
    <tr>
      <th>
        Co-ordination of any flowers or tributes and managing collection and
        payments of any charitable donations
      </th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>
    <tr>
      <th>
        Minister's fee for the service at the "crematorium (or graveside, if
        burial)
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
      <th>Doctor's fee</th>
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
      <td>
        <span className="CheckYes">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </td>
    </tr>

    <tr>
      <th>Allowance towards 3rd Party Fees</th>
      <td>1100</td>
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
      <td>1000</td>
    </tr>
  </table>
);

export default standard;
