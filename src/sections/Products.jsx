import "../styles/products.css";

import alitas from "../assets/alitasdepollo.jpg";
import bastones from "../assets/bastones-muzzarella.jpg";
import chorizos from "../assets/chorizo-cerdo.png";
import filetMerluza from "../assets/Filet de merluza rebozado.JPG";
import hamburguesas from "../assets/Hamburguesas.jpg";
import hamburguesasCarne from "../assets/hamburguesasdecarne.jpg";
import lomitos from "../assets/lomitos de pollo deshuesado.JPG";
import medallonesSaborizados from "../assets/Medallones de pollo saborizados.JPG";
import medallones from "../assets/Medallones de pollo.JPG";
import milanesasPollo from "../assets/milanesas de pollo.JPG";
import milanesasPeceto from "../assets/milanesasdepeceto.jpg";
import pataMusloPollo from "../assets/pata muslo de pollo.PNG";
import pataMuslo from "../assets/pataymuslo.jpg";
import patitas from "../assets/patitasdepollo.jpg";
import pechugaFileteadaPng from "../assets/pechuga de pollo fileteada.PNG";
import pechuga from "../assets/Pechuga de pollo.PNG";
import pechugaFileteada from "../assets/pechugafileteada.jpg";
import polloCampo from "../assets/Pollo de campo entero .JPG";
import polloEntero from "../assets/polloentero.jpg";
import ribs from "../assets/ribsdecerdo.jpg";
import solomillo from "../assets/solomillo.jpg";
import trucha from "../assets/trucha salmonada.JPG";

function Products() {
    const productos = [
        { nombre: "Alitas de pollo", unidad: "x kilo", imagen: alitas },
        { nombre: "Bastones de muzzarella", unidad: "x kilo", imagen: bastones },
        { nombre: "Chorizos de cerdo", unidad: "x kilo", imagen: chorizos },
        { nombre: "Filet de merluza rebozado", unidad: "x kilo", imagen: filetMerluza },
        { nombre: "Hamburguesas", unidad: "x unidad", imagen: hamburguesas },
        { nombre: "Hamburguesas de carne", unidad: "x unidad", imagen: hamburguesasCarne },
        { nombre: "Lomitos de pollo deshuesado", unidad: "x kilo", imagen: lomitos },
        { nombre: "Medallones de pollo saborizados", unidad: "x unidad", imagen: medallonesSaborizados },
        { nombre: "Medallones de pollo", unidad: "x unidad", imagen: medallones },
        { nombre: "Milanesas de pollo", unidad: "x kilo", imagen: milanesasPollo },
        { nombre: "Milanesas de peceto", unidad: "x kilo", imagen: milanesasPeceto },
        { nombre: "Pata muslo de pollo", unidad: "x kilo", imagen: pataMusloPollo },
        { nombre: "Pata y muslo", unidad: "x kilo", imagen: pataMuslo },
        { nombre: "Patitas de pollo", unidad: "x kilo", imagen: patitas },
        { nombre: "Pechuga de pollo fileteada", unidad: "x kilo", imagen: pechugaFileteadaPng },
        { nombre: "Pechuga de pollo", unidad: "x kilo", imagen: pechuga },
        { nombre: "Pechuga fileteada", unidad: "x kilo", imagen: pechugaFileteada },
        { nombre: "Pollo de campo entero", unidad: "x kilo", imagen: polloCampo },
        { nombre: "Pollo entero", unidad: "x kilo", imagen: polloEntero },
        { nombre: "Ribs de cerdo", unidad: "x kilo", imagen: ribs },
        { nombre: "Solomillo de cerdo", unidad: "x kilo", imagen: solomillo },
        { nombre: "Trucha salmonada", unidad: "x kilo", imagen: trucha },
    ];

    return (
        <section id="productos" className="products">
            <h2>Nuestros productos</h2>

            <div className="catalog-grid">
                {productos.map((item) => (
                    <article className="catalog-card" key={item.nombre}>
                        <img src={item.imagen} alt={item.nombre} />

                        <div className="product-info">
                            <h3>{item.nombre}</h3>
                            <span>{item.unidad}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Products;