import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostPage = () => {
    let params = useParams();
    const [post, setPost] = useState(null);


  return (
    <div>
        <h1>{post.title}</h1>
    </div>
  )
}

export default PostPage