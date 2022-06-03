import React from 'react'
import './WhoWeAre.css'

import bgmImage from '../../../Assets/WhoWeAre.jpg'
import Heading from '../../Heading/Heading'

export default function WhoWeAre() {
  return (
    <>
      <div className="WhoWeAre_body">
        <div className="WhoWeAre_box">
          <div className="heading_WhoWeAre">
            <Heading name="Who We are"/>
          </div>
          <div className="content_WhoWeAre">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim sed condimentum placerat in sapien. In porttitor odio lacus ut nisi tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim sed condimentum placerat in sapien. In porttitor odio lacus ut nisi tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim sed condimentum placerat in sapien. In porttitor odio lacus ut nisi tincidunt.
          </div>
        </div>
        <img className="WhoWeAre_img"src={bgmImage} alt="" />
      </div>
    </>
  )
}
