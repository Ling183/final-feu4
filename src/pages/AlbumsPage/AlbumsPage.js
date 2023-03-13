import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../../components/MainTitle/MainTitle';

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
    <div className='album-wrapper'>
      <MainTitle text='Albums' />
      {albums && (
        <ul>
          {albums.map((album, index) => <li key={index}><Link to={'/albums/' + album.id}>{album.title}</Link></li>)}
        </ul>
      )}
    </div>
  )
}

export default AlbumsPage