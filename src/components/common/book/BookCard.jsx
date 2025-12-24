// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { useCommonContext } from '../../../context/commonContext';

// const BookCard = ({ b }) => {

//     const { addToCart, addToSubscribe } = useCommonContext();
//     const [format, setFormat] = useState("soft");
//     const [quantity, setQuantity] = useState(1);

//     // ------------------ PRICE LOGIC ------------------
//     const isDateActive = (start, end) => {
//         if (!start || !end) return false;
//         const now = new Date();
//         return now >= new Date(start) && now <= new Date(end);
//     };

//     const getSoftPrice = () => {
//         if (b.mark_softcopy_sale && b.softcopy_sale_price_b2c) {
//             return b.softcopy_sale_price_b2c;
//         }
//         if (
//             b.softcopy_offer_price_b2c &&
//             isDateActive(b.softcopy_offer_start, b.softcopy_offer_end)
//         ) {
//             return b.softcopy_offer_price_b2c;
//         }
//         return b.softcopy_price_b2c || 0;
//     };

//     const getHardPrice = () => {
//         if (b.mark_hardcopy_sale && b.hardcopy_sale_price_b2c) {
//             return b.hardcopy_sale_price_b2c;
//         }
//         if (
//             b.hardcopy_offer_price_b2c &&
//             isDateActive(b.hardcopy_offer_start, b.hardcopy_offer_end)
//         ) {
//             return b.hardcopy_offer_price_b2c;
//         }
//         return b.hardcopy_price_b2c || 0;
//     };

//     const finalPrice = format === "soft" ? getSoftPrice() : getHardPrice();
//     const hasSoft = b.has_softcopy == 1;
//     const hasHard = b.has_hardcopy == 1;

//     const handleAddToCart = () => {
//         const book_type =
//             format === "soft" ? "softcopy" : "hardcopy";
//         const cartData = {
//             product_id: b.id,
//             book_type: book_type,    // "soft" or "hard"
//             product_type: "book",
//             quantity,
//         };
//         addToCart(cartData);
//     };
//     const handleAddToSubscribe = () => {
//         const subscribeData = {
//             product_id: b.id,
//             product_type: "book",
//             quantity: quantity
//         };

//         addToSubscribe(subscribeData);
//     };
//     // console.log(b, "book")
//     return (
//         <article className="product-module bookBox" style={{ position: "relative" }}>

//             {/* TYPE BADGE */}
//             <span
//                 className="badge bg-primary"
//                 style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}
//             >
//                 {b.type?.toUpperCase()}
//             </span>

//             <div className="aligncenter img">
//                 <Link to={`/book-details/${b.slug}`}>
//                     <img
//                         src={
//                             b.cover_image
//                                 ? `${import.meta.env.VITE_APP_URL}/uploads/books/${b.cover_image}`
//                                 : "/no-image.png"
//                         }
//                         alt={b.title}
//                     />
//                 </Link>
//             </div>
            
//             <div style={{padding:'0px 7px'}}>
//             <h3 className="fw-semi">
//                 <Link to={`/book-details/${b.slug}`}>{b.title}</Link>
//             </h3>

//             {/* FORMAT BUTTONS */}
//             {/* PRICE */}
//             <strong className="price" style={{paddingLeft:'5px'}}>
//                 {b.is_free ? "Free" : `₹ ${finalPrice}`}
//             </strong>
//             </div>
//             <div className="gap-2">
//                 {hasSoft && (
//                     <button
//                         className={`btn btn-sm mb-2 ${format === "soft" ? "btn-dark" : "btn-dark"}`}
//                         onClick={() => setFormat("soft")}
//                     >
//                         Soft Copy
//                     </button>
//                 )}

//                 {hasHard && (
//                     <button
//                         className={`btn btn-sm mb-2 ${format === "hard" ? "btn-primary" : "btn-warning"}`}
//                         onClick={() => setFormat("hard")}
//                         style={{color:'#000'}}
//                     >
//                         Hard Copy
//                     </button>
//                 )}
//             </div>
//             <div>
//                 {!b.is_free ? (
//                     <div>
//                         <button
//                             className="btn btn-warning btn-sm mb-2"
//                             onClick={handleAddToCart}   // ✔ FIXED
//                             style={{color:'#000'}}
//                         >
//                             Add to cart
//                         </button>

//                         <button className="btn btn-dark btn-sm mb-2">
//                             Wishlist
//                         </button>
//                     </div>
//                 ) : (
//                     <div className="d-flex flex-column gap-2">
//                         <button
//                             className="btn btn-warning btn-sm w-100"
//                             onClick={handleAddToSubscribe}
//                             style={{color:'#000'}}
//                         >
//                             Add to Subscribe
//                         </button>
//                     </div>
//                 )}
//             </div>

