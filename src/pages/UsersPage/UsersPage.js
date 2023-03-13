import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../../components/MainTitle/MainTitle'
import './UsersPage.scss'

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
    <>
    <MainTitle text='Users' />
    <div className='container'>
      
      <div className='users-wrapper'>
        <ul className='users-list'>
          {users.map((user, index) => (
            <li key={index} className='users-elements'>
              <Link className='user-link' to={'/users/' + user.id}>{user.name}</Link>
            </li>
          ))}
        </ul>

      </div>
      <div className='img-wrapper'>
        <img src='https://images.unsplash.com/photo-1605462398512-51e939d2d21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3IlMjBvcmFuZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60' alt='orange' />
      </div>
    </div>
    </>
  )
}

export default UsersPage