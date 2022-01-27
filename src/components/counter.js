import React, { Component } from 'react';

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    //Passing object
    // incCount(){
    //     this.setState({
    //         count:this.state.count+1
    //     },()=>{console.log(this.state.count)})
    // }
    
    //Passing as function => better when result depends on prev state
    incCount(){
        this.setState(prevState =>({
            count:prevState.count+1
        }))
    }


  render() {
    return <div>
        <h1>counter - {this.state.count}</h1>
        <button onClick={()=>this.incCount()}>Increment</button>
    </div>
  }
}

export default counter;
