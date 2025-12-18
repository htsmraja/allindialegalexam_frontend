import React from 'react'
import { Link } from 'react-router-dom';

const Empaty = () => {
    return (
        <>
            <main style={{ margin: '0 auto', maxWidth: '500px' }}>
                <br />
                <br />
                <div className='mt-5 mb-5' align="center">
                    <img
                        src="/assets/images/empty-cart.webp"
                        alt="Empty Cart"
                        style={{ maxWidth: '270px', marginBottom: '20px' }}
                    />
                    <h2 className="mb-2" style={{ color: '#333' }}>
                        Your cart is empty
                    </h2>
                    <h5 className="mb-5" style={{ color: '#777' }}>
                        Looks like you haven’t added anything yet.
                    </h5>
                    <Link
                        to="/product-list"
                        className="btn btn-dark btn-rounded mt-2"
                        style={{
                            padding: '10px 24px',
                            fontSize: '15px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}

                    >
                        <i className="w-icon-long-arrow-left"></i>
                        Continue Shopping
                    </Link>
                </div>
                <br />
                <br />
            </main>
        </>
    )
}

export default Empaty