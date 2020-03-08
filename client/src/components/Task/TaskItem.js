import React from 'react'

class TaskItem extends React.Component {
  render() {
    const { title, id, completed, important } = this.props.data
    return(
      <li key={this.props.data.id}>
        <button className="completebtn" onClick={(e) => {this.props.taskCompleted(e, this.props.data)}} >
          <div className="inside-circle" style={{ width: completed ? "80%" : "0", height: completed ? "80%" : "0"}}>
          </div>
        </button>
        <p style={{ textDecoration: completed ? 'line-through' : 'none'}}>{title}</p>
        <button className="dltbtn" onClick={(e) => this.props.dlttask(e, id)}>X</button>
      </li>
    )
  }
}
export default TaskItem