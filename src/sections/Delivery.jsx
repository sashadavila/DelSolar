import "../styles/delivery.css";
import { FaTruck, FaClock } from "react-icons/fa";

function Delivery() {
    return (
        <section id="entregas" className="delivery">
            <h2>Zonas de entrega</h2>

            <div className="delivery-container">
                <article className="delivery-card">
                    <div className="delivery-header">
                        <FaTruck />
                        <h3>Torcuato, Gral Pacheco, Adolfo Sordeaux y Los Polvorines</h3>
                    </div>

                    <strong>Entrega en el día</strong>

                    <p>Comprando hasta las 12hs se entrega en el día.</p>
                </article>

                <article className="delivery-card">
                    <div className="delivery-header">
                        <FaTruck />
                        <h3>San Isidro y Vicente López</h3>
                    </div>

                    <strong>Entregas los martes</strong>

                    <p>
                        Comprando hasta el lunes 12hs se entrega el martes entre 10hs y
                        19hs.
                    </p>
                </article>

                <article className="delivery-card">
                    <div className="delivery-header">
                        <FaTruck />
                        <h3>Corredor Nordelta</h3>
                    </div>

                    <strong>Entregas los miércoles</strong>

                    <p>
                        Comprando hasta el martes 12hs se entrega día miércoles entre 10hs y
                        19hs.
                    </p>
                </article>

                <article className="delivery-card">
                    <div className="delivery-header">
                        <FaTruck />
                        <h3>Ingeniero Maschwitz, Escobar, Loma Verde y Cardales</h3>
                    </div>

                    <strong>Entregas los jueves</strong>

                    <p>
                        Comprando hasta el miércoles 12hs se entrega día jueves de 10hs a
                        19hs.
                    </p>
                </article>
            </div>

            <p className="delivery-extra">
                Otras zonas consultanos por WhatsApp.
            </p>

            <div className="delivery-hours">
                <div className="delivery-hours-title">
                    <FaClock />
                    <h3>Horarios</h3>
                </div>

                <p>
                    Lunes a viernes de 8 a 13hs y de 16 a 19hs.
                </p>

                <p>
                    Sábados de 8 a 13hs. Tarde: cerrado.
                </p>

                <p>
                    Domingos: cerrado.
                </p>
            </div>
        </section>
    );
}

export default Delivery;