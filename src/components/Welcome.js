import { Component } from "react/cjs/react.production.min";
import react from "react";

class Welcome extends Component {
    //Destructuring props
    render() { 
        //Destructuring props
        // const {name}=this.props
        
        return (
        <div>
            <h1>Hello {this.props.name}!</h1>
        </div>
        )
    }
}
 
export default Welcome;