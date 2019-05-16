import React, { Component } from "react";
import Slider from "react-slick";
import MainCarouselCard from "components/mainCarouselCard.js"

export default class mainCarousel extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      initialSlide: 0,
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
        <h2 className="title-curation">
          당신을 위한 스터디 큐레이션
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