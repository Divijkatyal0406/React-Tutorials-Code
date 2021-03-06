import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        axios.post('url',this.state)
        .then(response => {
            console.log(response)
        }).catch( error => {
            console.log(error)
        })
    }
  render() {
      const {userId,title,body}=this.state
    return <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
            </div>
            <button type='submit'>Submit form</button>
        </form>
    </div>;
  }
}

export default PostForm;
