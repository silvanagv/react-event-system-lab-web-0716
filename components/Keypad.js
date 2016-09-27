const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super()

    this.typeMessage = this.typeMessage.bind(this)
  }
  typeMessage() {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.typeMessage} />
      </div>
    )
  }
}

module.exports = Keypad
