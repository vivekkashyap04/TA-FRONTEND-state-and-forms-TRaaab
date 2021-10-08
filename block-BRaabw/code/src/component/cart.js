import React from 'react';
function Cart(props) {
  return (
    <div>
      <h2>Cart</h2>
      {props.cart.map((item) => (
        <div className="flex">
          <div className="col-30">
            <img
              src={`static/products/${item.images}`}
              alt={item.images}
              className="img"
            />
          </div>
          <div className="col-60">
            <h2>{item.title}</h2>
            <h3>
              Item Price:
              <span>$</span>
              {item.price}
            </h3>
          </div>
        </div>
      ))}
      <div>
        {props.price > 0 ? (
          <h3 className="cart-btn1">
            Total Price:<span>$</span>
            {props.price}
          </h3>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Cart;
