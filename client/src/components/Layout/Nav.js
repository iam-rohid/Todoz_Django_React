import React from 'react'

class Nav extends React.Component{
  render() {
    return (
      <nav id="nav">
        <div className="nav-logo">
          <a href="/">Todoz</a>
        </div>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="#">Tasks</a></li>
        </ul>
        <ul className="nav-links">
          <li><a href="#">Log in</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>
    )
  }
}
export default Nav