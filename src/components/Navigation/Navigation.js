import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './NavigationPage.scss'


const Navigation = () => {
  return (
    <div>
        <nav className='nav'>
        <Link to='/' className='logo'>LG</Link>    
        <ul> 
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/users'>Users</CustomLink>
            <CustomLink to='/posts'>Posts</CustomLink>
            <CustomLink to='/albums'>Albums</CustomLink>  
        </ul>
        </nav>
    </div>
  )
}

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

export default Navigation