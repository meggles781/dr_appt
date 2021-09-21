import React from 'react';

const User = ({ user }) => {
  const { first_name, last_name, email, password, id } = user
  const { first_name, last_name, specialty } = doctor
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      <br />
      <a href="/">Back</a>
      <br />
      <a href={`/Users/${id}/doctors`}>Doctors</a>
      <ul>
            { doctors.map((doctor) => (
              <li>
                <a href={`/doctors/${doctor.id}`}>{doctor.last_name}</a>
              </li>
            ))}
          </ul>
    </>
  )
}

export default User;