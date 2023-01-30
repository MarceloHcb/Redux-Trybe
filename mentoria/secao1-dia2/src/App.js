import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./App.css"
import { saveTask } from './redux/actions';
class App extends Component {
state = {
  localTask: '',
}
  handleClick = () => {
    const { localTask } = this.state;
    const { dispatch } = this.props;
    dispatch(saveTask(localTask))
  }

  handleChange =({target}) => {
    this.setState({
      localTask: target.value,
    })
  }

  render() {    
    const {  taskList } = this.props;
    return (
      <div className='App'>
      <div>Testando o Redux</div>
      <input type="text"  onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Salvar</button>
      <ul>
        {taskList.map((task, index) =>(
        <li key={index}> {task}</li>
        ))}
      </ul>
      </div>
    )
  }
}

 const mapStateToProps = ( {todoReducer: { task, taskList }} ) => ({
   task,
   taskList,
 })

export default connect(mapStateToProps)(App);
