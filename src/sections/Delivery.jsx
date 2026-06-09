import "../styles/delivery.css";
import { FaTruck } from "react-icons/fa";

function Delivery() {
    return (
        <section id="entregas" className="delivery">

            <h2>
                Servicio de entrega a domicilio
            </h2>

            <div className="delivery-container">


                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>DON TORCUATO</h3>
                    </div>

                    <strong>
                        Entregas en el día
                    </strong>

                    <p>
                        De lunes a viernes. Pedidos antes de las 14:00 hs
                        y recibí en el día.
                    </p>

                </article>



                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>SAN MIGUEL</h3>
                    </div>

                    <strong>
                        Entregas los miércoles
                    </strong>

                    <p>
                        De 10hs a 16hs. Pedido antes del lunes
                        14:00 hs.
                    </p>

                </article>



                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>PABLO NOGUÉS</h3>
                    </div>

                    <strong>
                        Entregas los viernes
                    </strong>

                    <p>
                        De 10hs a 16hs. Pedido antes del jueves
                        14:00 hs.
                    </p>

                </article>


            </div>

        </section>
    );
}

export default Delivery;