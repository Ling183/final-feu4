import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(postsData => {
        setPosts(postsData);
      })
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts && (
        <ul>
          {posts.map((post, index) => <li key={index}><Link to={'/posts/' + post.id}>{post.title}</Link></li>)}
        </ul>
      )}
    </div>
  )
}

export default PostsPage