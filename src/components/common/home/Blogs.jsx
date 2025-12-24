import React from 'react'

const Blogs = () => {
  return (
    <>
      <section className="news-block container pt50 pb50">
        <header className="seperator-head text-center mb30">
          <h2>Recent Blogs</h2>
          <p>Share your work to collaboratve with our vibrant design element.</p>
        </header>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            {/* news post */}
            <article className="news-post">
              <div className="aligncenter">
                <a href="javascript:void(0)">
                  <img src="./assets/images/img17.jpg" alt="image desciption" />
                </a>
              </div>
              <h3>
                <a href="javascript:void(0)">
                  Best Educational Psd Template Launching Today
                </a>
              </h3>
              <p>
                Areas tackled in the most fundamental part of medical research include
                cellu lar and molecular biology…
              </p>
              <time dateTime="2011-01-12" className="time text-uppercase text-gray">
                Mar 05,2017 by <a href="javascript:void(0)">andrew caset</a>
              </time>
            </article>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            {/* news post */}
            <article className="news-post">
              <div className="aligncenter">
                <a href="javascript:void(0)">
                  <img src="./assets/images/img18.jpg" alt="image desciption" />
                </a>
              </div>
              <h3>
                <a href="javascript:void(0)">
                  Your one stop Solution for Android Development Needs
                </a>
              </h3>
              <p>
                Areas tackled in the most fundamental part of medical research include
                cellu lar and molecular biology…
              </p>
              <time dateTime="2011-01-12" className="time text-uppercase text-gray">
                Mar 05,2017 by <a href="javascript:void(0)">andrew caset</a>
              </time>
            </article>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            {/* news post */}
            <article className="news-post">
              <div className="aligncenter">
                <a href="javascript:void(0)">
                  <img src="./assets/images/img19.jpg" alt="image desciption" />
                </a>
              </div>
              <h3>
                <a href="javascript:void(0)">
                  Online Learning students council meeting 2017
                </a>
              </h3>
              <p>
                Areas tackled in the most fundamental part of medical research include
                cellu lar and molecular biology…
              </p>
              <time dateTime="2011-01-12" className="time text-uppercase text-gray">
                Mar 05,2017 by <a href="javascript:void(0)">andrew caset</a>
              </time>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs