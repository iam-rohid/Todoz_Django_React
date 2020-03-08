import React from 'react'

class Sidebar extends React.Component{
  render() {
    return (
      <div id="sidebar">
        <ul className="sidebar-main-menu">
          <li className="active"><a href="#">Today</a></li>
          <li><a href="#">All Tasks</a></li>
          <li><a href="#">My custom list</a></li>
        </ul>
      </div>
    )
  }
}
export default Sidebar