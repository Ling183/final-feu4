import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className='video-wrapper'>
        <Link className='video-link' to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDEMt6MUSQI0t_Ts2EDUDWGRhQ&start_radio=1&ab_channel=RickAstley'} target='_blank'>Press me!</Link>
      </div>
      <p className='recomendation'>(but I don't recommend it...)</p>
    </div>
  )
}

export default HomePage