import React from 'react';

const Users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <a href="/users/new">Add a User</a>
      <br />
      {/* <h2>{ users.length <= 0 ? "No Users" : "" }</h2>  */}
      { 
        users.map((user) => (
          <div>
          <a href={`/users/${user.id}`}>{user.first_name} {user.last_name}</a>
          {' '}

          <a href={`/users/${user.id}/edit`}>Edit</a>
            {' '}
          <a href={`/users/${user.id}`} data-method="delete">Delete</a>
          </div>
        ))
      }
    </>
  )
}

export default Users;