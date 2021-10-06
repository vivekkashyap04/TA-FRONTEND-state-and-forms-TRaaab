import data from './data.json';
function Modal(props) {
  console.log(props.title);
  let movies = data.filter((movie) => movie.Title === props.title);
  return (
    <div className="modal-main">
      <h1>peopld</h1>
      {console.log(movies)}
      <button onClick={props.click}>Close</button>
    </div>
  );
}

export default Modal;
