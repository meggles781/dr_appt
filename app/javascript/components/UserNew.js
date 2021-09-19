import React from 'react';

const UserNew = ({ user }) => {
  // in case of failed form still save the 
  // users input
  // continue the pattern for all fields
  const { id, first_name, last_name, email, password } = user
  const defaultFirstName = first_name ? first_name : ""
  const defaultLastName = last_name ? last_name : ""
  const defaultEmail =  email ? email : ""
  const defaultPassword = password ? password : ""
  return (
    <>
      <h1>New Uer Form</h1>
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
        <input
          type="text"
          defaultValue={defaultEmail}
          name="user[email]"

          // optional
          required
          placeholder="Email"
        />
        <input
          type="text"
          defaultValue={defaultPassword}
          name="user[password]"

          // optional
          required
          placeholder="Password"
        />
        <button type='submit'>Add New User</button>
      </form>
    </>
  )
}

export default UserNew;