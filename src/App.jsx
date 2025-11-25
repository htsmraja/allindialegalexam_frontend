import React from 'react'
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/course-list" element={<CourseList />} />
      <Route path="/course-deatils" element={<CourseDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/book-list" element={<BookList />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/cart-page" element={<CartPage />} />
      <Route path="/checkout-page" element={<CheckoutPage />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/wishlist-page" element={<Wishlist />} />

    </Routes>
  )
}

export default App