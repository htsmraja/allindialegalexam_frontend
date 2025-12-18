import React from "react";

// import { CheckCircle } from "react-feather"; // optional icon (requires react-feather)
import { useLocation } from "react-router-dom";

const Thankyou = () => {
    const { state } = useLocation();
    const orderNumber = state?.order_number;
    console.log(orderNumber, "orderNumber")
    return (
        <>

            <main className="thankyou-page mt-5 mb-5 py-5 d-flex flex-column align-items-center justify-content-center text-center bg-light" style={{ minHeight: "70vh" }}>
                <div className="thankyou-card p-5 rounded shadow-sm pt-5 pb-5 mt-5 mb-5" style={{ maxWidth: "500px" }}>
                    <div>
                        <img src="/assets/images/thankyou.svg" alt="logo" style={{ maxWidth: '350px' }} />
                    </div>
                    <h2 className="text-success mb-2">Order Placed Successfully!</h2>
                    {orderNumber && (
                        <p className="text-lg text-gray-700">
                            Your Order Number: <span className="font-semibold">{orderNumber}</span>
                        </p>
                    )}
                    {/* <p className="mb-4"><strong>Estimated Delivery:</strong> 3-5 Business Days</p> */}

                    <p className="text-muted mb-4">
                        Thank you for your purchase. Your order has been received and is being processed.
                    </p>

                    <a href="/" className="btn btn-primary btn-rounded px-4">
                        Continue Shopping
                    </a>
                </div>
            </main>

        </>
    );
};

export default Thankyou;
