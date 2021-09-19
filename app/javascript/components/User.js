import React from 'react';

const User = ({ user }) => {
  const { first_name, last_name, email, password, id } = user
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      <br />
      <a href="/">Back</a>
      <br />
      <a href={`/Users/${id}/appointments`}>Appointments</a>
    </>
  )
}

export default User;