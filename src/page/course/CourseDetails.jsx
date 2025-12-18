import React, { useEffect, useState } from "react";
import CommonLayout from "../../components/common_for_website/CommonLayout";
import { Link, useParams } from "react-router-dom";
import { useCommonContext } from "../../context/commonContext";
import Reviews from "./Reviews";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { slug } = useParams();
  const { getCourseDetails, courseDetails, addToCart, addToSubscribe } = useCommonContext();

  const [selectedBatch, setSelectedBatch] = useState(null);

  useEffect(() => {
    getCourseDetails(slug);
  }, [slug]);

  // Auto select first batch
  useEffect(() => {
    if (courseDetails?.data?.batches?.length > 0) {
      setSelectedBatch(courseDetails.data.batches[0]);
    }
  }, [courseDetails]);

  const handleBatchClick = (batch) => {
    setSelectedBatch(batch);
  };

  console.log(courseDetails, "courseDetails")

  const handleBuyNow = () => {
    alert("Buy Now clicked for batch ID: " + selectedBatch?.id);
  };


  const isDateActive = (start, end) => {
    if (!start || !end) return false;
    const now = new Date();
    return now >= new Date(start) && now <= new Date(end);
  };

  const getPrice = (b) => {
    // subscription allowed means paid course
    if (!b?.is_subscription_allowed) return "This Course is Free need to subscribe ";

    const isOfferActive = isDateActive(b?.offer_start, b?.offer_end);

    // OFFER PRICE
    if (b?.mark_as_offer && b?.offer_price && isOfferActive) {
      return `₹${b?.offer_price}`;
    }

    // SALE PRICE
    if (b?.sale_price) {
      return `₹${b?.sale_price}`;
    }

    // NORMAL PRICE
    return `₹${b?.price}`;
  };
  const formatDate = (d) => d?.split("T")[0] || "";
  const getDuration = (start, end) => {
    if (!start || !end) return 0;
    const s = new Date(start);
    const e = new Date(end);
    const diff = Math.ceil((e - s) / (1000 * 60 * 60 * 24)); // days
    return diff;
  };

  const handleAddToCart = () => {
    if (!selectedBatch) {
      toast("Please select a batch first.");
      return;
    }
    const cartData = {
      product_id: courseDetails?.data?.course?.id,
      batch_id: selectedBatch?.batch_id,
      product_type: "course",
      quantity: 1

    };
    addToCart(cartData);

  }

  const handleAddToSubscribe = () => {
    if (!selectedBatch) {
      toast("Please select a batch first.");
      return;
    }
    const subscribeData = {
      product_id: courseDetails?.data?.course?.id,
      batch_id: selectedBatch?.batch_id,
      product_type: "course",
      quantity: 1
    };

    addToSubscribe(subscribeData);
  };

  return (
    <div className="innerPageBx">
      <CommonLayout>
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Course Details</li>
              <li className="active">{courseDetails?.data?.course?.title}</li>
            </ol>
          </div>
        </nav>

        {/* Page body */}
        <div id="two-columns" className="container">
          <div className="row">
            {/* Left Content */}
            <article id="content" className="col-xs-12 col-md-9">

              {/* HEADER */}
              <h1 className="content-h1 fw-semi">
                {courseDetails?.data?.course?.title}
              </h1>

              {/* Teacher Section */}
              <header className="view-header row">
                <div className="col-xs-12 col-sm-9 d-flex">
                  <div className="d-col">
                    <div className="post-author">
                      {/* <div className="alignleft no-shrink rounded-circle">
                        <img
                          src={selectedBatch?.teacher_image || "/assets/images/default.png"}
                          className="rounded-circle"
                          style={{ width: 60, height: 60 }}
                          alt="Teacher"
                        />
                      </div> */}
                      <div className="description-wrap">
                        <h2 className="author-heading">Instructor</h2>
                        <h3 className="author-heading-subtitle text-uppercase">
                          {selectedBatch?.teacher?.name || "N/A"}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3">
                  <div className="rating-holder">
                    <ul className="star-rating list-unstyled justify-end">
                      <li>
                        <span className="fas fa-star">
                          <span className="sr-only">star</span>
                        </span>
                      </li>
                      <li>
                        <span className="fas fa-star">
                          <span className="sr-only">star</span>
                        </span>
                      </li>
                      <li>
                        <span className="fas fa-star">
                          <span className="sr-only">star</span>
                        </span>
                      </li>
                      <li>
                        <span className="fas fa-star">
                          <span className="sr-only">star</span>
                        </span>
                      </li>
                      <li>
                        <span className="fas fa-star">
                          <span className="sr-only">star</span>
                        </span>
                      </li>
                    </ul>
                    <strong className="element-block text-right subtitle fw-normal">
                      (2 Reviews)
                    </strong>
                  </div>
                </div>
              </header>
              <div className="aligncenter content-aligncenter">
                <img
                  src={
                    courseDetails?.data?.course?.thumbnail
                      ? `${import.meta.env.VITE_APP_URL}/${courseDetails?.data?.course?.thumbnail}`
                      : "/no-image.png"
                  }
                  alt={courseDetails?.data?.course?.title}
                />
              </div>
              {/* Course Description */}
              <h3 className="content-h3">Course Description</h3>
              <p>{courseDetails?.data?.course?.description}</p>

              {/* Batch Selection */}
              <h3 className="content-h3 mt-4">Select Batch</h3>
              <div className="row">
                {courseDetails?.data?.batches?.map((batch) => (
                  <div
                    key={batch.batch_id}
                    className="col-md-4"
                    onClick={() => handleBatchClick(batch)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        border:
                          selectedBatch?.batch_id === batch.batch_id
                            ? "2px solid #ff6600"
                            : "1px solid #ccc",
                        borderRadius: 10,
                        padding: "12px",
                        background:
                          selectedBatch?.batch_id === batch.batch_id
                            ? "#fff5eb"
                            : "#fff",
                        marginBottom: 15,
                      }}
                    >
                      <h5>{batch.batch_name}</h5>
                      <p style={{ margin: 0, fontSize: 14 }}>
                        Start: {formatDate(batch.start_date)}
                      </p>

                      <p>
                        End: {formatDate(batch.end_date)}
                      </p>

                      <p style={{ margin: 0, fontSize: 14 }}>
                        Duration: {getDuration(batch.start_date, batch.end_date)} days
                      </p>

                      <p>
                        Seats Available: {batch.max_students - batch.current_students}
                      </p>

                      <p>
                        {batch.is_subscription_allowed ? "Paid Course" : "Free Course"}
                      </p>

                      <p>
                        Sessions per week: {batch.time_slots.length}
                      </p>

                    </div>
                  </div>
                ))}
              </div>

              {/* Reviews */}
              <Reviews />
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="col-xs-12 col-md-3" id="sidebar">

              {/* Selected Batch Pricing */}
              <section className="widget widget_box widget_course_select">
                <header className="widgetHead text-center bg-theme">
                  <h3 className="text-uppercase">Take This Course</h3>
                </header>

                <strong className="price element-block font-lato">
                  {getPrice(courseDetails?.data?.course)}
                </strong>


                <ul className="list-unstyled font-lato">
                  <li>
                    <i className="far fa-clock" /> Duration:
                    {getDuration(selectedBatch?.start_date, selectedBatch?.end_date)} days
                  </li>

                  <li>
                    <i className="far fa-user" /> Instructor:
                    {selectedBatch?.teacher?.name}
                  </li>

                  <li>
                    <i className="far fa-calendar" /> Starting:
                    {selectedBatch?.start_date?.split("T")[0]}
                  </li>

                  <li>
                    <i className="far fa-clock" /> Class Schedule:
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      {selectedBatch?.time_slots?.map((slot) => (
                        <li key={slot.id} style={{ fontSize: 14 }}>
                          {slot.day.charAt(0).toUpperCase() + slot.day.slice(1)} —
                          {slot.start_time?.slice(0, 5)} to {slot.end_time?.slice(0, 5)}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>


                {/* Add to cart + Buy Now */}
                {/* <button
                  className="btn btn-warning w-100 mt-2"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>

                <button
                  className="btn btn-success w-100 mt-2"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button> */}


                <div>
                  {courseDetails?.data?.course?.is_subscription_allowed ? (
                    <div className="d-flex flex-column gap-2">
                      <button
                        className="btn btn-warning w-100 mt-2"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>

                      <button
                        className="btn btn-success w-100 mt-2"
                        onClick={handleBuyNow}
                      >
                        Buy Now
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex flex-column gap-2">
                      <button
                        className="btn btn-primary btn-sm w-100"
                        onClick={handleAddToSubscribe}
                      >
                        Add to Subscribe
                      </button>
                    </div>
                  )}
                </div>


              </section>

            </aside>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default CourseDetails;
