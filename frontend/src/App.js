import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Ping...' };
  }

  componentDidMount() {
    fetch('/api/ping')
      .then(res => res.json())
      .then(res => this.setState({ message: res }))
  }

  render() {
    const { message } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <p>{ message }</p>
        </header>
      </div>
    );
  }
}

export default App;
