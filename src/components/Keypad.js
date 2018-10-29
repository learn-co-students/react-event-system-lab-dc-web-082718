import React from 'react'

export default class Keypad extends React.Component{

  handleClick = (event) => {
    console.log("Entering password...")
  }

  render(){
    return (
      <div>
      <input type="password" onKeyUp={this.handleClick} />
      </div>
    )
  }
}
