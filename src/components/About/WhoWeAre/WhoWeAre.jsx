import React from 'react'
import './WhoWeAre.css'

import bgmImage from '../../../Assets/WhoWeAre.jpg'

export default function WhoWeAre() {
  return (
    <>
      <div className="WhoWeAre_body">
        <img className="WhoWeAre_img"src={bgmImage} alt="" />
        <div className="WhoWeAre_box">
          <div className="heading_WhoWeAre">
            Who We Are
          </div>
          <div className="content_WhoWeAre">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim sed condimentum placerat in sapien. In porttitor odio lacus ut nisi tincidunt.
          </div>
        </div>
      </div>
    </>
  )
}
