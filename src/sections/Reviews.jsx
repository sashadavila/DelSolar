import "../styles/reviews.css";

function Reviews() {
    const reviews = [
        {
            name: "Guillermo",
            text: "Los mejores pollos, bien grandes y sin congelar. Las milanesas preparadas bien condimentadas, hamburguesas y demás productos excelentes, frescos. Muy buena atención. Lo mejor de Torcuato en el rubro.",
        },
        {
            name: "Lucila",
            text: "Productos de primerísima calidad, voy a comprar hace años, la atención es excelente, ¡no los cambio por nada!",
        },
        {
            name: "Santiago",
            text: "Sin duda la mejor granja de Zona Norte. Simplemente vayan y prueben, todo es de excelencia. Atendida por sus dueños. Calidad, atención y limpieza. 100% recomendable.",
        },
    ];

    return (
        <section className="reviews">
            <p className="section-label">Testimonios</p>
            <h2>La opinión de nuestros clientes</h2>

            <div className="reviews-grid">
                {reviews.map((review) => (
                    <article className="review-card" key={review.name}>
                        <p>"{review.text}"</p>
                        <h3>{review.name}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;