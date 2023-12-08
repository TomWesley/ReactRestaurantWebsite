import React from 'react'
import Contactbanner from '../Mencontactus/Contactbanner'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-4.jpg'

function Main() {
  return (
    <>
      <Bredcrumb
        title="We'd Love to Hear From You"
        subtitle='Contact Us'
        Img={Img}
      />
      <Contactbanner />
    </>
  )
}

export default Main
