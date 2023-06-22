import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingSection  from "./LandingSection/LandingSection";
import Updates from "./Updates/Updates";
import HomeCarousel from "./Carousel_Home/HomeCarousel";

export default function Home() {
  return (
    <div className="home_body">
      <LandingSection />
      <div className="Home_dep_image"></div>
<<<<<<< HEAD
      <Updates/>
      <HomeCarousel/>
=======
      <HomeCarousel/>
      <Updates/>
>>>>>>> 75b8358 (first commit)
    </div>
  );
}
