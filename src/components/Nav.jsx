import React from 'react';
import Logo from "./Logo";


const Nav = ({children}) => {

    return (
    <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
  )
}

export default Nav
