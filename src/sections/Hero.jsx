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
          La calidad de siempre <br/>
          a un click de tu mesa.
        </h1>

        <p>
          Productos seleccionados con la frescura
          y calidad que nos representa.
        </p>

        <button>
          Ver productos
        </button>

      </div>


      <div className="hero-img">
        <img src={flyer} />
      </div>

    </section>
  );
}

export default Hero;