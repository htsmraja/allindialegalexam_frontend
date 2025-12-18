import axios from "../helper/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authcontext";
import { data, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ToasteDiv from "../helper/ToasteDiv";
export const commonContext = createContext();

const CommonProvider = (props) => {
    const { token, isLogin, userData } = useAuthContext();
    // console.log(token, "token")
    const device_id = localStorage.getItem("device_id");
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate()
    const [bannerData, setBannerData] = useState({ data: [], loading: false });
    const getBannerList = async () => {
        try {
            setBannerData({ data: [], loading: true });
            const response = await axios.post(`api/banner-list`, { type: 'web' });
            if (response?.status === 200) {
                setBannerData({ data: response?.data?.data, loading: false });
            }
        } catch (error) {
            setBannerData({ data: [], loading: true });
        }
    }


    const [bookList, setBookList] = useState({
        data: {},
        loading: false
    });

    const getBookList = async (filters) => {
        try {
            const filterKey = JSON.stringify(filters);

            setBookList(prev => ({ ...prev, loading: true }));

            const response = await axios.post(
                `/api/user/all-book/list`,
                filters
            );
            if (response.data.status) {

                const products = response.data.data.list || [];
                const pagination = response.data.data.pagination || null;

                setBookList(prev => ({
                    ...prev,
                    loading: false,
                    data: {
                        ...prev.data,
                        [filterKey]: { products, pagination }
                    }
                }));
            } else {
                setBookList(prev => ({ ...prev, loading: false }));
            }

        } catch (error) {
            setBookList(prev => ({ ...prev, loading: false }));
        }
    };

    const [bookDetails, setBookDetails] = useState({ data: {}, loading: false });

    const getBookDetails = async (slug) => {
        try {
            setBookDetails({ data: {}, loading: true });

            const response = await axios.get(`api/book/slug/${slug}`);

            if (response?.data?.success) {
                setBookDetails({
                    data: response.data,
                    loading: false
                });
            } else {
                setBookDetails({
                    data: {},
                    loading: false
                });
            }

        } catch (error) {
            console.log(error);
            setBookDetails({
                data: {},
                loading: false
            });
        }
    };

    const [courseList, setCourseList] = useState({
        data: {},
        loading: false
    });

    const getCourseList = async (filters) => {
        try {
            const filterKey = JSON.stringify(filters);
            setCourseList(prev => ({ ...prev, loading: true }));

            const response = await axios.post(
                `api/user/courses/list`,
                filters,
            );
            if (response.data.status) {

                const products = response.data.data.list || [];
                const pagination = response.data.data.pagination || null;

                setCourseList(prev => ({
                    ...prev,
                    loading: false,
                    data: {
                        ...prev.data,
                        [filterKey]: { products, pagination }
                    }
                }));
            } else {
                setCourseList(prev => ({ ...prev, loading: false }));
            }


        } catch (err) {
            console.error("Request failed:", err);
            setCourseList(prev => ({ ...prev, loading: false }));

        }
    };
    const [courseDetails, setCourseDetails] = useState({ data: {}, loading: false });

    const getCourseDetails = async (slug) => {
        try {
            setCourseDetails({ data: {}, loading: true });

            const response = await axios.get(`api/courses/slug/${slug}`);

            if (response?.data?.success) {
                setCourseDetails({
                    data: response.data,
                    loading: false
                });
            } else {
                setCourseDetails({
                    data: {},
                    loading: false
                });
            }

        } catch (error) {
            console.log(error);
            setCourseDetails({
                data: {},
                loading: false
            });
        }
    };


    const [headerCategoryList, setHeaderCategoryList] = useState({ data: [], loading: false });
    const getHeaderCategoryList = async () => {
        try {
            setHeaderCategoryList({ data: [], loading: true });
            const response = await axios.post(`api/ctaegory-details-with-subcategory-with-product`, {});
            if (response?.status === 200) {
                setHeaderCategoryList({ data: response?.data?.data, loading: false });
            }
        } catch (error) {
            setHeaderCategoryList({ data: [], loading: true });
        }
    };

    const [cartlistData, setCartListData] = useState({
        data: [],
        loading: false,

    });
    const [addCartLoading, setAddCartLoading] = useState(false)

    const getCartList = async () => {
        try {
            // Start loading
            setCartListData({
                data: [],
                loading: true,

                error: null,
            });

            const response = await axios.post(
                'api/user/product/cart',
                {},
                {
                    headers: {
                        Authorization: token,
                        'device-id': device_id,
                    },
                }
            );
            if (response.status === 200 && response.data.success) {
                //  Success — update data
                setCartListData({
                    data: response.data.cart || [],
                    loading: false,

                    error: null,
                });
            } else {
                //  Unexpected response (e.g., success false)
                setCartListData({
                    data: [],
                    loading: false,

                    error: response.data.message || 'Unable to fetch cart.',
                });
            }
        } catch (error) {
            console.error('Cart fetch error:', error);

            //  Detect JWT expiration or auth issues
            if (
                error.response &&
                (error.response.status === 401 ||
                    error.response.data?.message?.toLowerCase().includes('token expired') ||
                    error.response.data?.message?.toLowerCase().includes('jwt'))
            ) {
                //  Remove invalid token
                localStorage.removeItem('token');

                setCartListData({
                    data: [],
                    loading: false,

                    error: 'Session expired. Please log in again.',
                });
            } else {
                //  Other API/network error
                setCartListData({
                    data: [],
                    loading: false,
                    error: 'Failed to fetch cart data. Please try again.',
                });
            }
        }
    };

    const addToCart = async (cartData) => {
        try {
            setAddCartLoading(true);
            const response = await axios.post('api/user/product/cart/add', cartData, {
                headers: {
                    Authorization: token,
                    'device-id': device_id
                }
            })
            if (response.status === 200 && response.data.success) {
                setAddCartLoading(false)
                getCartList();

                toast(response.data.message || "Item added to cart successfully",)
            }
        } catch (error) {
            console.log(error.message);
            setAddCartLoading(false);
        }
    }

    const removeProductFromCart = async (cart_item_id) => {
        try {
            const response = await axios.post('api/user/product/cart/remove', {
                cart_item_id
            }, {
                headers: {
                    Authorization: token,
                    'device-id': device_id
                }
            })
            if (response.status === 200 && response.data.success) {
                getCartList()
                toast(response.data.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    const updateTheQuantity = async (cart_item_id, quantity) => {
        try {
            // Update on backend
            const response = await axios.post(
                'api/user/product/cart/quantity',
                { cart_item_id, quantity },
                { headers: { Authorization: token, 'device-id': device_id } }
            );
            toast(response.data.message)
            //  Instantly update UI by updating context state (no API call)
            setCartListData((prev) => {
                if (!prev?.data?.items) return prev;

                const updatedItems = prev.data.items.map((item) =>
                    item.id === cart_item_id
                        ? { ...item, quantity: quantity }
                        : item
                );

                //  Recalculate total amount on the fly
                const newTotal = updatedItems.reduce(
                    (sum, item) => sum + item.quantity * item.price,
                    0
                );

                return {
                    ...prev,
                    data: {
                        ...prev.data,
                        items: updatedItems,
                        total_amount: newTotal,
                    },
                };
            });
        } catch (error) {
            console.log(error.message);
        }
    };


    const clearCart = async () => {
        try {
            const response = await axios.post('api/user/product/cart/clear', {}, {
                headers: { Authorization: token, 'device-id': device_id }
            })
            if (response.status === 200 && response.data.success) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const userPlaceOrder = async (payload) => {
        try {
            const response = await axios.post("/api/user/order/place-order", payload, {
                headers: { Authorization: token },
            });

            if (response.status !== 200 || !response.data.success) {
                alert("Order placement failed. Please try again.");
                return;
            }

            const data = response.data;
            // console.log(data)

            //  COD flow
            if (data.payment_method === "COD") {
                navigate("/thank-you", { state: { order_number: data.order_number } });
                return data;
            }

            //  ONLINE flow
            if (data.payment_method === "ONLINE" && data.razorpayOrder) {
                if (!window.Razorpay) {
                    alert("Razorpay script not loaded yet. Please refresh and try again.");
                    return;
                }

                const options = {
                    key: data.key || "rzp_test_kw9Ej9TNfHV6Py", // Prefer backend key
                    amount: data.razorpayOrder.amount,
                    currency: "INR",
                    name: "Keshri Light House",
                    description: "Order Payment",
                    order_id: data.razorpayOrder.id,
                    image: "https://keshrilighthouse.com/assets/images/icons/favicon.png",

                    handler: async function (response) {
                        await userVerifyOrder({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            order_number: data.order_number,
                            payload
                        });
                    },
                    theme: { color: "#333333" },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();

                // Optional failure handling
                rzp.on("payment.failed", function (response) {
                    alert("Payment failed. Please try again.");
                    console.error("Payment failed:", response.error);
                });

                return data;
            }
        } catch (error) {
            console.error("Error in userPlaceOrder:", error);
            alert("Failed to place order. Try again.");
        }
    };

    //  VERIFY RAZORPAY PAYMENT
    const userVerifyOrder = async (payload) => {
        try {
            const response = await axios.post("/api/user/order/verify-order", payload, {
                headers: { Authorization: token },
            });
            if (response.status === 200 && response.data.success) {
                navigate("/thank-you", {
                    state: { order_number: payload.order_number },
                });
            } else {
                alert("Payment verification failed. Please contact support.");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Payment verification failed.");
        }
    };
    const [orderList, setOrderList] = useState({ data: {}, loading: false })
    const getOrderList = async () => {
        try {
            setOrderList({ data: [], loading: true })
            const response = await axios.post('/api/user/order/list', {}, {
                headers: {
                    Authorization: token,
                }
            })
            if (response.status === 200 && response.data.success) {
                setOrderList({ data: response.data, loading: false })
            }
        } catch (error) {
            console.log(error)
            setOrderList({ data: {}, loading: false })
        }
    }

    const [orderDetails, setOrderDetails] = useState({
        data: null,
        loading: false
    });

    const getOrderDetails = async (order_id) => {
        try {
            setOrderDetails({ data: null, loading: true });

            const response = await axios.post(
                `/api/user/order/details/${order_id}`,
                {},
                { headers: { Authorization: token } }
            );

            if (response.status === 200 && response.data.success) {
                setOrderDetails({
                    data: response.data,   // FULL DATA OBJECT
                    loading: false
                });
            } else {
                setOrderDetails({ data: null, loading: false });
            }

        } catch (error) {
            console.log(error);
            setOrderDetails({ data: null, loading: false });
        }
    };


    const [mockTestList, setMockTestList] = useState({
        data: [],
        pagination: {},
        loading: false
    });

    const getMockTestList = async (filter) => {
        setMockTestList(prev => ({ ...prev, loading: true }));

        try {
            const response = await axios.post('/api/mock-test/details', filter);

            if (response.status === 200 && response.data.status) {
                setMockTestList({
                    data: response.data.data,          // <-- list of mock tests
                    pagination: response.data.pagination, // <-- pagination info
                    loading: false
                });
            } else {
                setMockTestList(prev => ({ ...prev, loading: false }));
            }

        } catch (error) {
            console.log(error);
            setMockTestList(prev => ({ ...prev, loading: false }));
        }
    };

    const [mockTestDetails, setMockTestDetails] = useState({ data: {}, loading: false });

    const getMockTestDetails = async (slug) => {
        try {
            setMockTestDetails({ data: {}, loading: true });

            const response = await axios.get(`api/mock-test-deatils/details/${slug}`);
            if (response.status === 200 && response?.data?.status) {
                setMockTestDetails({
                    data: response.data.data,
                    loading: false
                });
            } else {
                setMockTestDetails({
                    data: {},
                    loading: false
                });
            }

        } catch (error) {
            console.log(error);
            setMockTestDetails({
                data: {},
                loading: false
            });
        }
    };

    const [examTypeList, setExamTypeList] = useState({
        data: [],
        loading: false
    });

    const getExamTypeList = async () => {
        try {
            setExamTypeList(prev => ({ ...prev, loading: true }));
            const response = await axios.post('/api/admin/exam-type/user-list', {});
            setExamTypeList({
                data: response.data.data || [],
                loading: false
            });
        } catch (error) {
            console.error("Error fetching Exam Types:", error);
            toast.error(
                error.response?.data?.message ||
                `Server Error: ${error.response?.statusText}`
            );
            setExamTypeList(prev => ({ ...prev, loading: false }));
        }
    };


    const [subscribeList, setSubscribeList] = useState({
        data: [],
        loading: false,
        total: 0
    });

    const userSubscribeList = async () => {
        try {
            setSubscribeList(prev => ({
                ...prev,
                loading: true
            }));

            const response = await axios.post(
                "api/user/product/subscribe",
                {},
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            if (response.status === 200 && response.data.success) {
                setSubscribeList({
                    data: response.data.items || [],
                    loading: false,
                    total: response.data.total_items || 0
                });
            } else {
                setSubscribeList({
                    data: [],
                    loading: false,
                    total: 0
                });
            }

        } catch (error) {
            console.error("Cart fetch error:", error);

            if (
                error.response &&
                (error.response.status === 401 ||
                    error.response.data?.message?.toLowerCase().includes("token expired") ||
                    error.response.data?.message?.toLowerCase().includes("jwt"))
            ) {
                localStorage.removeItem("token");
            }

            setSubscribeList({
                data: [],
                loading: false,
                total: 0
            });
        }
    };


    const addToSubscribe = async (cartData) => {
        try {

            const response = await axios.post('api/user/product/subscribe/add', cartData, {
                headers: {
                    Authorization: token

                }
            })
            if (response.status === 200 && response.data.success) {
                userSubscribeList();

                toast(response.data.message || "Item added to cart successfully",)
            }
            else {
                toast(response.data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast(error.response.data.message)
        }
    }
    const [questionPaperList, setQuestionPaperList] = useState({
        data: {},
        loading: false
    })
    const getQuestionPaperList = async (id) => {
        try {
            setQuestionPaperList(prev => ({ ...prev, loading: true }));
            const response = await axios.get(`/api/user/mock-test-question-paper/details/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            if (response.status === 200 && response.data.status) {
                setQuestionPaperList({
                    data: response.data.data || {},
                    loading: false
                });
            }

        } catch (error) {
            console.error("Error fetching Exam Types:", error);
            toast.error(
                error.response?.data?.message ||
                `Server Error: ${error.response?.statusText}`
            );
            setQuestionPaperList(prev => ({ ...prev, loading: false }));
        }
    }


    const [paperQuestionList, setPaperQuestionList] = useState({
        data: {
            paper: null,
            questions: []
        },
        loading: false
    });

    // const getPaperQuestions = async (question_paper_id) => {
    //     setPaperQuestionList(prev => ({ ...prev, loading: true }));

    //     try {
    //         const response = await axios.post(
    //             `/api/subscribed-user/question-to-paper/list`,
    //             { question_paper_id },   // FIXED
    //             {
    //                 headers: {
    //                     Authorization: token,
    //                     "Content-Type": "application/json"
    //                 }
    //             }
    //         );
    //         console.log(response.data)
    //         if (response.data.success) {
    //             setPaperQuestionList({
    //                 data: {
    //                     paper: response.data.paper,
    //                     questions: response.data.questions
    //                 },
    //                 loading: false
    //             });
    //         } else {
    //             setPaperQuestionList(prev => ({ ...prev, loading: false }));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setPaperQuestionList(prev => ({ ...prev, loading: false }));
    //     }
    // };

    const [attemptId, setAttemptId] = useState(null);

    const startAttempt = async (question_paper_id) => {
        try {
            const response = await axios.post(
                `/api/subscribed-user/start-attempt`,
                { question_paper_id },
                { headers: { Authorization: token } }
            );

            if (response.data.status) {
                const newAttemptId = response.data.attempt_id;

                setAttemptId(newAttemptId); // store attempt id

                // Now load the questions
                await getPaperQuestions(question_paper_id);

                // Now navigate with required data
                navigate(`/question-paper-list/start-exam`, {
                    state: {
                        id: question_paper_id,
                        attempt_id: newAttemptId
                    }
                });
            }
        } catch (error) {
            console.log("Start Attempt Error:", error);
        }
    };


    const getPaperQuestions = async (question_paper_id) => {
        setPaperQuestionList(prev => ({ ...prev, loading: true }));

        try {
            const response = await axios.post(
                `/api/subscribed-user/question-to-paper/list`,
                { question_paper_id },
                {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.data.success) {
                setPaperQuestionList({
                    data: {
                        paper: response.data.paper,
                        questions: response.data.questions
                    },
                    loading: false
                });
            } else {
                setPaperQuestionList(prev => ({ ...prev, loading: false }));
            }
        } catch (error) {
            console.log(error);
            setPaperQuestionList(prev => ({ ...prev, loading: false }));
        }
    };

    const submitAttempt = async (payload) => {
        try {
            const response = await axios.post(
                `/api/subscribed-user/submit-attempt`,
                payload,
                { headers: { Authorization: token } }
            );

            console.log("Attempt Submitted:", response.data);

        } catch (error) {
            console.log("Submit Attempt Error:", error);
        }
    };
    const [fileUrl, setFileUrl] = useState({ url: "", loading: false });
    const downloadAnswerSheet = async (attempt_id) => {
        try {
            setFileUrl({ url: "", loading: true });

            const response = await axios.post(
                `/api/user/download/answer-sheet/${attempt_id}`,
                {},
                {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = response.data;
            console.log(data, "data")
            if (data.status && data.file_url) {
                const fullUrl = `${import.meta.env.VITE_APP_URL}${data.file_url}`;
                console.log(fullUrl, "fullUrl")
                setFileUrl({ url: fullUrl, loading: false });

                // Trigger browser download
                const link = document.createElement("a");
                link.href = fullUrl; // <-- FINAL WORKING URL
                link.download = fullUrl.split("/").pop();
                document.body.appendChild(link);
                link.click();
                link.remove();
            } else {
                setFileUrl({ url: "", loading: false });
                alert("Unable to generate answer sheet");
            }
        } catch (err) {
            setFileUrl({ url: "", loading: false });
            console.error(err);
            alert("Error downloading answer sheet");
        }
    };


    return (
        <commonContext.Provider value={{
            getBannerList, bannerData,
            getBookList, bookList, getBookDetails, bookDetails,
            getCourseList, courseList, getCourseDetails, courseDetails,
            getHeaderCategoryList, headerCategoryList,
            addToCart, getCartList, cartlistData, addCartLoading, clearCart, setCartListData,
            removeProductFromCart, updateTheQuantity,
            quantity, setQuantity,
            userPlaceOrder,
            getOrderList, orderList, getOrderDetails, orderDetails,
            getMockTestList, mockTestList, getExamTypeList, examTypeList, getMockTestDetails, mockTestDetails,
            subscribeList, userSubscribeList, addToSubscribe,
            getQuestionPaperList, questionPaperList, getPaperQuestions, paperQuestionList, startAttempt, attemptId, submitAttempt,
            downloadAnswerSheet, fileUrl

        }}>
            {props.children}
        </commonContext.Provider>
    )
}

export default CommonProvider;
export const useCommonContext = () => useContext(commonContext);
