import React from "react";
import Slider from "react-slick";
import Card from "./studycard"



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight:true,
    };
     
    return (
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    );
  }
}
export default SimpleSlider;
