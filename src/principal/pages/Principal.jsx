import { NavBar } from "../../components";
import './principal.scss';
import diseño from "../../assets/images/diseñoresina.png";
import Tutorial from "../../assets/images/TUTORIALES.png";
import Vector  from "../../assets/images/Vector.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import CardComponent from "../../components/CardComponent";


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
    </>
  )
}
