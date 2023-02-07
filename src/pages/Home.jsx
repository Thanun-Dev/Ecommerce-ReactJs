import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img 
              src="images/main-banner-1.jpg" 
              className='img-fluid rounded-3'
              alt="main banner" />
            </div>
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>IPad S13+ Pro</h5>
              <p>From $999 or 41.62$/mo.</p>
              <Link to='/' className='Button'>BUY NOW</Link>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative p-3">
                <img 
                src="images/catbanner-01.jpg" 
                className='img-fluid rounded-3'
                alt="small banner" />
              </div>
              <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>IPad S13+ Pro</h5>
              <p>From $999 or 41.62$/mo.</p>
              <Link to='/' className='Button'>BUY NOW</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home