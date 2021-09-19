import React from 'react';

const Navbar = () => (

  <nav>
    <ul>
      <li>
        <a href = "/appointments">Appointments</a>
      </li>
      <li>
        <a href="/appointments/new">New Appointment</a>
      </li>
      <li>
        <a href ="/users">Users</a>
      </li>
      <li>
        <a href ="/users/new">New User</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;