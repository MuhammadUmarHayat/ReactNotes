
import Patient from '../components/Patient';
import React from "react";
import FavoriteColor from '../components/FavoriteColor';
import HobbiesList from '../components/HobbiesList';


function calculateAge() 
{
  return 37;  // Directly returning the result
}

//event
const valid = (name) => 
{
  alert(name +" is a Valid Patient ");
}
function isAdult(age)
{
if(age<18)
{
return <>Minor</> 
}
else
{
  return  <>Adult</>  
}
}


function PatientDetails() 
{
  const hobbies = ['cricket', 'football', 'tennis'];
  const info = { 
    name: "Zainab", 
    gender: "female", 
    age: calculateAge(), 
    nature: isAdult(16), 
    hobbies: <HobbiesList hobbies={hobbies} /> 
  };
  return (
    <div>
      <h1 className="text-center my-5">Patient Information</h1>
      {/* <Patient name="Zainab" gender="female" bra="38D" /> */}
      <Patient {...info} />
      {/* <button onClick= {valid}>check validity!</button> */}
      <button onClick= {() => valid("Zainab")}>check validity!</button>
      <FavoriteColor />
    </div>
  );
}

export default PatientDetails;
