import React from 'react'
import axios from 'axios'

class AddTask extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      important: false
    }
  }
  
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const url = "http://localhost:8000/tasks/"
    axios.post(url, this.state)
    .then((res) => {
      this.props.reloadList(e)
    })
    .catch((err) => {
      console.log(err)
    })
    this.setState({
      title: '',
      important: false,
    })
  }
  
  render(){
    return (
      <form className="add-task-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} placeholder="Add todo item" autoComplete="false" autoFocus={true} maxLength="255" />
        <input type="submit" value="+" />
      </form>
    )
  }
}

export default AddTask