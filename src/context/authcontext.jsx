import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../helper/axios";
import { Bounce, toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const device_id = localStorage.getItem("device_id");
    const [isRegistered, setIsRegistered] = useState("");
    const [isreggistered, setIsReggistered] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [userData, setuserData] = useState({});
    const [addressList, setAddressList] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (token) {
            setToken(token);
            setIsLogin(true);
        } else {
            setIsLogin(false);
            setToken("")
        }
    }, []);

    const register = async (payload) => {
        try {
            setLoading(true);
            const response = await axios.post(`api/user/register`, payload);
            if (response.status === 200 && response.data.success) {
                toast(response.data.message)
                navigate("/login");
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || error.message || "Something went wrong");
        }
    }

    // Send OTP
    const sendOtp1 = async (mobile) => {
        setLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`api/user/login`, { mobile });

            if (response.status === 200 && response.data.status === 200) {
                setIsRegistered(response?.data?.isAlreadyRegistered);
                setMessage(response.data.message || "OTP sent successfully");
                toast(response.data.message)
            } else {
                throw new Error(response.data?.message || "Failed to send OTP");
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Failed to send OTP. Please try again.";
            setMessage(errorMessage);
            throw error;
        } finally {
            setLoading(false);
        }
    };
    const sendOtp = async (mobile) => {
        setLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`/api/user/login`, { mobile });

            if (response.status === 200 && response.data.success) {
                // setIsRegistered(response?.data?.isAlreadyRegistered);
                setMessage(response.data.message || "OTP sent successfully");
                toast(response.data.message);

                return true;  // return true for success
            } else {
                const msg = response.data?.message || "Failed to send OTP";
                setMessage(msg);
                toast(msg);
                return false; // return false for failure
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Failed to send OTP. Please try again.";
            setMessage(errorMessage);
            toast(errorMessage);
            return false; // return false for failure
        } finally {
            setLoading(false);
        }
    };


    // Verify OTP
    const verifyOtp = async ({ mobile, otp }) => {
        let redirectPath = new URLSearchParams(location.search).get("redirect");

        // Fallback to stored redirect if query param not present
        if (!redirectPath) {
            redirectPath = localStorage.getItem("redirect_after_login");
            localStorage.removeItem("redirect_after_login");
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(
                `api/user/verify-otp`,
                { mobile, otp },
                { headers: { "device-id": device_id } }
            );

            if (response.status === 200 && response.data.success) {
                const token = response.data?.token;

                if (token) {
                    localStorage.setItem("token", token);
                    setToken(token);
                    setIsLogin(true);
                }
                toast(response.data.message)
                setMessage(" Verified successfully!");
                setLoading(false);

                // Decide redirect route
                if (redirectPath) {
                    navigate(redirectPath, { replace: true });
                } else if (isRegistered) {  //  fix: your variable was spelled `isreggistered`
                    navigate("/", { replace: true });
                } else {
                    navigate("/my-account", { replace: true });
                }

            } else {
                throw new Error(response.data?.message || "OTP verification failed");
            }

        } catch (error) {
            console.error("OTP Verify Error:", error);
            const errorMessage =
                error.response?.data?.message ||
                error.response?.data?.data?.message ||
                error.message ||
                "Invalid OTP. Please try again.";

            setMessage(errorMessage);
            setLoading(false);
        }
    };


    const login = (token) => {
        localStorage.setItem("token", token);
        setIsLogin(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLogin(false);
        setToken("");
        setuserData({});
    };

    const getUserProfile = async () => {
        try {
            const response = await axios.get(`api/user/profile/details`, {
                headers: {
                    Authorization: token,
                },
            });
            if (response.status === 200 & response.data.status) {
                setuserData(response?.data?.data);
            }
        } catch (error) {
            localStorage.removeItem("token");
            setIsLogin(false);
            setToken("");
            setuserData({});
        }
    };
    const updateUserProfile = async (payload) => {
        try {
            setUpdateLoading(true);
            const response = await axios.post(`api/user/profile/update`, payload, {
                headers: {
                    Authorization: token,
                },
            });
            if (response.status === 200) {
                toast.success("User profile updated successfully");
                navigate("/account/my-profile");
                getUserProfile();
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || "Something went wrong");
        } finally {
            setUpdateLoading(false);
        }
    };

    const getUserAddressList = async () => {
        try {
            setAddressList({ data: {}, loading: true });
            const response = await axios.post('api/user/saved-addresses/list', {}, {
                headers: {
                    Authorization: token,
                }
            })
            if (response.status === 200 && response.data.success) {
                setAddressList({ data: response.data.addresses, loading: false });
            }
        } catch (error) {
            console.log(error)
            setAddressList({ data: {}, loading: true });
        }
    }

    const addUserAddressList = async (payload) => {
        try {
            const response = await axios.post(`api/user/address/save`, payload, {
                headers: {
                    Authorization: token,
                }
            })
            if (response.status === 200 && response.data.success) {
                getUserAddressList()
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    const updateUserAdress = async (id, payload) => {
        try {
            const response = await axios.post(`api/user/address/update/${id}`, payload, {
                headers: {
                    Authorization: token,
                }
            })
            if (response.status === 200 && response.data.success) {
                getUserAddressList()
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteUserAddress = async (id) => {
        try {
            const response = await axios.post(`api/user/address/delete/${id}`, {
                headers: {
                    Authorization: token,
                }
            })
            if (response.status === 200 && response.data.success) {
                getUserAddressList()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) {
            setToken(token);
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);



    return (
        <AuthContext.Provider
            value={{
                isLogin, token,
                isRegistered,
                loading,
                message,
                sendOtp,
                verifyOtp,
                login,
                logout,
                getUserProfile,
                updateUserProfile,
                userData,
                getUserAddressList,
                addressList,
                isCartOpen, setIsCartOpen,
                addUserAddressList, updateUserAdress, deleteUserAddress, register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
