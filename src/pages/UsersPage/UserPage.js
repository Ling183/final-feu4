import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


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
    <div>
      {user && (
        <div>
          <h1>{user.name} {user.surname}</h1>
          <p>"{user.username}"</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default UserPage