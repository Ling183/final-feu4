import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AlbumsPage = () => {
  const [albums, setAlbum] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/albums')
      .then(res => res.json())
      .then(albumData => {
        setAlbum(albumData);
      })
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      {albums && (
        <ul>
          {albums.map((album, index) => <li key={index}><Link to={'/albums/' + album.id}>{album.title}</Link></li>)}
        </ul>
      )}
    </div>
  )
}

export default AlbumsPage