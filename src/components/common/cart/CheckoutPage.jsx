import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCommonContext } from "../../../context/commonContext";
import { useAuthContext } from "../../../context/authcontext";
import AddressManager from "../../../page/auth/AddressManager";
import CommonLayout from "../../common_for_website/CommonLayout";

const Checkout = () => {
  const { getCartList, cartlistData, userPlaceOrder } = useCommonContext();
  const { getUserAddressList, addressList } = useAuthContext();
  const location = useLocation();
  const buyNow = location.state?.buyNow || null;

  const [selectedShippingAddressId, setSelectedShippingAddressId] = useState("");
  const [selectedBillingAddressId, setSelectedBillingAddressId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingMethod, setShippingMethod] = useState("Delivery");
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    getUserAddressList();
    if (!buyNow) getCartList();
  }, []);

  const cartItems = buyNow ? [buyNow] : cartlistData?.data?.items || [];

  // -----------------------------
  // PRICE LOGIC
  // -----------------------------
  const getPrice = (item) => {
    // -------------------- FREE ITEMS --------------------
    if (item.product_type === "book" && item.book_is_free === 1) return 0;
    if (item.product_type === "course" && item.course_is_free === 0) return 0;
    if (item.product_type === "mock_test" && item.mock_test_is_free === 0) return 0;

    // -------------------- BOOK PRICES --------------------
    if (item.product_type === "book") {
      if (item.book_type === "hardcopy") {
        return (
          item.hardcopy_offer_price_b2c ||
          item.hardcopy_sale_price_b2c ||
          item.hardcopy_price_b2c
        );
      }
      if (item.book_type === "softcopy") {
        return (
          item.softcopy_offer_price_b2c ||
          item.softcopy_sale_price_b2c ||
          item.softcopy_price_b2c
        );
      }
    }

    // -------------------- COURSE PRICES --------------------
    if (item.product_type === "course") {
      return (
        item.course_offer_price ||
        item.course_sale_price ||
        item.course_price
      );
    }

    // -------------------- MOCK TEST PRICES --------------------
    if (item.product_type === "mock_test") {
      return (
        item.mock_offer_price ||
        item.mock_sale_price ||
        item.mock_price
      );
    }

    return 0;
  };

  const grandTotal = cartItems.reduce((sum, item) => sum + getPrice(item) * item.quantity, 0);

  // -----------------------------
  // PLACE ORDER
  // -----------------------------
  const handlePlaceOrder = async () => {
    if (!selectedBillingAddressId || !selectedShippingAddressId)
      return alert("Please select billing and shipping address");

    if (!paymentMethod) return alert("Select payment method");
    if (!accepted) return alert("Accept Terms & Conditions");

    const payload = {
      billing_address_id: selectedBillingAddressId,
      shipping_address_id: selectedShippingAddressId,
      shipping_method: shippingMethod,
      payment_method: paymentMethod,
    };

    await userPlaceOrder(payload);
  };

  const hasBookOrPhysical = cartItems.some(
    (item) => item.product_type === "book" && item.book_type === "hardcopy"
  );

  return (

    <div className="innerPageBx">
      <CommonLayout>
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Checkout</li>
            </ol>
          </div>
        </nav>

        <div className="container checkout-page">
          <div className="row">

            {/* LEFT SIDE — Address & Payment */}
            <div className="col-md-7">

              <AddressManager
                addressList={addressList}
                onSelectShipping={setSelectedShippingAddressId}
                onSelectBilling={setSelectedBillingAddressId}
              />

              <hr />

              <h4 className="mb-2 mt-4">Shipping Method</h4>
              {["Delivery", "Self Pickup"].map((m) => (
                <label key={m} className="d-block" style={{ marginRight: '10px' }}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value={m}
                    checked={shippingMethod === m}
                    onChange={(e) => setShippingMethod(e.target.value)}
                  />{" "}
                  {m}
                </label>
              ))}

              <hr />
              <h4 className="mb-2 mt-4">Payment Method</h4>
              {!hasBookOrPhysical && (
                <label className="d-block" style={{ marginRight: '10px' }}>
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  &nbsp;Cash on Delivery
                </label>
              )}
              <label className="d-block">
                <input
                  type="radio"
                  name="payment"
                  value="ONLINE"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                &nbsp;Online Payment
              </label>

              <hr />
              <div className="mt-3">
                <label>
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />{" "}
                  I accept the{" "}
                  <Link to="/terms-and-conditions" target="_blank">
                    Terms & Conditions
                  </Link>
                </label>
              </div>
            </div>

            {/* RIGHT SIDE — Order Summary */}
            <div className="col-md-5">
              <div className="order-summary-card p-3 shadow-sm">
                <h3 className="mb-3">Order Summary</h3>

                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, i) => {
                      const total = getPrice(item) * item.quantity;
                      return (
                        <tr key={i}>
                          <td>
                            {item.product_type === "course"
                              ? item.course_title
                              : item.product_type === "mock_test"
                                ? item.mock_title
                                : item.book_title}
                            <br />
                            <small className="text-muted">
                              {item.product_type === "course"
                                ? `Batch: ${item.batch_name}`
                                : item.product_type === "mock_test"
                                  ? ""
                                  : `Type: ${item.book_type}`}
                            </small>
                          </td>
                          <td className="text-end">
                            {total === 0 ? "FREE" : `₹${total}`}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Grand Total</th>
                      <th className="text-end">₹{grandTotal}</th>
                    </tr>
                  </tfoot>
                </table>

                <button
                  className="btn btn-warning btn-block w-100 mt-3"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>

          </div>
        </div>
        <br />
        <br />
        <br />
      </CommonLayout>
    </div>
  );
};

export default Checkout;
