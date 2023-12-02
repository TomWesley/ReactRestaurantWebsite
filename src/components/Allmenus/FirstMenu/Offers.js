import React from 'react'
import { Link } from 'react-router-dom'
import bg22 from '../../../assets/images/background/bg-22.png'
import bg23 from '../../../assets/images/background/bg-23.png'
import menusentreeone from '../../../assets/images/resource/entree-one.jpg'
import menusdessertone from '../../../assets/images/resource/dessert-one.jpg'

function Offers() {
  return (
    <>
      <section className='menu-one'>
        <div className='auto-container'>
          <div className='title-box centered'>
            <div className='subtitle'>
              <span>For Savoring</span>
            </div>

            <div className='pattern-image'>
              <img
                src={
                  require('../../../assets/images/icons/separator.svg').default
                }
                alt='mySvgImage'
              />
            </div>

            <h2>Entrees</h2>
          </div>

          <div className='row clearfix'>
            <div className='image-col col-lg-7 col-md-12 col-sm-12'>
              <div className='inner'>
                <div className='image'>
                  <img src={menusentreeone} alt='' />
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
                          <Link to='#'>Greek Salad</Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$25.50</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Tomatoes, green bell pepper, sliced cucumber onion,
                        olives, and feta cheese.
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
                            Lasagne <span className='s-info'>SEASONAL</span>
                          </Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Vegetables, cheeses, ground meats, tomato sauce,
                        seasonings and spices
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='dish-block'>
                  <div className='inner-box'>
                    <div className='title clearfix'>
                      <div className='ttl clearfix'>
                        <h5>
                          <Link to='#'>Butternut Pumpkin</Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$10.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Typesetting industry lorem Lorem Ipsum is simply dummy
                        text of the priand.
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
                            Tokusen Wagyu <span className='s-info'>NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$39.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Vegetables, cheeses, ground meats, tomato sauce,
                        seasonings and spices.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='menu-one alternate'>
        <div className='auto-container'>
          <div className='title-box centered'>
            <div className='subtitle'>
              <span>hot & cold</span>
            </div>

            <div className='pattern-image'>
              <img
                src={
                  require('../../../assets/images/icons/separator.svg').default
                }
                alt='mySvgImage'
              />
            </div>

            <h2>Desserts</h2>
          </div>

          <div className='row clearfix'>
            <div className='image-col col-lg-7 col-md-12 col-sm-12'>
              <div className='inner'>
                <div className='image'>
                  <img src={menusdessertone} alt='' />
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
                          <Link to='#'>Greek Salad</Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$25.50</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Tomatoes, green bell pepper, sliced cucumber onion,
                        olives, and feta cheese.
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
                            Lasagne <span className='s-info'>SEASONAL</span>
                          </Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Vegetables, cheeses, ground meats, tomato sauce,
                        seasonings and spices
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='dish-block'>
                  <div className='inner-box'>
                    <div className='title clearfix'>
                      <div className='ttl clearfix'>
                        <h5>
                          <Link to='#'>Butternut Pumpkin</Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$10.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Typesetting industry lorem Lorem Ipsum is simply dummy
                        text of the priand.
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
                            Tokusen Wagyu <span className='s-info'>NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className='price'>
                        <span>$39.00</span>
                      </div>
                    </div>
                    <div className='text desc'>
                      <Link to='#'>
                        Vegetables, cheeses, ground meats, tomato sauce,
                        seasonings and spices.
                      </Link>
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

export default Offers
