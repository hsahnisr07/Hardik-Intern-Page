import React from 'react'
import { Routes, Route} from "react-router-dom";
import './About.css'
import OurTeam from './OurTeam/OurTeam'

import WhoWeAre from './WhoWeAre/WhoWeAre'

export default function About() {
  
  return (
    <div className='about_body'>
      <WhoWeAre/>
      <div className="dep_image"></div>
      <Routes>
          <Route exact path={"/"} element={<OurTeam/>} />
          <Route path={"/:vertical"} element={<OurTeam/>} />
      </Routes>
    </div>
  )
}
