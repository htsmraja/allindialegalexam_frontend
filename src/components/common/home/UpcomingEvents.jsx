import React from 'react'

const UpcomingEvents = () => {
  return (
    <>
    {/* Events part start */}
      <section className="upcoming-events-block container">
        <header className="block-header">
          <div className="pull-left">
            <h2 className="block-header-heading">Upcoming Courses</h2>
            <p>Recent and upcoming educational events listed here</p>
          </div>
          <a
            href="javascript:void(0)"
            className="btn btn-default text-uppercase pull-right"
          >
            View More
          </a>
        </header>
        {/* upcoming events list */}
        <ul className="list-unstyled upcoming-events-list">
          <li>
            <div className="alignright">
              <img src="./assets/images/img11.jpg" alt="image description" />
            </div>
            <div className="alignleft">
              <time dateTime="2011-01-12" className="time text-uppercase">
                <strong className="date fw-normal">01</strong>
                <strong className="month fw-light font-lato">march</strong>
                <strong className="day fw-light font-lato">WEDNESDAY</strong>
              </time>
            </div>
            <div className="description-wrap">
              <h3 className="list-heading">
                <a href="javascript:void(0)">
                  WordPress Theme Development with Bootstrap
                </a>
              </h3>
              <address>
                <time dateTime="2011-01-12">8:00 am - 5:00 pm</time> | Great Russell
                Street, WC1B 3DG UK
              </address>
              <a href="javascript:void(0)" className="btn btn-default text-uppercase">
                register
              </a>
            </div>
          </li>
          <li>
            <div className="alignright">
              <img src="./assets/images/img12.jpg" alt="image description" />
            </div>
            <div className="alignleft">
              <time dateTime="2011-01-12" className="time text-uppercase">
                <strong className="date fw-normal">05</strong>
                <strong className="month fw-light font-lato">march</strong>
                <strong className="day fw-light font-lato">SATURDAY</strong>
              </time>
            </div>
            <div className="description-wrap">
              <h3 className="list-heading">
                <a href="javascript:void(0)">Build Apps with React Native</a>
              </h3>
              <address>
                <time dateTime="2011-01-12">12:00 pm - 5:00 pm</time> | No1 Warehouse
                London, UK
              </address>
              <a href="javascript:void(0)" className="btn btn-default text-uppercase">
                register
              </a>
            </div>
          </li>
          <li>
            <div className="alignright">
              <img src="./assets/images/img13.jpg" alt="image description" />
            </div>
            <div className="alignleft">
              <time dateTime="2011-01-12" className="time text-uppercase">
                <strong className="date fw-normal">13</strong>
                <strong className="month fw-light font-lato">march</strong>
                <strong className="day fw-light font-lato">Thursday</strong>
              </time>
            </div>
            <div className="description-wrap">
              <h3 className="list-heading">
                <a href="javascript:void(0)">
                  Free Yoga &amp; Excercise Class at Every Morning
                </a>
              </h3>
              <address>
                <time dateTime="2011-01-12">4:00 pm - 8:00 pm</time> | 21 New Globe
                Walk London, UK
              </address>
              <a href="javascript:void(0)" className="btn btn-default text-uppercase">
                register
              </a>
            </div>
          </li>
        </ul>
      </section>
      {/* Events part end */}
    </>
  )
}

export default UpcomingEvents