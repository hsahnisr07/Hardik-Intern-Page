import React from "react";
import "./CarouselContainer.css";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeCarouselContent from "./Carousel_data"

function CarouselContainer() {
  
  return (
    <Carousel fade={true}>
      {HomeCarouselContent.map((slide, idx) => {
        return (
          <Carousel.Item interval={2000}>
            <img className="d-block w-75 m-auto" src={slide.img} alt="First slide" />
            <Carousel.Caption>
              <h2>{slide.heading}</h2>
              <p>{slide.description}</p>
              <Button color="danger">
                <a href={slide.link}>Watch Now</a></Button>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default CarouselContainer;
