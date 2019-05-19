import React, { Component } from "react";
import Slider from "react-slick";
import MainCarouselCard from "components/mainCarouselCard.js"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", right:"100px !important", zIndex: "1", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", left:"100px !important", zIndex: "1",}}
      onClick={onClick}
    />
  );
}

export default class mainCarousel extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      centerPadding:"0px",
      arrows:false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      initialSlide: 0,
      swipeToSlide:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2 className="mainRowTitle">
          정유진님이 관심있을 만한 스터디
        </h2>
        <Slider {...settings}>
          <MainCarouselCard />
          <MainCarouselCard />
          <MainCarouselCard />
          <MainCarouselCard />
          <MainCarouselCard />
        </Slider>
      </div>
    );
  }
}