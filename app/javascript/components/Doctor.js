import React from "react";


const Doctor = ( {doctor}) => {
  const {first_name, last_name, specialty, id} = doctor;
  return (
    <>
      <h1>Dr.{last_name}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments`}>Appointments</a>
      <br />
      <a href={`/doctors/${id}`} data-method="delete">Delete</a>
    </>
  )


}

export default Doctor;