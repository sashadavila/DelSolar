import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-social">

                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >

                    <FaInstagram />

                    <span>
                        Instagram
                    </span>

                </a>

            </div>


            <div className="footer-content">

                <h3>
                    Del Solar
                </h3>

                <p>
                    Alimentos frescos y gourmet
                </p>

                <span>
                    © 2026 Del Solar - Todos los derechos reservados
                </span>

            </div>


            <div className="footer-empty"></div>


        </footer>
    );
};

export default Footer;