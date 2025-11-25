import React from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'


const CourseDetails = () => {
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
                <li className="active">Course Details</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <div id="two-columns" className="container">
            <div className="row">
              {/* content */}
              <article id="content" className="col-xs-12 col-md-9">
                {/* content h1 */}
                <h1 className="content-h1 fw-semi">Swift Programming for Beginners</h1>
                {/* view header */}
                <header className="view-header row">
                  <div className="col-xs-12 col-sm-9 d-flex">
                    <div className="d-col">
                      {/* post author */}
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="#">
                            <img
                              src="./assets/images/img08.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <div className="description-wrap">
                          <h2 className="author-heading">
                            <a href="#">Instructor</a>
                          </h2>
                          <h3 className="author-heading-subtitle text-uppercase">
                            lospher cooke
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="d-col">
                      {/* post author */}
                      <div className="post-author">
                        <div className="alignleft no-shrink icn-wrap">
                          <i className="far fa-bookmark" />
                        </div>
                        <div className="description-wrap">
                          <h2 className="author-heading">
                            <a href="#">Category</a>
                          </h2>
                          <h3 className="author-heading-subtitle text-uppercase">
                            Programing language
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3">
                    <div className="rating-holder">
                      <ul className="star-rating list-unstyled justify-end">
                        <li>
                          <span className="fas fa-star">
                            <span className="sr-only">star</span>
                          </span>
                        </li>
                        <li>
                          <span className="fas fa-star">
                            <span className="sr-only">star</span>
                          </span>
                        </li>
                        <li>
                          <span className="fas fa-star">
                            <span className="sr-only">star</span>
                          </span>
                        </li>
                        <li>
                          <span className="fas fa-star">
                            <span className="sr-only">star</span>
                          </span>
                        </li>
                        <li>
                          <span className="fas fa-star">
                            <span className="sr-only">star</span>
                          </span>
                        </li>
                      </ul>
                      <strong className="element-block text-right subtitle fw-normal">
                        (2 Reviews)
                      </strong>
                    </div>
                  </div>
                </header>
                <div className="aligncenter content-aligncenter">
                  <img src="./assets/images/img35.jpg" alt="image description" />
                </div>
                <h3 className="content-h3">Course Description</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for high level
                  overviews. Iterative approaches to corporate strategy foster
                  collaborative thinking to further the overall value proposition.
                  Organically grow the holistic world view of disruptive innovation via
                  workplace diversity and empowerment.
                </p>
                <p>
                  Encyclopaedia galactica Orion's sword explorations vanquish the
                  impossible, astonishment radio telescope with pretty stories for which
                  there's little good evidence light years muse about, great turbulent
                  clouds billions upon billions the sky calls to us realm of the galaxies
                  laws of physics globular star cluster. Quasar the only home we've ever
                  known extraordi claims require extraordinary evidence billions upon
                  billions Drake Equation.
                </p>
                <h3 className="content-h3">What you will learn</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for high level
                  overviews. Iterative approaches to corporate strategy foster
                  collaborative thinking to further the overall value proposition.
                  Organically grow the holistic world view of disruptive innovation via
                  workplace diversity and empowerment.
                </p>
                <ul className="listDefault list-unstyled">
                  <li>Thomas Edison may have been behind the invention.</li>
                  <li>
                    Edison worked alongside partners, both financial and commercial, to
                    get his best inventions off the ground,
                  </li>
                  <li>Battling challenging cost targets and the need to build.</li>
                </ul>
                <p>
                  Quasar the only home we've ever known extraordinary claims require
                  extraordinary evidence billions billions Drake Eqa tion. Stirred by
                  starlight! At the edge of forever. Rich in mystery Sea of Tranquility.
                  Are creatures of the cosmos descend from astronomers. Trillion and
                  billions upon billions upon billions upon billions upon billions. upon
                  billions upon billions!
                </p>
                <h2>Carriculam</h2>
                {/* sectionRow */}
                <section className="sectionRow">
                  <h2 className="h6 text-uppercase fw-semi rowHeading">
                    Section-1: Introduction
                  </h2>
                  {/* sectionRowPanelGroup */}
                  <div
                    className="panel-group sectionRowPanelGroup"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="fas fa-play-circle inlineIcn" /> Welcome to
                              the course{" "}
                              <span className="label label-primary text-white text-uppercase">
                                Video
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <span className="tagText bg-primary fw-semi text-white text-uppercase">
                                preview
                              </span>
                              <time dateTime="2011-01-12" className="timeCount">
                                17 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="far fa-file inlineIcn" /> Add and manage users{" "}
                              <span className="label label-success text-white text-uppercase">
                                free
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <time dateTime="2011-01-12" className="timeCount">
                                25 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapseTwo"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingThree">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="fas fa-puzzle-piece inlineIcn" /> Magic wand
                              vs quick selection{" "}
                              <span className="label label-primary text-white text-uppercase">
                                Quiz
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <time dateTime="2011-01-12" className="timeCount">
                                37 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingFour">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="fas fa-play-circle inlineIcn" /> How to use
                              LearnPress{" "}
                              <span className="label label-primary text-white text-uppercase">
                                Video
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <span className="tagText bg-primary fw-semi text-white text-uppercase">
                                preview
                              </span>
                              <time dateTime="2011-01-12" className="timeCount">
                                22 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapseFour"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingFive">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="far fa-file inlineIcn" /> Add and manage users{" "}
                              <span className="label label-warning text-white text-uppercase">
                                Seminare
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <time dateTime="2011-01-12" className="timeCount">
                                48 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapseFive"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* sectionRow */}
                <section className="sectionRow">
                  <h2 className="h6 text-uppercase fw-semi rowHeading">
                    Section-2: Basic tools Management
                  </h2>
                  {/* sectionRowPanelGroup */}
                  <div
                    className="panel-group sectionRowPanelGroup"
                    id="accordion2"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading2One">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse2One"
                            aria-expanded="false"
                            aria-controls="collapse2One"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="fas fa-play-circle inlineIcn" /> Welcome to
                              the course{" "}
                              <span className="label label-primary text-white text-uppercase">
                                Video
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <span className="tagText bg-primary fw-semi text-white text-uppercase">
                                preview
                              </span>
                              <time dateTime="2011-01-12" className="timeCount">
                                17 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapse2One"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading2One"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* panel */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading2Two">
                        <h3 className="panel-title fw-normal">
                          <a
                            className="accOpener"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse2Two"
                            aria-expanded="false"
                            aria-controls="collapse2Two"
                          >
                            <span className="accOpenerCol">
                              <i className="fas fa-chevron-circle-right accOpenerIcn" />
                              <i className="far fa-file inlineIcn" /> Add and manage users{" "}
                              <span className="label label-success text-white text-uppercase">
                                free
                              </span>
                            </span>
                            <span className="accOpenerCol hd-phone">
                              <time dateTime="2011-01-12" className="timeCount">
                                25 Min
                              </time>
                            </span>
                          </a>
                        </h3>
                      </div>
                      {/* collapseOne */}
                      <div
                        id="collapse2Two"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading2Two"
                      >
                        <div className="panel-body">
                          <p>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity beta test Override the digital divide with
                            additional clickthroughs from DevOps. Nanotechnology immersion
                            along the information highway will close the loop on focusing
                            solely on the bottom line.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* bookmarkFoot */}
                <div className="bookmarkFoot">
                  <div className="bookmarkCol">
                    <ul className="socail-networks list-unstyled">
                      <li>
                        <a href="#" className="facebook">
                          <span className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="google">
                          <span className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fas fa-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bookmarkCol text-right">
                    <a
                      href="#"
                      className="btn btn-theme btn-warning text-uppercase fw-bold"
                    >
                      Bookmark this course
                    </a>
                  </div>
                </div>
                <h2>About Instructor</h2>
                {/* instructorInfoBox */}
                <div className="instructorInfoBox">
                  <div className="alignleft">
                    <a href="javascript:void(0)">
                      <img src="./assets/images/img36.jpg" alt="Merry Jhonson" />
                    </a>
                  </div>
                  <div className="description-wrap">
                    <h3 className="fw-normal">
                      <a href="javascript:void(0)">Merry Jhonson</a>
                    </h3>
                    <h4 className="fw-normal">Back-end Developer</h4>
                    <p>
                      Encyclopaedia galactica Orion's sword explorations vanquish the
                      impossible, astonishment radio telescope with pretty stories for
                      which there's little good.
                    </p>
                    <a
                      href="#"
                      className="btn btn-default font-lato fw-semi text-uppercase"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
                <h2>Reviews</h2>
                <h3 className="h6 fw-semi">There are 2 reviews on this course</h3>
                {/* reviewsList */}
                <ul className="list-unstyled reviewsList">
                  <li>
                    <div className="alignleft">
                      <a href="javascript:void(0)">
                        <img src="./assets/images/img37.jpg" alt="Lavin Duster" />
                      </a>
                    </div>
                    <div className="description-wrap">
                      <div className="descrHead">
                        <h3>
                          Lavin Duster – <time dateTime="2011-01-12">March 7, 2016</time>
                        </h3>
                        <ul className="star-rating list-unstyled justify-end">
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Brunch fap cardigan, gentrify put a bird on it distillery
                        mumblecore you probably haven't heard of them asymmetrical
                        bushwick. Put a bird on it schlitz fashion.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="alignleft">
                      <a href="javascript:void(0)">
                        <img src="./assets/images/img38.jpg" alt="Tim Cook" />
                      </a>
                    </div>
                    <div className="description-wrap">
                      <div className="descrHead">
                        <h3>
                          Tim Cook – <time dateTime="2011-01-12">March 5, 2016</time>
                        </h3>
                        <ul className="star-rating list-unstyled justify-end">
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                          <li>
                            <span className="fas fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Flxie sartorial cray flexitarian pop-up health goth single-origin
                        coffee sriracha
                      </p>
                    </div>
                  </li>
                </ul>
                {/* reviesSubmissionForm */}
                <form action="#" className="reviesSubmissionForm">
                  <h2 className="text-noCase">Add a Review</h2>
                  <p>
                    Your email address will not be published. Required fields are marked{" "}
                    <span className="required">*</span>
                  </p>
                  <div className="form-group">
                    <span className="formLabel fw-normal font-lato no-shrink">
                      Your Rating
                    </span>
                    <ul className="star-rating list-unstyled">
                      <li>
                        <input type="checkbox" id="rate1" className="customFormReset" />
                        <label htmlFor="rate1" className="fas fa-star">
                          <span className="sr-only">star</span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="rate2" className="customFormReset" />
                        <label htmlFor="rate2" className="fas fa-star">
                          <span className="sr-only">star</span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="rate3" className="customFormReset" />
                        <label htmlFor="rate3" className="fas fa-star">
                          <span className="sr-only">star</span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="rate4" className="customFormReset" />
                        <label htmlFor="rate4" className="fas fa-star">
                          <span className="sr-only">star</span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="rate5" className="customFormReset" />
                        <label htmlFor="rate5" className="fas fa-star">
                          <span className="sr-only">star</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="rview"
                      className="formLabel fw-normal font-lato no-shrink"
                    >
                      Your Review <span className="required">*</span>
                    </label>
                    <textarea
                      id="rview"
                      className="form-control element-block"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="formLabel fw-normal font-lato no-shrink"
                    >
                      Name <span className="required">*</span>
                    </label>
                    <input type="text" id="name" className="form-control element-block" />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="Email"
                      className="formLabel fw-normal font-lato no-shrink"
                    >
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="Email"
                      className="form-control element-block"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-theme btn-warning text-uppercase font-lato fw-bold"
                  >
                    Submit
                  </button>
                </form>
              </article>
              {/* sidebar */}
              <aside className="col-xs-12 col-md-3" id="sidebar">
                {/* widget course select */}
                <section className="widget widget_box widget_course_select">
                  <header className="widgetHead text-center bg-theme">
                    <h3 className="text-uppercase">Take This Course</h3>
                  </header>
                  <strong className="price element-block font-lato" data-label="price:">
                    £39.00
                  </strong>
                  <ul className="list-unstyled font-lato">
                    <li>
                      <i className="far fa-user icn no-shrink" /> 199 Students
                    </li>
                    <li>
                      <i className="far fa-clock icn no-shrink" /> Duration: 30 days
                    </li>
                    <li>
                      <i className="fas fa-bullhorn icn no-shrink" /> Lectures: 10
                    </li>
                    <li>
                      <i className="far fa-play-circle icn no-shrink" /> Video: 12 hours
                    </li>
                    <li>
                      <i className="far fa-address-card icn no-shrink" /> Certificate of
                      Completion
                    </li>
                  </ul>
                </section>
                {/* widget categories */}
                <section className="widget widget_categories">
                  <h3>Course Categories</h3>
                  <ul className="list-unstyled text-capitalize font-lato">
                    <li className="cat-item cat-item-1">
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
                    </li>
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
                  <h3>Popular Courses</h3>
                  {/* widget cources list */}
                  <ul className="widget-cources-list list-unstyled">
                    <li>
                      <a href="javascript:void(0)">
                        <div className="alignleft">
                          <img src="./assets/images/img20.jpg" alt="image description" />
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
                        <div className="alignleft">
                          <img src="./assets/images/img21.jpg" alt="image description" />
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
                        <div className="alignleft">
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
                {/* widget tags */}
                <nav className="widget widget_tags">
                  <h3>Tags</h3>
                  {/* tag clouds */}
                  <ul className="list-unstyled tag-clouds font-lato">
                    <li>
                      <a href="#">Future</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Coding</a>
                    </li>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
          {/* page body part end */}

        </CommonLayout>
      </div>
    </>
  )
}

export default CourseDetails