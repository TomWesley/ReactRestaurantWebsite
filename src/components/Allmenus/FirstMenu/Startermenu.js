import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'
import menuone from '../../../assets/images/resource/menus-1.jpg'
import menutwo from '../../../assets/images/resource/menus-2.jpg'
import menuthree from '../../../assets/images/resource/menus-3.jpg'

function Startermenu() {
  return (
    <>
      {/* Drinks  */}
      <section className='menu-one'>
        <div className='auto-container'>
          <div className='title-box centered'>
            <div className='subtitle'>
              <span>Drinks Menu</span>
            </div>
            <div className='pattern-image'>
              <img
                src={
                  require('../../../assets/images/icons/separator.svg').default
                }
                alt='mySvgImage'
              />
            </div>

            <h2>Specialty Cocktails</h2>
          </div>

          <div className='row clearfix'>
            <div className='image-col col-lg-7 col-md-12 col-sm-12'>
              <div className='inner'>
                <div className='image'>
                  <img src={menuone} alt='' />
                </div>
              </div>
            </div>
            <div className='menu-col col-lg-5 col-md-12 col-sm-12'>
              <div className='inner'>
                <div className='dish-block'>
                  <div className='inner-box'>
                    <div className='title clearfix'>
                      <div className='ttl clearfix'>
                        <h5>
                          <Link to='#'>The Rusty Old Fashioned</Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$22.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Bourbon, Cinnamon, Orange peel, Angostura
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='dish-block'>
                  <div className='inner-box'>
                    <div className='title clearfix'>
                      <div className='ttl clearfix'>
                        <h5>
                          <Link to='#'>
                            The Second Circle{' '}
                            {/* <span className='s-info'>SEASONAL</span> */}
                          </Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$17.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>Ford's Gin, Rosemary, Lemon, Lambrusco</Link>
                    </div>
                  </div>
                </div>

                <div className='dish-block'>
                  <div className='inner-box'>
                    <div className='title clearfix'>
                      <div className='ttl clearfix'>
                        <h5>
                          <Link to='#'>Paradise Lost</Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$18.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Mezcal, Chili liqour, Mango, Lime, Agave
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='dish-block'>
                  <div className='inner-box'>
                    <div className='title clearfix'>
                      <div className='ttl clearfix'>
                        <h5>
                          <Link to='#'>
                            Athens Mule <span className='s-info'>NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$16.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>Fig Vodka, Lime, Gingerbeer</Link>
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

export default Startermenu
