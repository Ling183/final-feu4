import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './UserPage.scss'


const UserPage = () => {
  const { userId } = useParams()
  const [user, setUser] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${userId}`)
      .then(res => {
        setUser(res.data)
      })

  }, [])

  return (
    <div className='main-user-container'>
      {user && (
        <div>
          <h1>{user.name} {user.surname}</h1>
          <div className='user-container'>
            <div className='info-wrapper'>
              <p className='content'><strong>User name: </strong>"{user.username}"</p>
              <p className='content'><strong>Email: </strong>{user.email}</p>
              <p className='content'><strong>Phone: </strong>{user.phone}</p>
            </div>
            <div className='user-img-wrapper'>
              <img src={user.url} alt='pic' />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserPage