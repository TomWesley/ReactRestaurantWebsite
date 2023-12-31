import React from 'react'
import Backgroundimage from '../../assets/images/background/image-4.jpg'
import { Link } from 'react-router-dom'
import logonew from '../../assets/images/logo.png'

function Main() {
  return (
    <>
      <footer className='main-footer'>
        <div
          className='image-layer'
          style={{ backgroundImage: `url(${Backgroundimage})` }}
        >
          {' '}
        </div>
        <div className='upper-section'>
          <div className='auto-container'>
            <div className='row clearfix'>
              <div className='footer-col info-col col-lg-6 col-md-12 col-sm-12'>
                <div
                  className='inner wow fadeInUp'
                  data-wow-delay='0ms'
                  data-wow-duration='1500ms'
                >
                  <div className='content'>
                    <div className='logo'>
                      <Link to='/' title='Delici - Restaurants HTML Template'>
                        <img
                          src={logonew}
                          alt=''
                          title='Delici - Restaurants HTML Template'
                        />
                      </Link>
                    </div>
                    <div className='info'>
                      <ul>
                        <li>188 Grand St, Brooklyn, NY 11211</li>

                        <li>
                          <Link>(347) 335-0006</Link>
                        </li>
                        <li>Open : 5:00 pm - 11:00 pm</li>
                      </ul>
                    </div>
                    <div className='separator'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className='newsletter'>
                      <h3>Be The Protagonist</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className='footer-col links-col col-lg-3 col-md-6 col-sm-12'>
                <div
                  className='inner wow fadeInLeft'
                  data-wow-delay='0ms'
                  data-wow-duration='1500ms'
                ></div>
              </div>

              <div className='footer-col links-col last col-lg-3 col-md-6 col-sm-12'>
                <div
                  className='inner wow fadeInRight'
                  data-wow-delay='0ms'
                  data-wow-duration='1500ms'
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='auto-container'>
            <div className='copyright'>
              &copy; 2023 All Rights Reserved | Crafted by{' '}
              <Link
                to='https://www.linkedin.com/in/thomasjohnwesley/'
                target='blank'
              >
                Thomas Wesley
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className='scroll-to-top scroll-to-target' data-target='html'>
        <span className='icon fa fa-angle-up'></span>
      </div>
    </>
  )
}

export default Main
