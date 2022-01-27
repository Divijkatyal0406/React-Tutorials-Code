//callback refs implememtation
import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)

      this.cbref=null
      this.setcbrf=(element)=>{
          this.cbref=element
      }
    }
    
    componentDidMount(){
        if(this.cbref){
            this.cbref.focus()
        }
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return <div>
        <input type="text" ref={this.setcbref}></input>
        <button onClick={this.clickHandler}>Submit</button>
    </div>;
  }
}

export default RefsDemo;
