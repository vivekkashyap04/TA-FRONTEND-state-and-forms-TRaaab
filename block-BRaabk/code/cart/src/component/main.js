import React from 'react';
import data from './data.json';
import Interface from './interface';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
    };
  }
  handleCategory = (item) => {
    this.setState({
      category: item,
    });
  };

  render() {
    let food;
    let item = data.reduce((acc, cv) => {
      acc.push(cv.category);
      return acc;
    }, []);

    let button = [...new Set(item)];
    if (!this.state.category) {
      food = data;
    } else {
      food = data.filter((item) => item.category === this.state.category);
    }

    return (
      <>
        <center>
            <h1>Menu</h1>
          {button.map((category) => (
            <button
              key={category}
              onClick={() => this.handleCategory(category)}
              className={this.state.category === category ? 'active' : 'btn'}
            >
              {category}
            </button>
          ))}
        </center>
        <Interface data={food} />
      </>
    );
  }
}

export default Main;
