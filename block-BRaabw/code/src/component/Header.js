import React from 'react';
function Header(props) {
  return (
    <div className="header">
        <h1>Shopping Carts</h1>
      <div>
          <button onClick={props.low}>Low To High Price</button>
          <button onClick={props.high}>High To Low Price</button>
      </div>
    </div>
  );
}
export default Header;
