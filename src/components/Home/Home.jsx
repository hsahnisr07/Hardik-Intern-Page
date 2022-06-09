import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselContainer from "./Carousel_Home/CarouselContainer";

export default function Home() {
  return (
    <div className="home_body">
      <CarouselContainer />
    </div>
  );
}
