import React from 'react'
import axios from 'axios'
import Tasks from '../Task/Tasks'
import AddTask from '../Task/AddTask'

class Container extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      loading: true,
      tasks: []
    }
  }

  componentDidMount(){
    const url = "http://localhost:8000/tasks/"
    axios.get(url)
      .then( res => {
        this.setState({ 
          loading: false,
          tasks: res.data
         })
      })
      .catch(err => {
        console.error(err)
      })
  }

  reloadList = (e) => {
    const url = "http://localhost:8000/tasks/"
    axios.get(url)
      .then( res => {
        this.setState({ 
          loading: false,
          tasks: res.data
         })
      })
      .catch(err => {
        console.error(err)
      })
  }

  dlttask(e, id){
    const url =  `http://localhost:8000/tasks/${id}`
    axios.delete(url)
    .then(res => {
      // console.log('res', res)
      this.reloadList(e)
    })
    .catch(err => {
      console.error('err', err)
    })
  }

  taskCompleted = (e, task) =>{
    const newTask = task
    newTask.completed = !task.completed
    const url =  `http://localhost:8000/tasks/${task.id}/`
    axios.put(url,newTask)
    .then(res=>{
      this.reloadList(e)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="list-title">
          <h1>Today</h1>
          <p>Saturday March 7, 2020</p>
        </div>
        <Tasks tasks={this.state.tasks} loading={this.state.loading} dlttask={this.dlttask.bind(this)} taskCompleted={this.taskCompleted.bind(this)} />
        <AddTask reloadList={this.reloadList.bind(this)} />
      </div>
    )
  }
}
export default Container