import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../../components/MainTitle/MainTitle';
import './PostsPage.scss'

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
    <div >
      <MainTitle text='Posts' />
      <div className='posts-wrapper'>
         {posts && (
        <ul>
          {posts.map((post, index) => (
            <li className='posts-element' key={index}>
              {/* <div className='link-wrapper'> */}
                <Link to={'/posts/' + post.id}>{post.title}</Link>
              {/* </div> */}
            </li>
          ))}
        </ul>
      )}
      </div>
     
    </div>
  )
}

export default PostsPage