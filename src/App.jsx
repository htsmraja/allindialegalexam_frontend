import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './page/Home'
import AboutUs from './components/common_for_website/AboutUs'
import ContactUs from './components/common_for_website/ContactUs'
import Courses from './page/course/CourseList'
import CourseList from './page/course/CourseList'
import CourseDetails from './page/course/CourseDetails'
import Login from './page/auth/Login'
import SignUp from './page/auth/SignUp'
import BookList from './page/book/BookList'
import BookDetails from './page/book/BookDetails'
import CartPage from './components/common/cart/CartPage'
import CheckoutPage from './components/common/cart/CheckoutPage'
import MyAccount from './components/common/my-account/MyAccount'
import Wishlist from './components/common/cart/Wishlist'
import { getDeviceId } from './helper/getDeviceId'
import { ToastContainer, Zoom } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './helper/ProtectedRoute'
import Thankyou from './page/auth/Thankyou'
import { useCommonContext } from './context/commonContext'
import { useAuthContext } from './context/authcontext'
import OrderList from './page/auth/OrderList'
import OrderDeatils from './page/auth/OrderDeatils'
import MockTesList from './page/mocktest/MockTesList'
import MockTestDeatils from './page/mocktest/MockTestDeatils'
import SubscribeList from './components/common/cart/SubscribeList'
import QuestionPaperList from './page/mocktest/QuestionPaperList'
import ExamPage from './test/ExamPage'
import StartExam from './components/common/exam/StartExam'
import TestStartExam from './components/common/exam/TestStartExam'
import PersonalDetails from './components/common/my-account/profile/PersonalDetails'
import AcademicInfo from './components/common/my-account/profile/AcademicInfo'
import ProfilePicture from './components/common/my-account/profile/ProfilePicture'
import ContactDetails from './components/common/my-account/profile/ContactDetails'
import ChangePassword from './components/common/my-account/profile/ChangePassword'
import ManageAddress from './components/common/my-account/profile/ManageAddress'
import ReferralWallet from './components/common/my-account/profile/ReferralWallet'
import EnrolledCourses from './components/common/my-account/courses/EnrolledCourses'
import BatchDetails from './components/common/my-account/courses/BatchDetails'
import MockTestListLayout from './components/common/my-account/exams/MockTestList'
import PerformanceChart from './components/common/my-account/performance/PerformanceChart'
import Dashboard from './components/common/my-account/dashboard/Dashboard'
const App = () => {
  const { getCartList } = useCommonContext();
  const { isLogin, getUserProfile, token, logout } = useAuthContext();
  const device_id = localStorage.getItem("device_id");

  useEffect(() => {
    getDeviceId();
    getCartList();
  }, [])
  useEffect(() => {
    if (isLogin) {
      getUserProfile();
    }
  }, [isLogin]);
  useEffect(() => {
    if (isLogin && token) {
      getCartList();
      // getWishlist();
    }
  }, [isLogin, token, device_id, logout]);
  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-left"
        style={{ zIndex: 99999 }}
        transition={Zoom}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-deatils/:slug" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/book-details/:slug" element={<BookDetails />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/mock-test-list" element={<MockTesList />} />
        <Route path="/mock-test-details/:id" element={<MockTestDeatils />} />
        <Route path="/test-start-exam" element={<TestStartExam />} />

        <Route path="/checkout-page" element={<ProtectedRoute />}>
          <Route index element={<CheckoutPage />} />
        </Route>
        <Route path="/my-account" element={<ProtectedRoute />}>
          <Route element={<MyAccount />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile/personal-details" element={<PersonalDetails />} />
            <Route path="profile/academic-info" element={<AcademicInfo />} />
            <Route path="profile/profile-picture" element={<ProfilePicture />} />
            <Route path="profile/contact-guardian" element={<ContactDetails />} />
            <Route path="profile/change-password" element={<ChangePassword />} />
            <Route path="profile/manage-address" element={<ManageAddress />} />
            <Route path="profile/referral-wallet" element={<ReferralWallet />} />

            <Route path="courses/enrolled" element={<EnrolledCourses />} />
            <Route path="courses/batch-details" element={<BatchDetails />} />

            <Route path="exams/mock-tests" element={<MockTestListLayout />} />
            <Route path="performance" element={<PerformanceChart />} />

            <Route path="wishlist" element={<Wishlist />} />
            <Route path="order-list" element={<OrderList />} />
            <Route path="order-details" element={<OrderDeatils />} />
            <Route path="my-subscription" element={<SubscribeList />} />
          </Route>
        </Route>

        <Route path="/question-paper-list" element={<ProtectedRoute />}>
          <Route index element={<QuestionPaperList />} />
          <Route path="start-exam" element={<StartExam />} />
        </Route>
        <Route path="/exam-page" element={<ExamPage />} />

        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>

    </>
  )
}

export default App