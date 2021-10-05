import React from 'react';
import data from './data.json';
import Modal from './modal';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      istrue:false
    };
  }
  handleModel = (title) => {
    this.setState({
      show: title,
      istrue:true
    });
  };

  showMovie = (title) => {
      if(title){}
      <Modal title={this.state.show} />;
      console.log(this.state.show)
  };
  render() {
    // let movie = data.map(movie => movie);
    return (
      <div className="flex">
        {data.map((movie) => (
          <div className="box" key={movie.Title}>
            <img src={movie.Images} alt={movie.Images} className="img" />
            <h2>{movie.Title}</h2>
            <h3>{movie.Released}</h3>
            <button
              className="btn"
              onClick={() => this.handleModel(movie.Title)}
            >
              More Info
            </button>
            {this.showMovie(this.state.istrue)}
          </div>
         
        ))}
      </div>
    );
  }
}

export default MovieList;
