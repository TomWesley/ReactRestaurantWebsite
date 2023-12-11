import React from 'react'
import Reservation from '../Allmenus/FirstMenu/Reservation'
import Specialmenu from '../Allmenus/Menmenu/Specialmenu'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/resource/entree-one.jpg'

function Menutwo() {
  return (
    <>
      <Bredcrumb subtitle='Food Menu' title='Mediterranean' Img={Img} />
      <Specialmenu />
      {/* <Reservation /> */}
    </>
  )
}

export default Menutwo
