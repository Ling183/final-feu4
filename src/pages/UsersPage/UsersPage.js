import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(usersData => {
        setUsers(usersData)
      })
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <ul>
      {users.map((user, index) => (
        <li key={index}>
          <Link to={'/users/' + user.id}>{user.name}</Link>
        </li>
      ))}
      </ul>

    </div>
  )
}

export default UsersPage