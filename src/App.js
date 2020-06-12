import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    firstName: 'Jose',
    email: '',
    message: ''
  };

  // sendMessage represents form submission method that will trigger when user has filled all the fields and submitted the form
  sendMessage = event => {
    event.preventDefault(); // --> .preventDefault() is called on the event when submitting the form to prevent a browser reload/refresh

    // const data = {
    //   firstName: this.state.firstName,
    //   email: this.state.email,
    //   message: this.state.message
    // };

    const { firstName, email, message } = this.state;
    const data = { firstName, email, message };
    alert(`Message with data: ${JSON.stringify(data, null, 2)} was sent.`);
  };

  changeName = event => {
    const { value } = event.target;
    this.setState({
      firstName: value
    });
  };

  handleInputChange = event => {
    const { value } = event.target;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  };

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.sendMessage}>
          <input
            type='text'
            placeholder='Name'
            value={this.state.firstName}
            name='firstName'
            onChange={this.changeName}
            // onChange={this.handleInputChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <textarea placeholder='Message' name='message' value={this.state.message} onChange={this.handleInputChange} />
          <span>Message being sent by {this.state.firstName}</span>
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default App;
