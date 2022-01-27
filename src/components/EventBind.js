import React, { Component } from 'react';

 class EventBind extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:'hello'
       }

       this.ChangeMessage=this.ChangeMessage.bind(this)
     }

    ChangeMessage(){

        this.setState({
            message:'Good Bye'
        })

    }

    render() {
        return <div>
            <div>{this.state.message}</div>
            <button onClick={this.ChangeMessage}>Click</button>
        </div>;
  }
}

export default EventBind