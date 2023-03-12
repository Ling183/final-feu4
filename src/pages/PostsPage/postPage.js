import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

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
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default PostPage