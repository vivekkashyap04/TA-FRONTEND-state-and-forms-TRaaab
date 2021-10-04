import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      steps: 1,
      max: 10000,
    };
  }
  handleIncrement = () => {
    this.setState({
      value:
        this.state.value + this.state.steps > this.state.max
          ? this.setState({ value: 0 })
          : this.state.value + this.state.steps,
    });
  };
  handleDecrement = () => {
    this.setState({
      value:
        this.state.value > 0
          ? this.state.value - this.state.steps
          : this.setState({ value: 0 }),
    });
  };
  handleReset = () => {
    this.setState({
      value: 0,
      steps: 1,
      max: 10000,
    });
  };

  render() {
    return (
      <center>
        <h2>{this.state.value}</h2>
        <div>
          <h3>steps</h3>
          <button onClick={() => this.setState({ steps: 5 })}>5</button>
          <button onClick={() => this.setState({ steps: 10 })}>10</button>
          <button onClick={() => this.setState({ steps: 15 })}>15</button>
        </div>
        <div>
          <h3>max</h3>
          <button onClick={() => this.setState({ max: 15 })}>15</button>
          <button onClick={() => this.setState({ max: 50 })}>50</button>
          <button onClick={() => this.setState({ max: 100 })}>100</button>
        </div>

        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </center>
    );
  }
}

export default App;
