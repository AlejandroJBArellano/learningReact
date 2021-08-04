import tasks from './sample/tasks.json';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Posts from "./components/Posts";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TasksForm";

class App extends Component {
  state = {
    show: true,
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title, 
      description: description,
      id: this.state.tasks.length+1
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({tasks: newTasks})
  }

  render () {
    return (<section>
      <Router>
        <Link to="/">Home</Link> 
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={ _ => <article>
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
          <TaskForm addTask={this.addTask} />
        </article>} />
        <Route path="/posts" component={Posts}/>
      </Router>
    </section>)
  }
}

export default App;