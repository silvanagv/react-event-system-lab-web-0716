const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.focusOnMeMessage = this.focusOnMeMessage.bind(this);
    this.focusOffMeMessage = this.focusOffMeMessage.bind(this);
  }

  focusOnMeMessage() {
    console.log('Good!');
  }

  focusOffMeMessage() {
    console.log('Hey! Eyes on me!');
  }
  render() {
    return (
      <button onFocus={this.focusOnMeMessage} onBlur={this.focusOffMeMessage}>
      Eyes on me, please!
      </button>
    )
  }
}

module.exports = EyesOnMe
