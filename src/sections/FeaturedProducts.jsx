import "../styles/products.css";

function FeaturedProducts() {
  return (
    <section className="featured">
      <p className="section-label">Selección especial</p>

      <h2>Productos destacados de la semana</h2>

      <div className="featured-cards">
        <article className="featured-card">
          <h3>Fiambres Premium</h3>
          <p>Selección especial Del Solar.</p>
        </article>

        <article className="featured-card">
          <h3>Quesos Gourmet</h3>
          <p>Calidad y sabor para tu mesa.</p>
        </article>

        <article className="featured-card">
          <h3>Congelados</h3>
          <p>Opciones prácticas y deliciosas.</p>
        </article>
      </div>
    </section>
  );
}

export default FeaturedProducts;