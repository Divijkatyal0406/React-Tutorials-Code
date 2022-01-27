import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {
  render() {
      const {count,incCount}=this.props
    return <div>
        <h2 onMouseOver={incCount}>Hovered {count} times</h2>
    </div>;
  }
}

export default UpdatedComponent(HoverCounter,2);
