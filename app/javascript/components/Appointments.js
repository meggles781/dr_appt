import React, { useDebugValue } from "react";


const Appointments = ({ doctor, users}) => {
  const displayUser = (id) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name 
      }
    })
    return fullName
  }

  return (
    <>

    <h1> Dr.{doctor.first_nane} {doctor.last_name}</h1>

    </>
  )
}

export default Appointments;