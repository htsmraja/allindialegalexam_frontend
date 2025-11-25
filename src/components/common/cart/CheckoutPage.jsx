import React from 'react'
import CommonLayout from '../../common_for_website/CommonLayout'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <>
      <div className='innerPageBx'>
        <CommonLayout>

          {/* page header start */}
          <nav className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Checkout Page</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <section className="container checkout-block" style={{paddingTop:'50px'}}>
            {/* checkout form */}
            <form action="#" className="checkout-form">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h2>Billing Details</h2>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            First Name <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            Last Name <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">Company Name</span>
                      <input type="text" className="element-block form-control" />
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            Email Address <span className="required">*</span>
                          </span>
                          <input type="email" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            Phone <span className="required">*</span>
                          </span>
                          <input type="tel" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">
                        Country <span className="required">*</span>
                      </span>
                      <select
                        data-placeholder="Country"
                        className="form-control"
                      >
                        <option value={0}>England</option>
                        <option value={0}>England</option>
                        <option value={0}>England</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">
                        Address <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="element-block form-control"
                        placeholder="Street address"
                      />
                      <input
                        type="text"
                        className="element-block form-control"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">
                        Town / City <span className="required">*</span>
                      </span>
                      <input type="text" className="element-block form-control" />
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            State / Country <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            Postcode / ZIP <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sm" className="custom-check-wrap fw-normal font-lato">
                      <input type="checkbox" id="sm" className="customFormReset" />
                      <span className="fake-label element-block">
                        Ship to a different?
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <label
                    htmlFor="sd"
                    className="custom-check-wrap font-lato title-check element-block"
                  >
                    <input type="checkbox" id="sd" className="customFormReset" />
                    <span className="fake-label element-block">
                      Ship to a different address?
                    </span>
                  </label>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            First Name <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            Last Name <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">Company Name</span>
                      <input type="text" className="element-block form-control" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">
                        Country <span className="required">*</span>
                      </span>
                      <select
                        data-placeholder="Country"
                        className="form-control"
                      >
                        <option value={0}>England</option>
                        <option value={0}>England</option>
                        <option value={0}>England</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">
                        Address <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="element-block form-control"
                        placeholder="Street address"
                      />
                      <input
                        type="text"
                        className="element-block form-control"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">
                        Town / City <span className="required">*</span>
                      </span>
                      <input type="text" className="element-block form-control" />
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            State / Country <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label className="element-block fw-normal font-lato">
                          <span className="element-block">
                            Postcode / ZIP <span className="required">*</span>
                          </span>
                          <input type="text" className="element-block form-control" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="element-block fw-normal font-lato">
                      <span className="element-block">Town / City</span>
                      <textarea
                        className="form-control element-block"
                        defaultValue={""}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <h2>Your Order</h2>
              <div className="table-wrap">
                {/* order data table */}
                <table className="table order-data-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wirebound Notebook x 2</td>
                      <td>
                        <strong className="price">$138.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Compact Stabler x 1</td>
                      <td>
                        <strong className="price">$19.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Wooden Pencil Yellow x 1</td>
                      <td>
                        <strong className="price">$22.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-dark">Subtotal</span>
                      </td>
                      <td>
                        <strong className="price">$105.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-dark">Shipping</span>
                      </td>
                      <td>
                        {/* radio list */}
                        <ul className="list-unstyled radio-list">
                          <li>
                            <input
                              type="radio"
                              className="customFormReset"
                              id="raddf01"
                              name="kknjb"
                              defaultChecked=""
                            />
                            <label
                              htmlFor="raddf01"
                              className="custom-radio-wrap fw-normal"
                            >
                              Free Shipping
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              className="customFormReset"
                              id="rad0asd1"
                              name="kknjb"
                              defaultChecked=""
                            />
                            <label
                              htmlFor="rad0asd1"
                              className="custom-radio-wrap fw-normal"
                            >
                              Flat Rate: £10.00
                            </label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-dark">Total</span>
                      </td>
                      <td>
                        <strong className="price">$105.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* confirmation box */}
              <div className="confirmation-box">
                {/* radio list */}
                <ul className="list-unstyled radio-list">
                  <li>
                    <input
                      type="radio"
                      className="customFormReset"
                      id="rad01"
                      name="paym"
                      defaultChecked=""
                    />
                    <label htmlFor="rad01" className="custom-radio-wrap fw-normal">
                      Free Shipping
                    </label>
                    <div className="m-descr">
                      <p>
                        Make your payment directly into our bank account. Please use your
                        Order ID as the payment reference. Your order won’t be shipped
                        until the fun have cleared in our account.
                      </p>
                    </div>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="customFormReset"
                      id="rad02"
                      name="paym"
                      defaultChecked=""
                    />
                    <label htmlFor="rad02" className="custom-radio-wrap fw-normal">
                      PayPal{" "}
                    </label>
                    <img
                      src="./assets/images/payment-method.png"
                      alt="payment-method"
                      className="hidden-xs"
                    />
                    <strong className="text-q font-lato fw-normal">
                      <Link>What is PayPal?</Link>
                    </strong>
                  </li>
                </ul>
                <hr className="sep" />
                <div className="text-right">
                  <button
                    type="submit"
                    className="btn btn-warning btn-theme font-lato fw-bold text-uppercase"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </section>
          {/* page body part end */}

        </CommonLayout>
      </div>
    </>
  )
}

export default CheckoutPage