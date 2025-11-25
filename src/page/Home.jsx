import React from 'react'
import CommonLayout from '../components/common_for_website/CommonLayout'
import Banner from '../components/common/home/Banner'
import Courses from '../components/common/home/Courses'
import Counter from '../components/common/home/Counter'
import SearchBox from '../components/common/home/SearchBox'
import UpcomingEvents from '../components/common/home/UpcomingEvents'
import Testimonial from '../components/common/home/Testimonial'
import Newsletter from '../components/common/home/Newsletter'
import Blogs from '../components/common/home/Blogs'
import BooksAndNotes from '../components/common/home/BooksAndNotes'
import UpComingExam from '../components/common/home/UpComingExam'
import MockTests from '../components/common/home/MockTests'

const Home = () => {
    return (
        <CommonLayout>
            <Banner />
            <Courses />
            <BooksAndNotes />
            <MockTests />
            <Counter />
            {/******* remove this *******/}
            {/* <UpcomingEvents/> */}
            {/* <SearchBox/> */}
            {/* <UpComingExam /> */}
            <Testimonial />
            <Blogs />
            <Newsletter />
        </CommonLayout>
    )
}

export default Home