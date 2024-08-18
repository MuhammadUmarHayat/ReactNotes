import React from 'react';


   function Patient(props) 
   {
     return (
      <>
      <h2>Patient name: {props.name}</h2>
      <h2>Patient Gender: {props.gender}</h2>
      <h2>Patient Age: {props.age}</h2>
      <h2>Patient is: {props.nature}</h2>
      <h2>Patient Hobbies:</h2>
      {props.hobbies}
    </>
     );
    }
    export default  Patient;