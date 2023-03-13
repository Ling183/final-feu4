import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './PostPage.scss'

const PostPage = () => {
  const { postId } = useParams()
  const [post, setPost] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${postId}`)
    .then(res => {
      setPost(res.data)
    })
 
  }, [])


  return (
    <div>
        <h1>{post.title}</h1>
        <div className='post-text'>
          <p>{post.body}</p>
        </div>
        
    </div>
  )
}

export default PostPage