import React from 'react';

const funeral = props =>
{
 let limounises1, limounises2;
if (props.limounises1 === true) {
  limounises1 = "Yes";
} else {
  limounises1 = "No";
}
if (props.limounises2 === true) {
  limounises2 = "Yes";
} else {
  limounises2 = "No";
}
console.log(props.limounises1);
console.log(limounises1, limounises2);
  return (
      <tr>
        <td>{props.price} </td>
        <td>{props.coffin}</td>
        <td>{props.choiceOfTime}</td>
        <td>{props.processionAndFuneral}</td>
        <td>{limounises1}</td>
        <td>{limounises2}</td>
        <td>{props.thirdPartyCost}</td>
      </tr>
  );
} 

export default funeral;