import axios from "../helper/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ToasteDiv from "../helper/ToasteDiv";
export const commonContext = createContext();

const CommonProvider = (props) => {
    const { token, isLogin, userData } = useAuthContext();
    const device_id = localStorage.getItem("device_id");
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
            console.log(response)
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

    return (
        <commonContext.Provider value={{
            getBannerList, bannerData,
            getBookList, bookList,
            getCourseList, courseList
        }}>
            {props.children}
        </commonContext.Provider>
    )
}

export default CommonProvider;
export const useCommonContext = () => useContext(commonContext);
