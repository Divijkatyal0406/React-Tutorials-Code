import React from "react";

//If we would have want to increment count by diff numbers for both so we pass it as parameter

const UpdatedComponent=(OriginalComponent,incNumberBy)=>{
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incCount=()=>{
              this.setState(prevState=>{
                  return {count:prevState.count+incNumberBy}
              })
          }
      render() {
        return <OriginalComponent 
                    count={this.state.count} 
                    incCount={this.incCount}
                    //Passing in remaining props to child components ie HoverCounter and ClickCounter
                    {...this.props}
                >
                </OriginalComponent>;
      }
    }   
    return NewComponent
}

export default UpdatedComponent