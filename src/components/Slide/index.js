import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import rabbit from "../../images/rabbit.jpg";
import logo from "../../images/logo192.png";

const slideImages = [
  {
    url: rabbit,
    caption: "Slide 1",
  },
  {
    url: logo,
    caption: "Slide 2",
  },
];

function SlideShow() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImage.url} width="100%" alt={slideImage.caption}></img>
          </div>
        ))}
      </Slide>
    </div>
  );
}
export default SlideShow;
