// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  render(){
    return(
      <div className = "EyesOnMe">
        <button onBlur = {this.handleBlur} onFocus = {this.handleFocus} >
          Eyes On Me
        </button>
      </div>
    )
  }
  handleFocus = (e) => {
    console.log("Good!")
  }
  handleBlur = (e) =>{
    console.log('Hey! Eyes on me!')
  }


}

export default EyesOnMe
