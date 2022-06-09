import React from "react";
import "./CarouselContainer.css";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import slide1 from "../../../Assets/img_home/img1.png";
import slide2 from "../../../Assets/img_home/img2.png";
import slide3 from "../../../Assets/img_home/img3.png";
import slide4 from "../../../Assets/img_home/img4.png";

function CarouselContainer() {
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h2>Alumni Talk #1</h2>
          <p>
            A common place for all the movie freaks to discuss their hearts out!
            To explore the intricacies of the the cinematic world. <br></br>A
            film is – or should be – more like music than like fiction. It
            should be a progression of moods and feelings. The theme, what’s
            behind the emotion, the meaning, all that comes later?
          </p>
          <Button color="danger">Watch Now</Button>
        </Carousel.Caption>
        {/* <p class="mobile_caption">
          A common place for all the movie freaks to discuss their hearts out!
          To explore the intricacies of the the cinematic world. <br></br>A film
          is – or should be – more like music than like fiction. It should be a
          progression of moods and feelings. The theme, what’s behind the
          emotion, the meaning, all that comes later?
        </p> */}
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h2>Alumni Talk #2</h2>
          <p>
            A common place for all the movie freaks to discuss their hearts out!
            To explore the intricacies of the the cinematic world. <br></br>A
            film is – or should be – more like music than like fiction. It
            should be a progression of moods and feelings. The theme, what’s
            behind the emotion, the meaning, all that comes later?
          </p>
          <Button color="danger">Watch Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h2>Alumni Talk #3</h2>
          <p>
            A common place for all the movie freaks to discuss their hearts out!
            To explore the intricacies of the the cinematic world. <br></br>A
            film is – or should be – more like music than like fiction. It
            should be a progression of moods and feelings. The theme, what’s
            behind the emotion, the meaning, all that comes later?
          </p>
          <Button color="danger">Watch Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slide4} alt="Third slide" />
        <Carousel.Caption>
          <h2>Alumni Talk #4</h2>
          <p>
            A common place for all the movie freaks to discuss their hearts out!
            To explore the intricacies of the the cinematic world. <br></br>A
            film is – or should be – more like music than like fiction. It
            should be a progression of moods and feelings. The theme, what’s
            behind the emotion, the meaning, all that comes later?
          </p>
          <Button color="damger">Watch Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
