import { Link } from "react-router-dom";

 
const CheckoutArea = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="shipping-area">
              <h3 className="fw-semibold">Payment Details</h3>
              <form className="checkout-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <img src="/assets/img/payment-method/03.png" alt="#" />
                  </label>
                </div>
                <div className="form-group mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Credit Card
                  </label>
                </div>
                <ul className="footer-currency currency-area">
                  <li>
                    <Link to="#">
                      <img src="/assets/img/payment-method/01.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="/assets/img/payment-method/02.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="/assets/img/payment-method/04.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="/assets/img/payment-method/05.png" alt="img" />
                    </Link>
                  </li>
                </ul>
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Full name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>Expire Date</label>
                      <select className="form-control">
                        <option>April</option>
                        <option>March</option>
                        <option>February</option>
                        <option selected>January</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>Year</label>
                      <select className="form-control">
                        <option>2023</option>
                        <option>2022</option>
                        <option>2020</option>
                        <option selected>2021</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>CCV</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-30 mt-30">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Cash on Delivery
                  </label>
                </div>
                <button type="submit" className="btn">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutArea;
