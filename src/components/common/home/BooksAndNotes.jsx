import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useCommonContext } from "../../../context/commonContext";
import BookCard from "../../common/book/BookCard";
const BooksAndNotes = () => {
  const { getBookList, bookList } = useCommonContext();

  const filters = { page: 1 };
  const key = JSON.stringify(filters);

  useEffect(() => {
    getBookList(filters);
  }, []);

  const books = bookList?.data?.[key]?.products || [];
  const isLoading = bookList?.loading;

  return (
    <section className="container">
      <header className="block-header mb30">
        <div className="pull-left">
          <h2 className="block-header-heading">Books & Notes</h2>
          <p>Recent and upcoming educational events listed here</p>
        </div>
        <Link to="/book-list" className="btn btn-default text-uppercase pull-right">
          View More
        </Link>
      </header>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={false}
          pagination={{ clickable: true }}
          loop={!isLoading}
          autoplay={!isLoading ? { delay: 5000, disableOnInteraction: false } : false}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >

          {/* -------------------- LOADING SKELETON -------------------- */}
          {isLoading &&
            [...Array(4)].map((_, i) => (
              <SwiperSlide key={i}>
                <article className="product-module">
                  <div className="aligncenter skeleton-box" style={{ height: 180 }}></div>
                  <h3 className="fw-semi skeleton-box" style={{ width: "80%", height: 18 }}></h3>
                  <div className="skeleton-box" style={{ width: "60%", height: 15 }}></div>
                  <div className="skeleton-box" style={{ width: "40%", height: 15 }}></div>
                </article>
              </SwiperSlide>
            ))}

          {/* -------------------- BOOK LIST -------------------- */}
          {!isLoading &&
            books.length > 0 &&
            books.map((b, index) => (
              <SwiperSlide key={index}>
                <BookCard b={b} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <br />
    </section>
  );
};

export default BooksAndNotes;

// ================================================
// ✨ BOOK CARD COMPONENT WITH PRICE LOGIC + TYPE TAG
// ================================================

// const BookCard = ({ b }) => {
//   const [format, setFormat] = useState("soft");

//   // ------------------ PRICE LOGIC ------------------
//   const isDateActive = (start, end) => {
//     if (!start || !end) return false;
//     const now = new Date();
//     return now >= new Date(start) && now <= new Date(end);
//   };

//   const getSoftPrice = () => {
//     if (b.mark_softcopy_sale && b.softcopy_sale_price_b2c) {
//       return b.softcopy_sale_price_b2c;
//     }
//     if (
//       b.softcopy_offer_price_b2c &&
//       isDateActive(b.softcopy_offer_start, b.softcopy_offer_end)
//     ) {
//       return b.softcopy_offer_price_b2c;
//     }
//     return b.softcopy_price_b2c || 0;
//   };

//   const getHardPrice = () => {
//     if (b.mark_hardcopy_sale && b.hardcopy_sale_price_b2c) {
//       return b.hardcopy_sale_price_b2c;
//     }
//     if (
//       b.hardcopy_offer_price_b2c &&
//       isDateActive(b.hardcopy_offer_start, b.hardcopy_offer_end)
//     ) {
//       return b.hardcopy_offer_price_b2c;
//     }
//     return b.hardcopy_price_b2c || 0;
//   };

//   const softPrice = getSoftPrice();
//   const hardPrice = getHardPrice();
//   const finalPrice = format === "soft" ? softPrice : hardPrice;

//   const hasSoft = b.has_softcopy == 1;
//   const hasHard = b.has_hardcopy == 1;

//   return (
//     <article className="product-module" style={{ position: "relative" }}>

//       {/* -------- TYPE BADGE ON IMAGE -------- */}
//       <span
//         className="badge bg-primary"
//         style={{
//           position: "absolute",
//           top: 10,
//           left: 10,
//           zIndex: 10,
//           padding: "5px 10px",
//           fontSize: "12px",
//         }}
//       >
//         {b.type?.toUpperCase()}
//       </span>

//       <div className="aligncenter">
//         <Link to={`/book/${b.slug}`}>
//           <img
//             src={
//               b.cover_image
//                 ? `${import.meta.env.VITE_APP_URL}/uploads/books/${b.cover_image}`
//                 : "/no-image.png"
//             }
//             alt={b.title}
//           />
//         </Link>
//       </div>

//       <h3 className="fw-semi">
//         <Link to={`/book/${b.slug}`}>{b.title}</Link>
//       </h3>

//       {/* Rating */}
//       <ul className="star-rating list-unstyled">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <li key={star}>
//             <span className="fas fa-star"></span>
//           </li>
//         ))}
//       </ul>

//       <p>{b.author_name}</p>

//       {/* -------- FORMAT BUTTONS -------- */}
//       <div className="gap-2">
//         {hasSoft && (
//           <button
//             className={`btn btn-sm mb-2 ${format === "soft" ? "btn-primary" : "btn-outline-primary"
//               }`}
//             onClick={() => setFormat("soft")}
//           >
//             Soft Copy
//           </button>
//         )}

//         {hasHard && (
//           <button
//             className={`btn btn-sm mb-2 ${format === "hard" ? "btn-primary" : "btn-outline-primary"
//               }`}
//             onClick={() => setFormat("hard")}
//           >
//             Hard Copy
//           </button>
//         )}
//       </div>

//       {/* -------- PRICE DISPLAY -------- */}
//       <strong className="price element-block fw-semi">₹{finalPrice}</strong>

//       <div>
//         <button className="btn btn-success btn-sm mb-2">Add to cart</button>
//         <button className="btn btn-warning btn-sm mb-2">Wishlist</button>
//       </div>
//     </article>
//   );
// };
