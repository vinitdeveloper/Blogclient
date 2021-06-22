import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="container">
                <img src="https://www.humepartners.com.au/wp-content/uploads/2019/02/404-page-04.png" className="img-fluid page-not-found" alt="404" />
            </div>
            <Footer />
        </>
    )
}
