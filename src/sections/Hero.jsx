import "../styles/hero.css";
import flyer from "../assets/flyer.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-info">
        <span>
          Alimentos frescos y gourmet
        </span>

        <h1>
          La calidad de siempre <br />
          a un click de tu mesa.
        </h1>

        <p>
          Productos seleccionados con la frescura
          y calidad que nos representa.
        </p>

        <a href="#productos" className="hero-button">
          Ver productos
        </a>

        <p className="hero-years">
          ¡Más de 35 años brindando calidad a tu mesa!
        </p>
      </div>

      <div className="hero-img">
        <img src={flyer} alt="Del Solar" />
      </div>
    </section>
  );
}

export default Hero;