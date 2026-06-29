import "../styles/products.css";

import milanesas from "../assets/milanesas de pollo.JPG";
import pataymuslo from "../assets/pata muslo de pollo.PNG";
import solomillo from "../assets/solomillo.jpg";

function FeaturedProducts() {
  return (
    <section className="featured">
      <p className="section-label">
        Selección especial
      </p>

      <h2>
        Productos destacados de la semana
      </h2>

      <div className="featured-cards">

        <article className="featured-card">

          <img
            src={milanesas}
            alt="Milanesas Premium"
          />

          <h3>
            Milanesas Premium
          </h3>

          <p>
            Selección especial Del Solar.
          </p>

        </article>



        <article className="featured-card">

          <img
            src={pataymuslo}
            alt="Pata y Muslo"
          />

          <h3>
            Pata y Muslo
          </h3>

          <p>
            Selección especial Del Solar.
          </p>

        </article>



        <article className="featured-card">

          <img
            src={solomillo}
            alt="Solomillo de Cerdo"
          />

          <h3>
            Solomillo de Cerdo
          </h3>

          <p>
            Selección especial Del Solar.
          </p>

        </article>

      </div>
    </section>
  );
}

export default FeaturedProducts;