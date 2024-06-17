import  { useState } from 'react';
import Tutorial from "../assets/images/TUTORIALES.png";
import Curso from "../assets/images/CURSOS.png";
import Blog from "../assets/images/BLOG.png";
import '../principal/pages/principal.scss'; 
import { Link } from 'react-router-dom';

function SingleCard({ image ,  desc , ruta}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card ${isHovered ? 'hovered' : ''}`}>
        <img src={image} alt="card-photo" className="card-images" />
        <span className="link">{desc}</span>
      </div>
      {isHovered && (
        <div className={`button-container animate__animated animate__slideInDown
          animate__fast
          ${isHovered ? 'visible' : ''}`}>
          <Link to={ruta} className="oculto"> Ver Más {">"} </Link>
        </div>
      )}
    </div>
  );
}

function CardComponent() {
  const cardData = [
    {image: Tutorial, desc: 'Tutoriales', ruta: '/tutoriales'},
    {image: Curso, desc: 'Cursos', ruta: '/cursos'}, 
    {image: Blog, desc: 'Blog', ruta: '/blog'},    
  ]; 

  return (
    <div className='cards'>
      {cardData.map((card, index) => (
        <SingleCard key={index} image={card.image} desc={card.desc}  ruta={card.ruta} />
      ))}
    </div>
  );
}

export default CardComponent;