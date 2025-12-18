
// import React from 'react'

// const MockTesList = () => {
//     return (
//         <div>MockTesList</div>
//     )
// }

// export default MockTesList


import React, { useEffect } from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'
import { useCommonContext } from '../../context/commonContext';
import MockTestCard from './MockTestCard';

const MockTesList = () => {
    const { getCourseList, courseList, getExamTypeList, examTypeList, getMockTestList, mockTestList } = useCommonContext();
    const filters = { page: 1, limit: 9 };
    const key = JSON.stringify(filters);
    useEffect(() => {
        getCourseList(filters);
        getExamTypeList();
        getMockTestList({});
    }, [])
    // const courses = courseList?.data?.[key]?.products || [];
    // const isLoading = courseList?.loading;
    const mockTests = mockTestList?.data || [];
    const isLoading = mockTestList?.loading;
    console.log(isLoading, "mockTestList")
    const isDateActive = (start, end) => {
        if (!start || !end) return false;
        const now = new Date();
        return now >= new Date(start) && now <= new Date(end);
    };

    const getPrice = (b) => {
        // subscription allowed means paid course
        if (!b.is_subscription_allowed) return "Free";

        const isOfferActive = isDateActive(b.offer_start, b.offer_end);

        // OFFER PRICE
        if (b.mark_as_offer && b.offer_price && isOfferActive) {
            return `₹${b.offer_price}`;
        }

        // SALE PRICE
        if (b.sale_price) {
            return `₹${b.sale_price}`;
        }

        // NORMAL PRICE
        return `₹${b.price}`;
    };

    return (
        <>
            <div className='innerPageBx'>
                <CommonLayout>

                    {/* page header start */}
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">Mock Test List</li>
                            </ol>
                        </div>
                    </nav>
                    {/* page header end */}

                    {/* page body part start */}
                    <div id="two-columns" className="container">
                        <div className="row">
                            {/* content */}
                            <article id="content" className="col-xs-12 col-md-9">
                                {/* show head */}
                                <header className="show-head">
                                    <p> Showing 1–9 of 15 results</p>
                                    <select className="form-control">
                                        <option value={0}>All Mock Test</option>
                                        <option value={0}>All Mock Test</option>
                                        <option value={0}>All Mock Test</option>
                                        <option value={0}>All Mock Test</option>
                                    </select>
                                </header>
                                <div className="row flex-wrap">
                                    {isLoading &&
                                        [...Array(6)].map((_, i) => (
                                            <div key={i} className="col-xs-12 col-sm-6 col-lg-4">
                                                <article className="popular-post">

                                                    {/* Image Skeleton */}
                                                    <div className="aligncenter skeleton" style={{ height: 200, marginBottom: 10 }}></div>

                                                    {/* Price Skeleton */}
                                                    <div className="skeleton" style={{ width: "40%", height: 20, marginBottom: 10 }}></div>

                                                    {/* Title skeleton */}
                                                    <div className="skeleton" style={{ width: "80%", height: 20, marginBottom: 8 }}></div>
                                                    <div className="skeleton" style={{ width: "60%", height: 20, marginBottom: 15 }}></div>

                                                    {/* Author skeleton */}
                                                    <div className="d-flex align-items-center">
                                                        <div className="skeleton" style={{ width: 40, height: 40, borderRadius: "50%" }}></div>
                                                        <div className="skeleton" style={{ width: "50%", height: 15, marginLeft: 10 }}></div>
                                                    </div>

                                                    {/* Footer skeleton */}
                                                    <div className="d-flex justify-content-between mt-3">
                                                        <div className="skeleton" style={{ width: "30%", height: 15 }}></div>
                                                        <div className="skeleton" style={{ width: "30%", height: 15 }}></div>
                                                        <div className="skeleton" style={{ width: "30%", height: 15 }}></div>
                                                    </div>

                                                </article>
                                            </div>
                                        ))
                                    }

                                    {!isLoading &&
                                        mockTests.length > 0 &&
                                        mockTests.map((b, index) => (
                                            <div className="col-xs-12 col-sm-6 col-lg-4">
                                                {/* popular post */}
                                                <MockTestCard b={b} />
                                            </div>
                                        ))}


                                </div>
                                <nav aria-label="Page navigation">
                                    {/* pagination */}
                                    <ul className="pagination">
                                        <li className="active">
                                            <a href="#">
                                                1 <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">›</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </article>
                            {/* sidebar */}
                            <aside className="col-xs-12 col-md-3" id="sidebar">
                                {/* widget search */}
                                <section className="widget widget_search">
                                    <h3>Mock Test Search</h3>
                                    {/* search form */}
                                    <form action="#" className="search-form">
                                        <fieldset>
                                            <input
                                                placeholder=" Search…"
                                                className="form-control"
                                                name="s"
                                                type="search"
                                            />
                                            <button type="button" className="fas fa-search">
                                                <span className="sr-only">search</span>
                                            </button>
                                        </fieldset>
                                    </form>
                                </section>
                                {/* widget categories */}
                                <section className="widget widget_categories">
                                    <h3>Exam Types</h3>
                                    <ul className="list-unstyled text-capitalize font-lato">
                                        {
                                            examTypeList?.data?.length > 0 && (
                                                examTypeList?.data?.map((cat) => (
                                                    <li className="cat-item cat-item-1" key={cat.id}>
                                                        <a href="#">{cat.name}</a>
                                                    </li>
                                                ))

                                            )
                                        }
                                        {/* <li className="cat-item cat-item-1">
                      <a href="#">Business</a>
                    </li>
                    <li className="cat-item active cat-item-2">
                      <a href="#">Design</a>
                    </li>
                    <li className="cat-item cat-item-3">
                      <a href="#">Programing Language</a>
                    </li>
                    <li className="cat-item cat-item-4">
                      <a href="#">Photography</a>
                    </li>
                    <li className="cat-item cat-item-5">
                      <a href="#">Language</a>
                    </li>
                    <li className="cat-item cat-item-6">
                      <a href="#">Life Style</a>
                    </li>
                    <li className="cat-item cat-item-7">
                      <a href="#">IT &amp; Software</a>
                    </li> */}
                                    </ul>
                                </section>
                                {/* widget intro */}
                                <section className="widget widget_intro">
                                    <h3>Course Intro</h3>
                                    <div className="aligncenter overlay">
                                        <a
                                            href="http://www.youtube.com/embed/9bZkp7q19f0?autoplay=1"
                                            className="btn-play far fa-play-circle lightbox fancybox.iframe"
                                            target='_blank'
                                        />
                                        <img src="./assets/images/img32.jpg" alt="image description" />
                                    </div>
                                </section>
                                {/* widget popular posts */}
                                <section className="widget widget_popular_posts">
                                    <h3>Popular Mock Tests</h3>
                                    {/* widget cources list */}
                                    <ul className="widget-cources-list list-unstyled">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div className="alignleft large">
                                                    <img src="./assets/images/img33.jpg" alt="image description" />
                                                </div>
                                                <div className="description-wrap">
                                                    <h4>Introduction to Mobile Apps Development</h4>
                                                    <strong className="price text-primary element-block font-lato text-uppercase">
                                                        $99.00
                                                    </strong>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div className="alignleft large">
                                                    <img src="./assets/images/img33.jpg" alt="image description" />
                                                </div>
                                                <div className="description-wrap">
                                                    <h4>Become a Professional Film Maker</h4>
                                                    <strong className="price text-success element-block font-lato text-uppercase">
                                                        Free
                                                    </strong>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div className="alignleft large">
                                                    <img src="./assets/images/img33.jpg" alt="image description" />
                                                </div>
                                                <div className="description-wrap">
                                                    <h4>Swift Programming For Beginners</h4>
                                                    <strong className="price text-primary element-block font-lato text-uppercase">
                                                        $75.00
                                                    </strong>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </aside>
                        </div>
                    </div>

                    {/* page body part end */}

                </CommonLayout>
            </div>
        </>
    )
}

export default MockTesList