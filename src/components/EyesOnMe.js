// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component{

  focused = () => {
    console.log("Good!")
  }

  notFocused = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <div><button onFocus={this.focused} onBlur={this.notFocused}>Watchu looking at</button></div>
    )
  }
}
