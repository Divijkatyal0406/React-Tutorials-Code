import { Component } from "react/cjs/react.production.min";
import react from "react";


class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }
    changeMsg(){
        this.setState({
            message:"Subscribed"
        })
    }
    render() { 
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{
                this.changeMsg()
            }}>Subscribe</button>
        </div>
        )
    }
}
 
export default Message;