//         </article>
//     );
// };

// export default BookCard;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCommonContext } from '../../../context/commonContext';

const BookCard = ({ b }) => {
    const { addToCart, addToSubscribe } = useCommonContext();

    const hasSoft = b.has_softcopy == 1;
    const hasHard = b.has_hardcopy == 1;

    const [format, setFormat] = useState("soft");
    const [quantity, setQuantity] = useState(1);

    /* ---------------- AUTO SELECT FORMAT ---------------- */
    useEffect(() => {
        if (hasHard && !hasSoft) setFormat("hard");
        if (hasSoft && !hasHard) setFormat("soft");
    }, [hasSoft, hasHard]);

    /* ---------------- PRICE LOGIC ---------------- */
    const isDateActive = (start, end) => {
        if (!start || !end) return false;
        const now = new Date();
        return now >= new Date(start) && now <= new Date(end);
    };

    const getSoftPrice = () => {
        if (b.mark_softcopy_sale && b.softcopy_sale_price_b2c)
            return b.softcopy_sale_price_b2c;

        if (
            b.softcopy_offer_price_b2c &&
            isDateActive(b.softcopy_offer_start, b.softcopy_offer_end)
        )
            return b.softcopy_offer_price_b2c;

        return b.softcopy_price_b2c || 0;
    };

    const getHardPrice = () => {
        if (b.mark_hardcopy_sale && b.hardcopy_sale_price_b2c)
            return b.hardcopy_sale_price_b2c;

        if (
            b.hardcopy_offer_price_b2c &&
            isDateActive(b.hardcopy_offer_start, b.hardcopy_offer_end)
        )
            return b.hardcopy_offer_price_b2c;

        return b.hardcopy_price_b2c || 0;
    };

    const finalPrice =
        format === "soft" && hasSoft ? getSoftPrice() : getHardPrice();

    /* ---------------- ADD TO CART ---------------- */
    const handleAddToCart = () => {
        if (format === "soft" && !hasSoft) return;
        if (format === "hard" && !hasHard) return;

        const cartData = {
            product_id: b.id,
            product_type: "book",
            book_type: format === "soft" ? "softcopy" : "hardcopy",
            quantity
        };

        addToCart(cartData);
    };

    const handleAddToSubscribe = () => {
        addToSubscribe({
            product_id: b.id,
            product_type: "book",
            quantity: 1
        });
    };

    /* ---------------- UI ---------------- */
    return (
        <article className="product-module bookBox" style={{ position: "relative" }}>
            {/* TYPE BADGE */}
            <span
                className="badge bg-primary"
                style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}
            >
                {b.type?.toUpperCase()}
            </span>

            <div className="aligncenter img">
                <Link to={`/book-details/${b.slug}`}>
                    <img
                        src={
                            b.cover_image
                                ? `${import.meta.env.VITE_APP_URL}/uploads/books/${b.cover_image}`
                                : "/no-image.png"
                        }
                        alt={b.title}
                    />
                </Link>
            </div>

            <div style={{ padding: '0px 7px' }}>
                <h3 className="fw-semi">
                    <Link to={`/book-details/${b.slug}`}>{b.title}</Link>
                </h3>

                <strong className="price" style={{ paddingLeft: '5px' }}>
                    {b.is_free ? "Free" : `₹ ${finalPrice}`}
                </strong>
            </div>

            {/* FORMAT BUTTONS */}
            <div className="gap-2">
                {hasSoft && (
                    <button
                        className={`btn btn-sm mb-2 ${format === "soft" ? "btn-dark" : "btn-outline-dark"
                            }`}
                        onClick={() => setFormat("soft")}
                    >
                        Soft Copy
                    </button>
                )}

                {hasHard && (
                    <button
                        className={`btn btn-sm mb-2 ${format === "hard" ? "btn-primary" : "btn-warning"
                            }`}
                        onClick={() => setFormat("hard")}
                        style={{ color: '#000' }}
                    >
                        Hard Copy
                    </button>
                )}
            </div>

            {/* ACTION BUTTONS */}
            <div>
                {!b.is_free ? (
                    <div>
                        <button
                            className="btn btn-warning btn-sm mb-2"
                            onClick={handleAddToCart}
                            style={{ color: '#000' }}
                        >
                            Add to cart
                        </button>

                        <button className="btn btn-dark btn-sm mb-2">
                            Wishlist
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn btn-warning btn-sm w-100"
                        onClick={handleAddToSubscribe}
                        style={{ color: '#000' }}
                    >
                        Add to Subscribe
                    </button>
                )}
            </div>
        </article>
    );
};

export default BookCard;