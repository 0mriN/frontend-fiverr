import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
// import '../assets/styles/cmps/DetailsMainCarousel.scss'

const images = [
  {
    src: "https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1705580305/ideas-and-advice-prod/en-us/featured_14223857a51/featured_14223857a51.png?_i=AA",
    alt: "Image 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
    alt: "Image 2",
  },
  {
    src: "https://visme.co/blog/wp-content/uploads/2024/04/1.jpg",
    alt: "Image 3",
  },
  {
    src: "https://stantorchpromotions.com/wp-content/uploads/2023/02/logo-b1.jpeg",
    alt: "Image 4",
  },
  {
    src: "https://i.pinimg.com/736x/db/87/75/db87753a7685b0758792da046372c959.jpg",
    alt: "Image 5",
  },
  {
    src: "https://images.crowdspring.com/blog/wp-content/uploads/2022/02/18105346/abstract-logos.png",
    alt: "Image 6",
  },
  {
    src: "https://yesimadesigner.com/wp-content/uploads/2019/10/color-logos-famous-logo-designs.png?x99157&x99157&x99157&x99157&x78792&x86947&x86947&x86947",
    alt: "Image 7",
  },
]

export default images
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

export function HeroCarousel({ images }) {
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
      >
        {images.map((image, index) => (
          <div key={index} className="hero-image-container">
            <img src={image.src} alt={image.alt} className="hero-carousel-image" />
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
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-image-container ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

