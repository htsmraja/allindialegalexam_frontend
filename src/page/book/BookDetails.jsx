import React, { useEffect, useState } from 'react';
import CommonLayout from '../../components/common_for_website/CommonLayout';
import { Link, useParams } from 'react-router-dom';
import { useCommonContext } from '../../context/commonContext';
import BookDeatilsReview from './BookDeatilsReview';

const BookDetails = () => {
  const { slug } = useParams();
  const { getBookDetails, bookDetails, quantity, setQuantity, addToCart } = useCommonContext();

  const [bookType, setBookType] = useState("hardcopy");

  useEffect(() => {
    getBookDetails(slug);
  }, [slug]);

  const data = bookDetails?.data?.data;

  // Auto select correct type
  useEffect(() => {
    if (!data) return;

    if (data.has_softcopy && !data.has_hardcopy) {
      setBookType("softcopy");
    } else {
      setBookType("hardcopy");
    }
  }, [data]);

  // PRICE FUNCTIONS
  const getHardcopyPrice = () => {
    if (!data) return 0;

    // Offer (if inside valid dates)
    if (
      data.mark_hardcopy_sale &&
      data.hardcopy_offer_price_b2c &&
      data.hardcopy_offer_start &&
      data.hardcopy_offer_end
    ) {
      const now = new Date();
      const start = new Date(data.hardcopy_offer_start);
      const end = new Date(data.hardcopy_offer_end);

      if (now >= start && now <= end) return data.hardcopy_offer_price_b2c;
    }

    // Normal sale price
    if (data.mark_hardcopy_sale && data.hardcopy_sale_price_b2c) {
      return data.hardcopy_sale_price_b2c;
    }

    // Default price
    return data.hardcopy_price_b2c || 0;
  };

  const getSoftcopyPrice = () => {
    if (!data) return 0;

    // Offer price
    if (
      data.mark_softcopy_sale &&
      data.softcopy_offer_price_b2c &&
      data.softcopy_offer_start &&
      data.softcopy_offer_end
    ) {
      const now = new Date();
      const start = new Date(data.softcopy_offer_start);
      const end = new Date(data.softcopy_offer_end);

      if (now >= start && now <= end) return data.softcopy_offer_price_b2c;
    }

    // Normal sale price
    if (data.mark_softcopy_sale && data.softcopy_sale_price_b2c) {
      return data.softcopy_sale_price_b2c;
    }

    // Default price
    return data.softcopy_price_b2c || 0;
  };


  const handleAddToCart = () => {
    if (!bookType) {
      toast("Please select a book type first.");
      return;
    }
    const cartData = {
      book_id: data.id,
      book_type: bookType,
      item_type: "book",
      quantity: quantity

    };
    // console.log(cartData)
    addToCart(cartData);

  }

  // console.log(bookDetails)
  return (
    <div className='innerPageBx'>
      <CommonLayout>
        {/* breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Book Details</li>
            </ol>
          </div>
        </nav>

        <div id="two-columns" className="container">
          <div className="row">
            <article id="content" className="col-xs-12 col-md-9">

              <div className="product-description-column">
                <div className="alignleft">
                  <img
                    src={
                      data?.cover_image
                        ? `${import.meta.env.VITE_APP_URL}/uploads/books/${data.cover_image}`
                        : "/no-image.png"
                    }
                    alt={data?.title}
                  />
                </div>

                <div className="descr-wrap">
                  <h2>{data?.title}</h2>
                  <p><strong>Author:</strong> {data?.author_name}</p>                  {/* PRICE TYPE SELECTOR */}
                  <div style={{ display: "flex", gap: "15px", margin: "20px 0" }}>
                    {data?.has_hardcopy ? (
                      <div
                        onClick={() => setBookType("hardcopy")}
                        style={{
                          padding: "10px 20px",
                          border: bookType === "hardcopy" ? "2px solid #ff9900" : "1px solid #ccc",
                          borderRadius: 8,
                          cursor: "pointer",
                          background: bookType === "hardcopy" ? "#fff6e5" : "white",
                        }}
                      >
                        <strong>Hardcopy</strong>
                      </div>
                    ) : null}

                    {data?.has_softcopy ? (
                      <div
                        onClick={() => setBookType("softcopy")}
                        style={{
                          padding: "10px 20px",
                          border: bookType === "softcopy" ? "2px solid #ff9900" : "1px solid #ccc",
                          borderRadius: 8,
                          cursor: "pointer",
                          background: bookType === "softcopy" ? "#fff6e5" : "white",
                        }}
                      >
                        <strong>Softcopy</strong>
                      </div>
                    ) : null}
                  </div>

                  {/* SHOW PRICE */}
                  <div style={{ marginBottom: 15 }}>
                    {bookType === "hardcopy" && (
                      <p style={{ fontSize: 20, fontWeight: 600 }}>
                        Price: ₹{getHardcopyPrice()}
                      </p>
                    )}

                    {bookType === "softcopy" && (
                      <p style={{ fontSize: 20, fontWeight: 600 }}>
                        Price: ₹{getSoftcopyPrice()}
                      </p>
                    )}
                  </div>

                  <p>{data?.description?.substring(0, 200)}...</p>

                  <strong className="element-block storage-tag text-success fw-normal font-lato">
                    In stock
                  </strong>

                  {/* QUANTITY / ADD TO CART */}
                  <div className="query-wrap">
                    <div className="quantity">
                      <button onClick={() => setQuantity(quantity - 1)} >-</button>
                      <input type="number" className="form-control" readOnly value={quantity} />
                      <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <button className="btn btn-warning btn-theme font-lato text-uppercase" onClick={handleAddToCart}>
                      Add to cart
                    </button>
                  </div>

                </div>
              </div>

              {/* Tabs */}
              <ul className="nav nav-tabs pro-descr-tab-list font-roboto" role="tablist">
                <li role="presentation">
                  <a href="#Description" role="tab" data-toggle="tab">Description</a>
                </li>
                <li role="presentation" className="active">
                  <a href="#Reviews" role="tab" data-toggle="tab">Reviews</a>
                </li>
              </ul>

              <BookDeatilsReview />
            </article>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default BookDetails;
