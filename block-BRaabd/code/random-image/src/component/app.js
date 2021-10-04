import Button from './button';
import React from 'react';
import basketball from '../assets/basketball.jpg';
import cricket from '../assets/cricket.jpg';
import laptop from '../assets/laptop.jpg';
import phone from '../assets/phone.jpg';
import pubg from '../assets/pubg.jpeg';
import tiger from '../assets/tiger.jpg';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleBasketball = () => {
    this.setState({
      value: basketball,
    });
  };

  handleCricket = () => {
    this.setState({
      value: cricket,
    });
  };

  handlelaptoop = () => {
    console.log('hrllo');
    this.setState({
      value: laptop,
    });
  };

  handlePhone = () => {
    console.log('hrllo');
    this.setState({
      value: phone,
    });
  };

  handlePubg = () => {
    console.log('hrllo');
    this.setState({
      value: pubg,
    });
  };

  handleTiger = () => {
    console.log('hrllo');
    this.setState({
      value: tiger,
    });
  };

  render() {
    return (
      <center>
        <Button name="basketball" click={this.handleBasketball} />
        <Button name="cricket" click={this.handleCricket} />
        <Button name="laptop" click={this.handlelaptoop} />
        <Button name="phone" click={this.handlePhone} />
        <Button name="pubg" click={this.handlePubg} />
        <Button name="tiger" click={this.handleTiger} />
        <img src={this.state.value} alt={this.state.value} className="image" />
      </center>
    );
  }
}

export default App;
