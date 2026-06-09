import "../styles/products.css";

function FeaturedProducts() {

  return (
    <section className="featured">

      <h2>
        Productos destacados de la semana
      </h2>


      <div className="cards">

        <article>
          <h3>Fiambres Premium</h3>
          <p>Selección especial Del Solar.</p>
        </article>


        <article>
          <h3>Quesos Gourmet</h3>
          <p>Calidad y sabor para tu mesa.</p>
        </article>


        <article>
          <h3>Congelados</h3>
          <p>Opciones prácticas y deliciosas.</p>
        </article>

      </div>

    </section>
  )
}

export default FeaturedProducts;