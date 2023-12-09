import React from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'
import bg25 from '../../assets/images/background/bg-25.png'
import bg6 from '../../assets/images/background/bg-6.png'
import restro from '../../assets/images/resource/restaurant.png'

function Contactbanner() {
  return (
    <>
      <div className='contact-map'>
        <Iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.173726865456!2d-73.96335762390618!3d40.71419193748118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596068601087%3A0x736770b46034db81!2sThe%20Rusty%20Face!5e0!3m2!1sen!2sus!4v1702069069379!5m2!1sen!2sus'
          width='100%'
          height='500'
          style='border:0;'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></Iframe>
      </div>

      <section className='contact-page'>
        <div className='location-center'>
          <div className='auto-container'>
            <div className='cinfo-box'>
              <div className='row clearfix'>
                <div className='contactinfo-block col-lg-4 col-md-4 col-sm-12'>
                  <div
                    className='inner-box wow fadeInUp'
                    data-wow-duration='1500ms'
                    data-wow-delay='300ms'
                  >
                    <h4>Brunch</h4>
                    <div className='text'>
                      {' '}
                      Weekends <br /> 11.30 am - 3.30pm
                    </div>
                  </div>
                </div>

                <div className='contactinfo-block col-lg-4 col-md-4 col-sm-12'>
                  <div
                    className='inner-box cp-seprator wow fadeInUp'
                    data-wow-duration='1500ms'
                    data-wow-delay='300ms'
                  >
                    <h4>Contact Information</h4>
                    <div className='text'>
                      188 Grand Street, Brooklyn, NY 11211
                      <br />
                      Email : booking@domainname.com
                    </div>
                    <div className='more-link'>
                      <Link>(347) 335-0006</Link>
                    </div>
                  </div>
                </div>

                <div className='contactinfo-block col-lg-4 col-md-4 col-sm-12'>
                  <div
                    className='inner-box wow fadeInUp'
                    data-wow-duration='1500ms'
                    data-wow-delay='600ms'
                  >
                    <h4>Evenings</h4>
                    <div className='text'>
                      Tuesday to Friday
                      <br />
                      4.00 pm - 11.00 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactbanner
