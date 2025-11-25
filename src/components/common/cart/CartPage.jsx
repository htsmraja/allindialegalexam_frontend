import React from 'react'
import CommonLayout from '../../common_for_website/CommonLayout'
import { Link } from 'react-router-dom'



const CartPage = () => {
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
                <li className="active">Cart Page</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <section className="cart-content-block container">
            {/* cart form */}
            <form className="cart-form">
              <div className="table-wrap">                
                {/* cart data table */}
                <table className="table tab-full-responsive cart-data-table font-lato">
                  <thead className="hidden-xs">
                    <tr>
                      <th className="col01">Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-title="Product" className="col01">
                        <div>
                          <a href="#" className="btn-remove fas fa-times">
                            <span className="sr-only">remove</span>
                          </a>
                          <div className="pro-name-wrap">
                            <div className="alignleft no-shrink hidden-xs">
                              <img
                                src="./assets/images/img79.jpg"
                                alt="image description"
                              />
                            </div>
                            <div className="descr-wrap">
                              <h3 className="fw-normal">Wirebound Notebook</h3>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-title="Price">
                        <span>
                          <strong className="price element-block"> $68.00</strong>
                        </span>
                      </td>
                      <td data-title="Quantity">
                        <div>
                          <div className="quantity">
                            <input
                              type="number"
                              className="form-control"
                              min={1}
                              defaultValue={2}
                            />
                          </div>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span>
                          <strong className="element-block price"> $68.00</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Product" className="col01">
                        <div>
                          <a href="#" className="btn-remove fas fa-times">
                            <span className="sr-only">remove</span>
                          </a>
                          <div className="pro-name-wrap">
                            <div className="alignleft no-shrink hidden-xs">
                              <img
                                src="./assets/images/img80.jpg"
                                alt="image description"
                              />
                            </div>
                            <div className="descr-wrap">
                              <h3 className="fw-normal">Compact Stabler - Blue</h3>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-title="Price">
                        <span>
                          <strong className="price element-block"> $19.00</strong>
                        </span>
                      </td>
                      <td data-title="Quantity">
                        <div>
                          <div className="quantity">
                            <input
                              type="number"
                              className="form-control"
                              min={1}
                              defaultValue={1}
                            />
                          </div>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span>
                          <strong className="element-block price"> $19.00</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Product" className="col01">
                        <div>
                          <a href="#" className="btn-remove fas fa-times">
                            <span className="sr-only">remove</span>
                          </a>
                          <div className="pro-name-wrap">
                            <div className="alignleft no-shrink hidden-xs">
                              <img
                                src="./assets/images/img81.jpg"
                                alt="image description"
                              />
                            </div>
                            <div className="descr-wrap">
                              <h3 className="fw-normal">Wooden Pencil Yellow</h3>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-title="Price">
                        <span>
                          <strong className="price element-block">$£22.00</strong>
                        </span>
                      </td>
                      <td data-title="Quantity">
                        <div>
                          <div className="quantity">
                            <input
                              type="number"
                              className="form-control"
                              min={1}
                              defaultValue={1}
                            />
                          </div>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span>
                          <strong className="element-block price">$£22.00</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="btn-actions">
                        <div>
                          <div className="coupon-wrap">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Coupon Code"
                            />
                            <a
                              href="#"
                              className="btn btn-default font-lato fw-normal text-uppercase"
                            >
                              Apply Coupon
                            </a>
                          </div>
                        </div>
                      </td>
                      <td colSpan={2} className="text-right btn-actions">
                        <div>
                          <a
                            href="#"
                            className="btn btn-default font-lato fw-normal text-uppercase"
                          >
                            Update Cart
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-offset-2 col-sm-10 col-md-offset-6 col-md-6">
                  <h2>Cart Totals</h2>
                  <div className="table-wrap">
                    {/* table cart total */}
                    <table className="table table-cart-total">
                      <tbody>
                        <tr>
                          <td className="font-lato fw-bold">Subtotal</td>
                          <td>
                            <strong className="price">£95.00</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-lato fw-bold">Shipping</td>
                          <td>
                            {/* radio list */}
                            <ul className="list-unstyled radio-list">
                              <li>
                                <input
                                  type="radio"
                                  className="customFormReset"
                                  id="rad01"
                                  name="asd"
                                  defaultChecked=""
                                />
                                <label
                                  htmlFor="rad01"
                                  className="custom-radio-wrap fw-normal"
                                >
                                  Free Shipping
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  className="customFormReset"
                                  name="asd"
                                  id="rad02"
                                />
                                <label
                                  htmlFor="rad02"
                                  className="custom-radio-wrap fw-normal"
                                >
                                  Flat Rate: $10.00
                                </label>
                              </li>
                            </ul>
                            <a href="javascript:void(0)" className="btn-calculate">
                              Calculate Shipping
                            </a>
                            <div className="form-group">
                              <select
                                data-placeholder="Country"
                                className="form-control"
                              >
                                <option value={1}>Germany</option>
                                <option value={1}>Germany</option>
                                <option value={1}>Germany</option>
                                <option value={1}>Germany</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <select
                                data-placeholder="Select an option…"
                                className="form-control"
                              >
                                <option value={1}>Select an option…</option>
                                <option value={1}>Select an option…</option>
                                <option value={1}>Select an option…</option>
                                <option value={1}>Select an option…</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="element-block form-control"
                                placeholder="Postcode / ZIP"
                              />
                            </div>
                            <button
                              type="button"
                              className="btn btn-default font-lato text-uppercase"
                            >
                              Update Totals
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>
                            <strong className="price">$105.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning btn-theme font-lato fw-bold text-uppercase element-block"
                  >
                    Proceed to checkout
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

export default CartPage