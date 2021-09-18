import React from 'react';

const User = ({ user }) => {
  const { name, id } = user
  return (
    <>
      <h1>{User}</h1>
      <br />
      <a href="/">Back</a>
      <br />
      <a href={`/Users/${id}/appointmetns`}>Topics</a>
    </>
  )
}

export default User;