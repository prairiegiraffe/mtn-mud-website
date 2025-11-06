 
import { useState } from 'react'; 
import { Link } from 'react-router-dom';

const CartArea = () => {
  const initialCartItems = [
    {
      id: 1,
      name: 'Hardware Toolbox',
      price: 18,
      quantity: 1,
      image: 'assets/img/product/product_1_1.jpg'
    },
    {
      id: 2,
      name: 'Drill Machine',
      price: 18,
      quantity: 1,
      image: 'assets/img/product/product_1_2.jpg'
    },
    {
      id: 3,
      name: 'Claw Hammer',
      price: 18,
      quantity: 1,
      image: 'assets/img/product/product_1_3.jpg'
    }
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (id : number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (id : number) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemove = (id : number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // const handleInputChange = ({id, value} :  any) => {
  //   setCartItems(cartItems.map(item =>
  //     item.id === id ? { ...item, quantity: value } : item
  //   ));
  // };

  const handleInputChange = ({id, value} :  any) => {
  setCartItems(cartItems.map(item =>
    item.id === id ? { ...item, quantity: value } : item
  ));
};


  const handleUpdateCart = (event: any) => {
    event.preventDefault();
    console.log('Cart updated', cartItems);
  };

  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="space-top space-extra-bottom">
      <div className="container">
        <form action="#" className="woocommerce-cart-form" onSubmit={handleUpdateCart}>
          <table className="cart_table">
            <thead>
              <tr>
                <th className="cart-col-image">Image</th>
                <th className="cart-col-productname">Product Name</th>
                <th className="cart-col-price">Price</th>
                <th className="cart-col-quantity">Quantity</th>
                <th className="cart-col-total">Total</th>
                <th className="cart-col-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr className="cart_item" key={item.id}>
                  <td data-title="Product">
                    <Link className="cart-productimage" to="/shop-details">
                      <img width="91" height="91" src={item.image} alt="Image" />
                    </Link>
                  </td>
                  <td data-title="Name">
                    <Link className="cart-productname" to="/shop-details">
                      {item.name}
                    </Link>
                  </td>
                  <td data-title="Price">
                    <span className="amount">
                      <bdi>
                        <span>$</span>{item.price}
                      </bdi>
                    </span>
                  </td>
                  <td data-title="Quantity">
                    <div className="quantity">
                      <button className="quantity-minus qty-btn" onClick={() => handleDecrement(item.id)}>
                        <i className="ri-subtract-line"></i>
                      </button>
                      <input
                        type="number"
                        className="qty-input"
                        value={item.quantity}
                        min="1"
                        max="99" 
                        onChange={(e) => handleInputChange({ id: item.id, value: e.target.valueAsNumber })}
                        />
                      <button className="quantity-plus qty-btn" onClick={() => handleIncrement(item.id)}>
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </td>
                  <td data-title="Total">
                    <span className="amount">
                      <bdi>
                        <span>$</span>{item.price * item.quantity}
                      </bdi>
                    </span>
                  </td>
                  <td data-title="Remove">
                    <Link to="#" className="remove" onClick={() => handleRemove(item.id)}>
                      <i className="ri-delete-bin-6-line"></i>
                    </Link>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={6} className="actions">
                  <button type="submit" className="btn">
                    Update cart
                  </button>
                  <Link to="/shop" className="btn style-border3">
                    Continue Shopping
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="row justify-content-end">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <h2 className="h4 summary-title fw-semibold">Cart Totals</h2>
            <table className="cart_totals">
              <tbody>
                <tr>
                  <td>Cart Subtotal</td>
                  <td data-title="Cart Subtotal">
                    <span className="amount">
                      <bdi>
                        <span>$</span>{cartSubtotal}
                      </bdi>
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="order-total">
                  <td>Order Total</td>
                  <td data-title="Total">
                    <strong>
                      <span className="amount">
                        <bdi>
                          <span>$</span>{cartSubtotal}
                        </bdi>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="wc-proceed-to-checkout mb-30">
              <Link to="/checkout" className="btn btn-fw">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartArea;
