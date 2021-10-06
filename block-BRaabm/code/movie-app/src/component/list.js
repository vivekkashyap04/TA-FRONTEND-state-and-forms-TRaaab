import React from 'react';
import data from './data.json';
import Modal from './modal';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      istrue: false,
      activeIndex: null,
    };
  }
  handleModel = (title) => {
    this.setState({
      show: title,
      istrue: true,
    });
  };
  handleActive = (index) => {
    this.setState({
      activeIndex: index,
    });
  };
  handleDeactive = () => {
    this.setState({
      activeIndex: null,
    });
  };

  handleClose = () => {
    this.setState({
      istrue: false,
    });
  };

  render() {
    // let movie = data.map(movie => movie);
    return (
      <div className="flex">
        {data.map((movie, index) => (
          <div
            className="box"
            key={movie.Title}
            onMouseOver={() => this.handleActive(index)}
            onMouseLeave={() => this.handleDeactive}
          >
            <img src={movie.Images} alt={movie.Images} className="img" />
            <h2>{movie.Title}</h2>
            <h3>{movie.Released}</h3>
            {this.state.activeIndex === index ? (
              <button
                className="btn"
                onClick={() => this.handleModel(movie.Title)}
              >
                More Info
              </button>
            ) : 
              ''
            }

            {this.state.istrue ? (
              <Modal click={this.handleClose} title={this.state.show} />
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
