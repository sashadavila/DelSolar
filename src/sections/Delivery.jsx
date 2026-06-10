import "../styles/delivery.css";
import { FaTruck } from "react-icons/fa";

function Delivery() {
    return (
        <section id="entregas" className="delivery">

            <h2>
                Zonas de entrega
            </h2>


            <div className="delivery-container">


                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>
                            Torcuato, Gral Pacheco, Adolfo Sordeaux y Los Polvorines
                        </h3>
                    </div>

                    <strong>
                        Entrega en el día
                    </strong>

                    <p>
                        Realizá tu pedido antes de las 12hs y recibilo en el día.
                    </p>

                </article>



                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>
                            San Isidro y Vicente López
                        </h3>
                    </div>

                    <strong>
                        Entregas los martes
                    </strong>

                    <p>
                        Realizá tu pedido antes del lunes 12hs y recibilo
                        el martes entre 10hs y 19hs.
                    </p>

                </article>




                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>
                            Corredor Nordelta
                        </h3>
                    </div>

                    <strong>
                        Entregas los miércoles
                    </strong>

                    <p>
                        Realizá tu pedido antes del martes 12hs y recibilo
                        el miércoles entre 10hs y 19hs.
                    </p>

                </article>




                <article className="delivery-card">

                    <div className="delivery-header">
                        <FaTruck />
                        <h3>
                            Ingeniero Maschwitz, Escobar, Loma Verde y Cardales
                        </h3>
                    </div>

                    <strong>
                        Entregas los jueves
                    </strong>

                    <p>
                        Realizá tu pedido antes del miércoles 12hs y recibilo
                        el jueves de 10hs a 19hs.
                    </p>

                </article>


            </div>


            <p className="delivery-extra">
                ¿Estás en otra zona? Consultanos por WhatsApp.
            </p>


        </section>
    );
}

export default Delivery;