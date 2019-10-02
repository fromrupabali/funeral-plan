import React, { Component } from 'react';

import './FuneralPlans.css';
import funerals from  '../../components/data/funeral';
import FuneralPlan from '../../components/Funeral/Funeral';

export default class FuneralPlans extends Component{
    state={
        funeralplan: funerals
    }
    render(){
        const funeralPlan = funerals.map(funeral => {
            return (
              <FuneralPlan
                key={funeral.id}
                price={funeral.price}
                coffin={funeral.coffin}
                transporation={funeral.choiceOfTime}
                processionAndFuneral={funeral.processionAndFuneral}
                limounies1={funeral.limounies1}
                limounies2={funeral.limounies2}
                thirdPartyCost={funeral.thirdPartyCost}
              />
            );
        })
        return (
          <div className="Funeral">
            <div className="IntroText">
              <h1>Compare Funeral Plans and Buy online</h1>
              <p>
                Everyone has different needs – and we provide a range of funeral
                plans designed to meet your requirements at a price you can
                afford.
              </p>
            </div>
            <div className="FuneralPlans">
                  <table classNam="planTable" style={{ width: "100%" }}>
                    <tr>
                      <th>Price</th>
                      <td>2895</td>
                      <td>3495</td>
                      <td>3850</td>
                      <td>4099</td>
                    </tr>
                    <tr>
                      <th>Coffin</th>
                      <td>Basic</td>
                      <td>Simple</td>
                      <td>High Quality</td>
                      <td>Superior</td>
                    </tr>
                    <tr>
                      <th>
                        Transportation of the deceased to the funeral director’s
                        premises within 25 miles
                      </th>
                      <td>Duiring working hours</td>
                      <td>Duiring working hours</td>
                      <td>24 hours</td>
                      <td>24 hours</td>
                    </tr>
                    <tr>
                      <th>No</th>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th>
                        Funeral procession to funeral location (fees and costs
                        of a service at a separate location not included)
                      </th>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <th>Limousines</th>
                      <td>No</td>
                      <td>No</td>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>An allowance included for third party costs</th>
                      <td>800</td>
                      <td>1100</td>
                      <td>1100</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <th>
                        A list provided to the family of mourners who sent
                        flowers
                      </th>
                      <td>Bill Gates</td>
                      <td>Bill Gates</td>
                      <td>555 77 854</td>
                      <td>555 77 855</td>
                    </tr>
                  </table>
                </div>
              </div>
        );
    }
};