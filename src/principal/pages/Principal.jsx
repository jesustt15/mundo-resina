import { LittleSlider, NavBar } from "../../components";
import './principal.scss';
import diseño from "../../assets/images/diseñoresina.png";
import Vector  from "../../assets/images/Vector.png"
import { useState } from "react";
import CardComponent from "../../components/CardComponent";
import { AccessAlarm, Facebook, GitHub, ThreeDRotation, X } from '@mui/icons-material';



//usuarios


export const Principal = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavBar style='background: #cfe6ea' />
      <section className="hero">
          <div className="container">
              <div className="title"> Aprende a usar Resina</div>
              <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, autem ad! Voluptatibus, placeat modi soluta omnis voluptas id reprehenderit, dolorem harum tenetur veniam voluptates veritatis. Perferendis ipsam reiciendis itaque deserunt!

              </p>
              <button className="primary"> Más información > </button>
          </div>
          <div className="elipse">
            <img src={diseño} alt="diseño" />
          </div>
      </section>
      <section className="franja">
         
                <CardComponent />
           
          <div className="destacados">
            <div className="destacados-title">
                Nuestros destacados
            <img src={Vector} alt="vector" className="vector" />
              </div>
            <p className="destacados-desc">Lorem ipsum dolor sit amet consectetur ?</p>
        </div>
      </section>
      <div className="franja-us">
        <h5 className="title">¿Quiénes Somos?</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae ad sint, obcaecati, atque eveniet, esse inventore sapiente nisi consectetur laboriosam. Culpa vero labore voluptas voluptate non tenetur, quaerat totam?</p>
      </div>
      <section className="slider">
        <div className="slider-desc">
            <h6 className="title">Nuestros usuarios</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rem maxime esse officia ad nobis vero, corporis, veniam recusandae quam voluptatem sit. Quisquam iusto sint odio dolorum accusamus fugit eligendi!</p>
            <button className="opinion">Escribe tu Opinión {">"}</button>
        </div>
        <LittleSlider  />
      </section>
      <section className="contacto">
        <div className="contact-info">
          <div className="social-icons">
            <a href="facebook.com"><Facebook /></a> 
            <a href="github.com"><GitHub /></a>
            <a href="twitter.com"><X /></a>
          </div>
          <div className="contact-desc">
            <h6>Contact Us:</h6>
            <span>Email: jodadev2022@gmail.com</span>
            <span>Phone: +58 4141312013</span>
            <span>Address: Reesidencias Vista hermosa</span>
          </div>
        </div>
        <form  >
          <input type="text"  placeholder="email" className="form-email"/>
          <input type="submit" value="Subscribe to News" className="btn-submit" />
        </form>
      </section>
      <footer>
        <span>@ 2024 Mundo Resina. All rights reserved</span>
      </footer>
    </>
  )
}
