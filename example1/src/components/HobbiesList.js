

import React from "react";

function HobbiesList({ hobbies }) 
{
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}
export default HobbiesList;