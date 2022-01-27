import React, { Component } from 'react';
import LifeCycleB from './LifecycleB_mounting';

class LifecycleA_update extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'divij'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerived state')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA mounted')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'Divam'
        })
    }
    render() {
    console.log('LifecycleA rendered')
    return (
        <div>
            <div>LifeCycle A</div>
            <button onClick={this.changeState}>Change state</button>
            <LifeCycleB></LifeCycleB>
        </div>
    );
  }
}

export default LifecycleA_update;
