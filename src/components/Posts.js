import React, { Component } from 'react';
import "./Posts.css";

export default class Posts extends Component {
    state={
        posts: []
    }

    async componentDidMount() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        this.setState({posts: data})
    }
    
    render() {
        return <section>
            {
                this.state.posts.map(post => {
                    const {id, body, title} = post
                    return <article key={id}>
                        <h2>{id}. {title}</h2>
                        <p>Description: {body}</p>
                    </article>
                })
            }
        </section>
    }
}
