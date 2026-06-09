import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-brand">

                <img
                    src={logo}
                    alt="Del Solar"
                    className="navbar-logo"
                />

                <span>
                    Del Solar
                </span>

            </div>


            <nav className="navbar-links">

                <a href="#home">
                    Inicio
                </a>

                <a href="#productos">
                    Productos
                </a>

                <a href="#entregas">
                    Entregas
                </a>

            </nav>


            <a
                className="instagram-link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
            >

                <FaInstagram size={26} />

                <span>
                    Instagram
                </span>

            </a>


        </header>
    );
}

export default Navbar;