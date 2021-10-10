import React from 'react';
import data from '../data.json';
import Cart from '../component/cart';
import Header from '../component/Header';
import SortOfSizes from './Sortfilter';
import '../style.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      sizes: [],
      cart: [],
      checked: false,
      name: '',
      price: null,
    };
  }
  lowTohigh = () => {
    this.setState({
      products: [...data.products].sort((a, b) => a.price - b.price),
    });
  };
  highTolow = () => {
    this.setState({
      products: [...data.products].sort((a, b) => b.price - a.price),
    });
  };
  handleClick = ({ target }) => {
    let { name, checked } = target;
    if (checked) {
      let product = data.products.filter((product) => {
        return product.availableSizes.includes(name);
      });
      let arr = this.state.sizes.concat(product);
      this.setState({ sizes: arr });
      this.setState({
        products: arr,
        checked: checked,
        name: name,
      });
    } else {
      let product = data.products.filter((product) => {
        return product.availableSizes.includes(name);
      });
      this.state.sizes.splice(product, product.length);
      this.setState({
        products:
          this.state.sizes.length === 0 ? data.products : this.state.sizes,
        checked: checked,
        name: name,
      });
    }
  };
  addTocart = (product) => {
    let arr = this.state.cart;
    arr.push(product);
    console.log(this.state.cart);
    let price = this.state.cart.reduce((acc, cv) => {
      acc = acc + cv.price;
      return acc;
    }, 0);
    this.setState({
      cart: arr,
      price: price,
    });
    console.log(price);
  };

  render() {
    return (
      <>
        <Header low={this.lowTohigh} high={this.highTolow} />
        <div className="flex">
          <div className="col-20">
            <SortOfSizes
              click={this.handleClick}
              checked={this.state.checked}
              name={this.state.name}
            />
          </div>

          <div className="flex col-60">
            {this.state.products.map((product) => (
              <div className="col-30" key={product.id}>
                <img
                  src={`static/products/${product.images}`}
                  alt={product.images}
                />
                <center>
                  <h2>{product.title}</h2>
                  <h3>
                    <span>$</span>
                    {product.price}
                  </h3>
                </center>
                <button
                  onClick={() => this.addTocart(product)}
                  className="cart-btn"
                >
                  Add To cart
                </button>
              </div>
            ))}
          </div>
          <div className="col-20">
            <Cart price={this.state.price} cart={this.state.cart} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
