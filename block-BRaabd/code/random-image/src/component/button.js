function Button(props) {
  return <button type="submit" onClick={props.click}>{props.name}</button>;
}

export default Button;
