import React, {Component} from 'react'
import TaskItem from './TaskItem'



class Tasks extends Component{
  
  render(){
    return(
      <ul className="tasks">
        {
          this.props.loading || !this.props.tasks ?
          <li className="loading">Loading....</li> :
          this.props.tasks.map(task => <TaskItem data={task} dlttask={this.props.dlttask.bind(this)} taskCompleted={this.props.taskCompleted.bind(this)}  />)
        }
      </ul>
    )
  }
}
export default Tasks