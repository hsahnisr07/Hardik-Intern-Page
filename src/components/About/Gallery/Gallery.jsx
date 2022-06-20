import React from "react";
import Loader from "../../UI/Loader/Loader";

import GalleryImage1 from "../../../Assets/Gallery/GalleryImage1.jpg";
import GalleryImage2 from "../../../Assets/Gallery/GalleryImage2.jpg";
import GalleryImage3 from "../../../Assets/Gallery/GalleryImage3.jpg";
import GalleryImage4 from "../../../Assets/Gallery/GalleryImage4.jpg";
import GalleryImage5 from "../../../Assets/Gallery/GalleryImage5.jpg";
import GalleryImage6 from "../../../Assets/Gallery/GalleryImage6.jpg";
import GalleryImage7 from "../../../Assets/Gallery/GalleryImage7.jpg";
import Heading from "../../UI/Heading/Heading";

import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="All_gallery" id="Gallery">
      <Heading name="Gallery" />
      <div className="Gallery_container">
        <div className="Gallery_image_1">
          <Loader />
          <img
                className="Gallery_image"
                src={GalleryImage1}
                alt="Gallary Image"
            />
        </div>
        <div className="Gallery_image_2">
          <Loader />
          <img
            className="Gallery_image"
            src={GalleryImage2}
            alt="Gallary Image"
          />
        </div>
        <div className="Gallery_image_3">
          <Loader />
          <img
            className="Gallery_image"
            src={GalleryImage3}
            alt="Gallary Image"
          />
        </div>
        <div className="Gallery_image_4">
          <Loader />
          <img
            className="Gallery_image"
            src={GalleryImage4}
            alt="Gallary Image"
          />
        </div>
        <div className="Gallery_image_5">
          <Loader />
          <img
            className="Gallery_image"
            src={GalleryImage5}
            alt="Gallary Image"
          />
        </div>
        <div className="Gallery_image_6">
          <Loader />
          <img
            className="Gallery_image"
            src={GalleryImage6}
            alt="Gallary Image"
          />
        </div>
        <div className="Gallery_image_7">
          <Loader />
          <img
            className="Gallery_image"
            src={GalleryImage7}
            alt="Gallary Image"
          />
        </div>
      </div>
    </div>
  );
}
