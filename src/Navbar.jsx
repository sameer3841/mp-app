import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export const Navbar = () => {

    const path = window.location.pathname

  return (
    <nav className='navbar'>
        <Link to="/" className="site-title">Site Name</Link>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/more">More</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}