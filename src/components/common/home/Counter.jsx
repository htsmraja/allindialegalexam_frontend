import React from 'react'

const Counter = () => {
  return (
    <>
      {/* counter  part start */}
      <aside
        className="bg-cover counter-aside"
        style={{ backgroundImage: "url(./assets/images/img10.jpg)" }}
      >
        <div className="container align-wrap">
          <div className="align">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col">
                <h2 className="counter-aside-heading">
                  <strong className="countdown element-block">2500+</strong>
                  <strong className="text element-block">Class Completed</strong>
                </h2>
              </div>
              <div className="col-xs-12 col-sm-3 col">
                <h2 className="counter-aside-heading">
                  <strong className="countdown element-block">600+</strong>
                  <strong className="text element-block">Student Enrolled</strong>
                </h2>
              </div>
              <div className="col-xs-12 col-sm-3 col">
                <h2 className="counter-aside-heading">
                  <strong className="countdown element-block">32+</strong>
                  <strong className="text element-block">Teacher Available</strong>
                </h2>
              </div>
              <div className="col-xs-12 col-sm-3 col">
                <h2 className="counter-aside-heading">
                  <strong className="countdown element-block">1200+</strong>
                  <strong className="text element-block">Mock Test Conducted</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* counter  part end */}
    </>
  )
}

export default Counter