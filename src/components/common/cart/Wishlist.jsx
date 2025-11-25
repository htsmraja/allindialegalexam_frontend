import React from 'react'
import CommonLayout from '../../common_for_website/CommonLayout'
import { Link } from 'react-router-dom'

const Wishlist = () => {
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
                <li className="active">Wishlist</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <section className="cart-content-block container">
            {/* cart form */}
            <form className="cart-form">
              <div className="table-wrap" style={{border:'1px solid #e8e8e8'}}>                
                {/* cart data table */}
                <table className="table tab-full-responsive font-lato" style={{marginBottom:'0px'}}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="./assets/images/img79.jpg" alt="image description" /></td>
                      <td><b>Wirebound Notebook</b><br />Sturdy wirebound notebook perfect for work, study, and ideas.</td>
                      <td><strong className="price element-block"> $68.00</strong></td>
                      <td><Link className='text-danger'><i className='fas fa-times'></i></Link></td>
                    </tr>
                    <tr>
                      <td><img src="./assets/images/img80.jpg" alt="image description" /></td>
                      <td><b>Compact Stabler - Blue</b><br />Compact blue stapler designed for smooth, reliable stapling.</td>
                      <td><strong className="price element-block"> $68.00</strong></td>
                      <td><Link className='text-danger'><i className='fas fa-times'></i></Link></td>
                    </tr>
                    <tr>
                      <td><img src="./assets/images/img81.jpg" alt="image description" /></td>
                      <td><b>Wooden Pencil Yellow</b><br />Classic yellow wooden pencil for smooth, precise writing.</td>
                      <td><strong className="price element-block"> $68.00</strong></td>
                      <td><Link className='text-danger'><i className='fas fa-times'></i></Link></td>
                    </tr>
                    <tr>
                      <td><img src="./assets/images/img79.jpg" alt="image description" /></td>
                      <td><b>Wirebound Notebook</b><br />Sturdy wirebound notebook perfect for work, study, and ideas.</td>
                      <td><strong className="price element-block"> $68.00</strong></td>
                      <td><Link className='text-danger'><i className='fas fa-times'></i></Link></td>
                    </tr>
                    <tr>
                      <td><img src="./assets/images/img80.jpg" alt="image description" /></td>
                      <td><b>Compact Stabler - Blue</b><br />Compact blue stapler designed for smooth, reliable stapling.</td>
                      <td><strong className="price element-block"> $68.00</strong></td>
                      <td><Link className='text-danger'><i className='fas fa-times'></i></Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </section>
          {/* page body part end */}

        </CommonLayout>
        </div>
      </>
      )
}

      export default Wishlist