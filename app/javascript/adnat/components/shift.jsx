import React from 'react';

const Shift = (props) => {
  return (
    <tr>
      <td>{ props.user_id }</td>
      <td>{ props.start }</td>
      <td>{ props.start }</td>
      <td>{ props.finish }</td>
      <td>{ props.breakLength }</td>
      <td>Hours Worked</td>
      <td>$</td>
    </tr>
  );
};

export default Shift;
