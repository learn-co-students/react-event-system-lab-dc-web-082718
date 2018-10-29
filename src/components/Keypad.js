// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  render(){
    return(
      <div className = "keypad">
          <input type = "password" onKeyUp = {this.handKeyUp}></input>
      </div>
    )
  }

  handKeyUp = (e) =>{
    console.log("Entering password...")
  }
}

export default Keypad
