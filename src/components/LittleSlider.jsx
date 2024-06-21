import { useState } from 'react';
import user from "../assets/images/user.png";


export const LittleSlider = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = [
    { url: user, 
        description: ' "Me gusta mucho este cursos de verda es lo mejor que me ha pasado se lo recomiendo a cualquierra que lo uitlice." ',
        user: 'Gloria Rose'
    },
    { url: user, description: 'Descripción 2' , user: 'Jose Silva'},
    // ...más imágenes
  ];
  

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

    return (
        <div className="slider-container">
            <div className="image-container">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image.url}
                    alt={image.description}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                />
                ))}
            </div>
            <div className="description-box">
                <div className="description-box-info">
                    {images[currentIndex].description}
                </div>
                <span>{images[currentIndex].user}</span>
            </div>
            <button className='btn-slider' onClick={goToNext}> {">"} </button>
        </div>
    );
};



