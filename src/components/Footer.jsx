import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
              <input 
              type="text" 
              className="form-control py-2"
              placeholder="Enter your email address"
              aria-label='Enter your email address'
              aria-describedby='basic-addon2'
              />
              <span className="input-group-text p-3" id='basic-addon2'>Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                Toulkok, Phnom Penh, Cambodia
              </address>
              <a href="tel:+855 61339957" className='mt-3 d-block mb-1 text-white'>+855 61339957</a>
              <a href="mailto:ahdemo168@gmail.com" className='mt-2 d-block mb-0 text-white'>ahdemo168@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a href="#" className='text-white'>
                  <BsLinkedin className='fs-4' />
                </a>
                <a href="#" className='text-white'>
                  <BsFacebook className='fs-4' />
                </a>
                <a href="#" className='text-white'>
                  <BsTwitter className='fs-4' />
                </a>
                <a href="#" className='text-white'>
                  <BsInstagram className='fs-4' />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/' className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='/' className='text-white py-2 mb-1'>Terms and Conditions</Link>
              <Link to='/' className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='/' className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='/' className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/' className='text-white py-2 mb-1'>About Us</Link>
              <Link to='/' className='text-white py-2 mb-1'>Faq</Link>
              <Link to='/' className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/' className='text-white py-2 mb-1'>Laptops</Link>
              <Link to='/' className='text-white py-2 mb-1'>Headphones</Link>
              <Link to='/' className='text-white py-2 mb-1'>Tablets</Link>
              <Link to='/' className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Coding by Group 1 | All Rights Reserved
              </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer