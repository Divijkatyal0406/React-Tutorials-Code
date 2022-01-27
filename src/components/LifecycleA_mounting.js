import React, { Component } from 'react';
import LifeCycleB from './LifecycleB_mounting';

class LifecycleA extends Component {
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
    render() {
    console.log('LifecycleA rendered')
    return (
        <div>
            <div>LifeCycle A</div>
            <LifeCycleB></LifeCycleB>
        </div>
    );
  }
}

export default LifecycleA;
