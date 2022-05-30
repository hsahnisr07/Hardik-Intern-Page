import React from 'react'
import './About.css'

// import OurTeam from './OurTeam/OurTeam'
import WhoWeAre from './WhoWeAre/WhoWeAre'

export default function About() {
  return (
    <div className='about_body'>
      <WhoWeAre/>
      <div className="dep_image"></div>
      {/* <OurTeam/> */}
    </div>
  )
}
