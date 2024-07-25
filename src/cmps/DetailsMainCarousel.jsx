import React, { useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CustomLeftArrow, CustomRightArrow } from './CarouselArrows'

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



export { CustomLeftArrow, CustomRightArrow }

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

export function DetailsMainCarousel({ imgUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const mainCarouselRef = useRef(null)

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index)
    mainCarouselRef.current.goToSlide(index, true)
  }

  return (
    <section className="details-main-carousel">
      <Carousel
        ref={mainCarouselRef}
        responsive={responsive}
        showDots={false}
        arrows
        infinite={false}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        sliderClass="slider-class"
        keyBoardControl={true}
        swipeable={true}
        draggable={true}
        afterChange={(previousSlide, { currentSlide }) => setCurrentIndex(currentSlide)}
        customLeftArrow={<CustomLeftArrow/>}
        customRightArrow={<CustomRightArrow/>}
      >
        {imgUrls.map((image, index) => (
          <div key={index} className="hero-image-container">
            <img src={image} className="hero-carousel-image" alt={`Slide ${index}`} />
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
        {imgUrls.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-image-container`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} className={`thumbnail-image ${index === currentIndex ? 'active' : ''}`} />
          </div>
        ))}
      </Carousel>
    </section>
  )
}
