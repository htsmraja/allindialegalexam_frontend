import React from 'react'

const Newsletter = () => {
  return (
    <>
      <aside className="subscription-aside-block bg-theme text-white">
        {/* newsletter sub form */}
        <form className="container newsletter-sub-form">
          <div className="row form-holder">
            <div className="col-xs-12 col-sm-6 col">
              <div className="text-wrap">
                <span className="element-block icn no-shrink rounded-circle">
                  <i className="far fa-envelope-open">
                    <span className="sr-only">icn</span>
                  </i>
                </span>
                <div className="inner-wrap">
                  <label htmlFor="email">Signup for Newsletter</label>
                  <p>Subscribe now and receive weekly newsletter with new updates.</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col">
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email…"
                />
                <span className="input-group-btn">
                  <button className="btn btn-dark text-uppercase" type="button">
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </aside>
    </>
  )
}

export default Newsletter