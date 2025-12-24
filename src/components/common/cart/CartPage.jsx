import React, { useEffect, useState } from "react";
import CommonLayout from "../../common_for_website/CommonLayout";
import { Link, useNavigate } from "react-router-dom";
import { useCommonContext } from "../../../context/commonContext";
import Empaty from "../../common_for_website/Empaty";

const CartPage = () => {
  const {
    cartlistData,
    removeProductFromCart,
    updateTheQuantity,
  } = useCommonContext();

  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const items = cartlistData?.data?.items || [];
  console.log(items, "items")
  useEffect(() => {
    const qtyMap = {};
    items.forEach((item) => {
      qtyMap[item.id] = item.quantity;
    });
    setQuantities(qtyMap);
  }, [cartlistData]);

  // -----------------------------
  // PRICE HANDLER
  // -----------------------------
  const getItemPrice = (item) => {
    // -------------------- FREE ITEMS --------------------
    if (item.product_type === "book" && item.book_is_free === 1) return "FREE";
    if (item.product_type === "course" && item.course_is_free === 0) return "FREE";
    if (item.product_type === "mock_test" && item.mock_test_is_free === 0) return "FREE";

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

  // -----------------------------
  // QUANTITY CHANGE
  // -----------------------------
  const handleQuantityChange = (itemId, newQty) => {
    if (newQty < 1) return;

    setQuantities((prev) => ({ ...prev, [itemId]: newQty }));
    updateTheQuantity(itemId, newQty);
  };

  // -----------------------------
  // GRAND TOTAL (FREE = 0)
  // -----------------------------
  const getGrandTotal = () => {
    return items.reduce((sum, item) => {
      const price = getItemPrice(item);
      if (price === "FREE") return sum; // FREE item contributes 0
      return sum + price * item.quantity;
    }, 0);
  };

  // -----------------------------
  // IMAGE LOGIC
  // -----------------------------
  const getImage = (item) => {
    if (item.product_type === "course") {
      return `${import.meta.env.VITE_APP_URL}/${item.course_thumbnail}`;
    }
    if (item.product_type === "book") {
      return `${import.meta.env.VITE_APP_URL}/uploads/books/${item.book_cover}`;
    }
    if (item.product_type === "mock_test") {
      return `${import.meta.env.VITE_APP_URL}/uploads/mocktest/${item.mock_cover}`;
    }
    return "/placeholder.png";
  };

  // -----------------------------
  // UI RENDER
  // -----------------------------
  return (
    <div className="innerPageBx">
      <CommonLayout>
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Cart Page</li>
            </ol>
          </div>
        </nav>

        <section className="cart-content-block container">
          <form className="cart-form">
            {items.length === 0 ? (
              <Empaty />
            ) : (
              <>
                <div className="table-wrap">
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
                      {items.map((item) => {
                        const price = getItemPrice(item);
                        const total = price === "FREE" ? "FREE" : price * item.quantity;

                        // Only hardcopy books can change quantity
                        const canChangeQty = item.product_type === "book" && item.book_type === "hardcopy";

                        return (
                          <tr key={item.id}>
                            <td data-title="Product" className="col01">
                              <div>
                                <button
                                  type="button"
                                  className="btn-remove fas fa-times"
                                  onClick={() => removeProductFromCart(item.id)}
                                ></button>

                                <div className="pro-name-wrap">
                                  <div className="alignleft no-shrink hidden-xs">
                                    <img
                                      src={getImage(item)}
                                      alt="thumb"
                                      style={{ width: "80px" }}
                                    />
                                  </div>

                                  <div className="descr-wrap">
                                    <h3 className="fw-normal">
                                      {item.product_type === "course" && item.course_title}
                                      {item.product_type === "book" && item.book_title}
                                      {item.product_type === "mock_test" && item.mock_title}
                                    </h3>

                                    <p className="text-muted">
                                      {item.product_type === "course" && (
                                        <>Batch: <b>{item.batch_name}</b></>
                                      )}
                                      {item.product_type === "book" && (
                                        <>Type: <b>{item.book_type}</b></>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* PRICE */}
                            <td data-title="Price">
                              <strong className="price element-block">
                                {price === "FREE" ? "FREE" : `₹${price}`}
                              </strong>
                            </td>

                            {/* QUANTITY BUTTONS */}
                            <td data-title="Quantity">
                              <div className="quantity d-flex align-items-center">
                                <button
                                  type="button"
                                  className="qty-btn btn btn-sm btn-light"
                                  disabled={!canChangeQty}
                                  onClick={() =>
                                    handleQuantityChange(item.id, quantities[item.id] - 1)
                                  }
                                >
                                  -
                                </button>

                                <span className="mx-2 fw-bold">
                                  {quantities[item.id]}
                                </span>

                                <button
                                  type="button"
                                  className="qty-btn btn btn-sm btn-light"
                                  disabled={!canChangeQty}
                                  onClick={() =>
                                    handleQuantityChange(item.id, quantities[item.id] + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            {/* TOTAL */}
                            <td data-title="Total">
                              <strong className="element-block price">
                                {total === "FREE" ? "FREE" : `₹${total}`}
                              </strong>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* CART TOTALS */}
                <div className="row">
                  <div className="col-md-offset-6 col-md-6">
                    <h2>Cart Totals</h2>

                    <div className="table-wrap">
                      <table className="table table-cart-total">
                        <tbody>
                          <tr>
                            <td className="font-lato fw-bold">Subtotal</td>
                            <td><strong className="price">₹{getGrandTotal()}</strong></td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td><strong className="price">₹{getGrandTotal()}</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <button
                      type="button"
                      className="btn btn-warning btn-theme font-lato fw-bold text-uppercase element-block"
                      onClick={() => navigate('/checkout-page')}
                    >
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </section>
      </CommonLayout>
    </div>
  );
};

export default CartPage;
