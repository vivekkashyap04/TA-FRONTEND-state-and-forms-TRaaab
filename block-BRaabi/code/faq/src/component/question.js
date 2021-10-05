import React from 'react';
import data from './data';
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  handleShow = (question) => {
    console.log('hello');
    this.setState({
      active: question,
    });
  };
  render() {
    return (
      <>
        <h2>CLosed State</h2>
        <ul>
          {data.map((question) => (
            <li key={question.Q}>{question.Q}</li>
          ))}
        </ul>
        <h2>Open State</h2>
        <ul>
          {data.map((question) => (
            <li key={question.A}>
              <div onClick={() => this.handleShow(question.A)}>
                <h3 className={this.state.active === question.A ? 'active':''}>{question.Q}</h3>
              </div>
              <h4
                className={this.state.active === question.A ? 'show' : 'hidden'}
              >
                {question.A}
              </h4>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Questions;
