import React from "react";


const DoctorNew = ({ doctor }) => {
  const{first_name, last_name, errors} = doctor
  const defaultFirstName = first_name ? first_name : ""
  const defaultLastName = last_name ? last_name : ""
  return (
    <>
    <h1>Add a Doctor </h1>
    { errors && errors }

    <form action='/users' method="post">
      <input
        type="text"
        defaultValue={defaultFirstName}
        name="user[first_name]"

        // optional
        required
        placeholder="First Name"
      />
      <input
        type="text"
        defaultValue={defaultLastName}
        name="user[last_name]"

        // optional
        required
        placeholder="Last Name"
      />
      <button type='submit'>Submit Form</button>
    </form>
  </>
  )


}

export default DoctorNew;