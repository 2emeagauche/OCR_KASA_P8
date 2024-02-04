import React, { useState } from 'react';
import navLeft from '../../assets/carousel-nav-gauche.png'
import navRight from '../../assets/carousel-nav-droite.png'

const Carousel = ({pictures}) => {
  
  const [activePictureIndex, setActivePictureIndex] = useState(0)
  const carouselLength = pictures.length
  
  const handleCarousel = (dir) => {
    dir === 'left' ?
    setActivePictureIndex(activePictureIndex > 0 ? activePictureIndex - 1 : carouselLength - 1) :
    setActivePictureIndex(activePictureIndex < carouselLength - 1 ? activePictureIndex + 1 : 0)
  }

  return (
    <div className="carousel" >
      {
        carouselLength > 1 ? <>
          <button className="carousel-nav nav-left" onClick={() => handleCarousel('left')} >
              <img src={navLeft} alt="" />
          </button>
          <button className="carousel-nav nav-right" onClick={() => handleCarousel('right')}>
              <img src={navRight} alt="" />
          </button>
          <p className="current-picture">{activePictureIndex + 1}/{carouselLength}</p>
        </> : null
      }
      <div className="carousel-frame" style={{transform: `translateX(${activePictureIndex * (-1)}00%)`}}>
        {
          pictures.map((picture, index) =>
            <div className="img-frame" key={index}>
              <img src={picture} alt="" />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Carousel;