import "../styles/whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
    return (
        <a
            className="whatsapp-button"
            href="https://wa.me/1154811237"
            target="_blank"
            rel="noreferrer"
            aria-label="Enviar WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsappButton;