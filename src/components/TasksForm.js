import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        title: "",
        description: ""
    }
    submit = e => {
        e.preventDefault()
        this.props.addTask(this.state.title, this.state.description)
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        return <form onSubmit={this.submit} >
            <input 
                type="text" 
                placeholder="Write a task"
                name="title"
                value={this.state.title}
                onChange={this.change}
            /> <br/>
            <textarea 
                placeholder="Write a Description"
                name="description"
                value={this.state.description}
                onChange={this.change}
            >
            </textarea>
            <button>Send data</button>
        </form>
    }
}