import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {
  render() {
      //destructuring props
    const {count,incCount}=this.props
    return <div>
        <button onClick={incCount}>{this.props.name} Click {count} times</button>
    </div>;
  }
}

export default UpdatedComponent(ClickCounter,5);
