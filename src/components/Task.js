import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Task.css";

class Task extends Component {
    
    StyleCompleted() {
        return {
            color: this.props.task.done ? "gray" : "yellow",
            textDecoration: this.props.task.done ? "line-through" : "none"
        }
    }
    render() {
        const {task} = this.props, {title, id, description} = task;

        return <article className="card">
            <p style={this.StyleCompleted()}>{title} - {id} - {description}</p>
            <section>
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button onClick={this.props.deleteTask.bind(this, id)} >x</button>
            </section>
        </article>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task