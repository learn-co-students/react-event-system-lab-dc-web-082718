// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  getInput = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input
          type="password" onKeyUp={this.getInput}
        />
      </div>
    )
  }
}

export default Keypad;
