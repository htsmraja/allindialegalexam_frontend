import React from 'react'
import CommonLayout from './CommonLayout'
import { Link } from 'react-router-dom'

const AboutUs = () => {
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
                                <h1>About</h1>
                            </div>
                        </div>
                    </header>
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">About us</li>
                            </ol>
                        </div>
                    </nav>
                    {/******** page header end ********/}

                    {/* text block start */}
                    <article className="container text-info-block">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <h1>Before we get ahead of ourselves, we want to welcome you to here.</h1>
                                <p>
                                    Fusce eleifend donec sapien sed phase lusa. Pellentesque lacus vamus
                                    lorem arcu semper duiacCras ornare arcu avamus nda leo. Etiam ind arcu
                                    morbi usol justo mauris tempus pharetra interdum at congue semper purus.
                                    acus vamu lorem arcu semper duiacCras ornare arcu. Edison worked
                                    alongside partners, both financial and commercial,{" "}
                                </p>
                                <ul className="list-unstyled listDefault">
                                    <li>Thomas Edison may have been behind the invention.</li>
                                    <li>
                                        Edison worked alongside partners, both financial and commercial, to
                                        get his best inventions off the ground,
                                    </li>
                                    <li>Battling challenging cost targets and the need to build.</li>
                                    <li>Partnership with a supplier or original equipment manufacturer.</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <img
                                    src="./assets/images/img56.jpg"
                                    className="element-block image"
                                    alt="image description"
                                />
                            </div>
                        </div>
                    </article>
                    {/* text block end */}
                    
                </CommonLayout>
            </div>
        </>
    )
}

export default AboutUs