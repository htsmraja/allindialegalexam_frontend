import React, { useEffect } from 'react'
import CommonLayout from '../../common_for_website/CommonLayout'
import { Link } from 'react-router-dom'
import { useCommonContext } from '../../../context/commonContext'
import { useAuthContext } from '../../../context/authcontext'

const MyAccount = () => {
  const { getUserProfile, userData, isLogin } = useAuthContext();
  // useEffect(() => {
  //   if (isLogin) {
  //     getUserProfile();
  //   }
  // }, [isLogin]);
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
                <li className="active">My Account</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <div className="cart-content-block container">
            <div className="row">
              {/* LEFT MENU */}
              <div className="col-sm-3">
                <div className="account-box text-center">
                  <img src="./assets/images/img36.jpg" className="profile-img" alt="" />
                  <h4 style={{ marginBottom: '2px' }}>{userData?.first_name + " " + userData?.last_name}</h4>
                  <p className="text-muted">{userData?.email}</p>
                  <hr />
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active"><Link>My Account</Link></li>
                    <li><Link to='/wishlist-page'>Wish List</Link></li>
                    <li><Link to='/checkout-page'>Checkout</Link></li>
                    <li><Link to='/cart-page'>Cart</Link></li>
                    <li><Link to='/order-list'>Order List</Link></li>
                    <li><Link to='/my-subscribtion'>Subscribtion List</Link></li>
                    <li><Link to='/'>Logout</Link></li>
                  </ul>
                </div>
              </div>
              {/* RIGHT CONTENT */}
              <div className="col-sm-9">
                <div className="account-box">
                  <h3 className="section-title">My Profile</h3>
                  <div className="row info-row">
                    <div className="col-sm-4 info-label">Full Name:</div>
                    <div className="col-sm-8">{userData?.first_name + " " + userData?.last_name}</div>
                  </div>
                  <div className="row info-row">
                    <div className="col-sm-4 info-label">Email:</div>
                    <div className="col-sm-8">{userData?.email}</div>
                  </div>
                  <div className="row info-row">
                    <div className="col-sm-4 info-label">Phone:</div>
                    <div className="col-sm-8">+91 {userData?.mobile}</div>
                  </div>
                  <div className="row info-row">
                    <div className="col-sm-4 info-label">Joined:</div>
                    <div className="col-sm-8"> {userData?.created_at
                      ? new Date(userData.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                      : ""}
                    </div>
                  </div>
                  <hr />
                  <button className="btn btn-primary">Edit Profile</button>
                  <button className="btn btn-default">Update Photo</button>
                </div>
              </div>
            </div>
          </div>
          {/* page body part end */}

        </CommonLayout>
      </div>
    </>
  )
}

export default MyAccount