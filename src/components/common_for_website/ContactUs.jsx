import React from 'react'
import { Link } from 'react-router-dom'
import CommonLayout from './CommonLayout'

const ContactUs = () => {
  return (
    <>
      <div className='innerPageBx'>
        <CommonLayout>
          {/******** page header start ********/}
          <header
            className="heading-banner text-white bgCover"
            style={{ backgroundImage: "url(./assets/images/img23.jpg)" }}
          >
            <div className="container holder">
              <div className="align">
                <h1>Contact Us</h1>
              </div>
            </div>
          </header>
          <nav className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Contact</li>
              </ol>
            </div>
          </nav>
          {/******** page header end ********/}

          {/* contact page body start  */}
          <section className="contact-block">
            <div className="container">
              <header className="seperator-head text-center">
                <h2>Contact Details</h2>
                <p>Welcome to our Website. We are glad to have you around.</p>
              </header>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  {/* detail column */}
                  <div className="detail-column">
                    <span className="icn-wrap no-shrink element-block">
                      <img src="assets/images/icon11.png" alt="icon" />
                    </span>
                    <div className="descr-wrap">
                      <h3 className="text-uppercase">give us a call</h3>
                      <p>
                        <a href="tel:+618006592684">+61 (800) 659-2684</a>,{" "}
                        <a href="tel:+618006595214">+61 (800) 659-5214</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  {/* detail column */}
                  <div className="detail-column">
                    <span className="icn-wrap no-shrink element-block">
                      <img src="assets/images/icon12.png" alt="icon" />
                    </span>
                    <div className="descr-wrap">
                      <h3 className="text-uppercase">send us a message</h3>
                      <p>
                        <a href="mailto:Exampleid@cyberlms.com">Exampleid@cyberlms.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  {/* detail column */}
                  <div className="detail-column">
                    <span className="icn-wrap no-shrink element-block">
                      <img src="assets/images/icon13.png" alt="icon" />
                    </span>
                    <div className="descr-wrap">
                      <h3 className="text-uppercase">visit our location</h3>
                      <p>9015 Sunset Boulevard United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="sep-or element-block" data-text="or" />
              {/* contact form */}
              <form action="#" className="contact-form">
                <h3 className="text-center">Drop Us a Message</h3>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control element-block"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control element-block"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="form-group">
                      <textarea
                        className="form-control element-block"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-theme btn-warning text-uppercase font-lato fw-bold"
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
            {/* mapHolder */}
            <div className="mapHolder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13607.729903367896!2d74.30893281977539!3d31.498539800000007!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1530737870558"
                style={{ border: 0 }}
                allowFullScreen=""
                width="100%"
                height={400}
                frameBorder={0}
              />
              <span className="mapMarker">
                <img src="images/map-marker.png" alt="marker" />
              </span>
            </div>
            {/* btn aside block */}
            <aside className="btn-aside-block container">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col">
                  <h3>Have Any Questions?</h3>
                  <p>
                    Various versions years, sometimes by accident, sometimes on purpose
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 text-right col">
                  <a
                    href="#"
                    className="btn btn-warning btn-theme text-capitalize font-lato fw-normal"
                  >
                    Ask Question Now
                  </a>
                </div>
              </div>
            </aside>
          </section>

          {/* contact page body end  */}


        </CommonLayout>
      </div>
    </>
  )
}

export default ContactUs