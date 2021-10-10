import { SliderData } from "./SliderData";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ImageSlider.css";

export const ImageSlider = () => {
  let [current, setCurrent] = useState(0);
  const arrayLength = SliderData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? arrayLength - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === arrayLength - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === arrayLength - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <img
          src={SliderData[current].imageUrl}
          alt={SliderData[current].imageAlt}
          className="image"
        />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </section>
    </>
  );
};
