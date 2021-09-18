import React from 'react';

const Users = ({ users }) => {
  return (
    <>
      <h1>Welcome new Patient</h1>
      <a href="/users/new">New User</a>
      { 
        users.map( (user) => (
          <div>
            <h5>{user.name}</h5>
            <a href={`/users/${user.id}`}>Show</a>
            {' '}
            <a href={`/users/${users.id}/edit`}>Edit</a>
            {' '}
            <a 
              href={`/users/${user.id}`} 
              data-method="delete"
            >
              Delete
            </a>
          </div>
        ))
      }
    </>
  )
}

export default Users;