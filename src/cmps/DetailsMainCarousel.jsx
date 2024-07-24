import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const thumbnailResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
}

export function HeroCarousel({ gig }) {

  let imgs = gig.imgUrls

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="hero-carousel-container">
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={true}
        afterChange={(previousSlide, { currentSlide }) => setCurrentIndex(currentSlide)}
        infinite={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        sliderClass="slider-class"
        keyBoardControl={true}
        swipeable={true}
        draggable={true}
        ssr={true}
        // customDot={<CarouselWithCustomDots />}
      >
        
        {imgs.map((img, index) => (
          <div key={index} className="hero-image-container">
            <img src={img} alt={img.alt} className="hero-carousel-image" />
          </div>
        ))}
      </Carousel>
      <Carousel
        responsive={thumbnailResponsive}
        showDots={false}
        arrows={false}
        containerClass="thumbnail-container"
        itemClass="thumbnail-item"
        sliderClass="thumbnail-slider"
        keyBoardControl={true}
        swipeable={true}
        draggable={true}
      >
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`thumbnail-image-container ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={img} alt={img.alt} className="thumbnail-image" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

