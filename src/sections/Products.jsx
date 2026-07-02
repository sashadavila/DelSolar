import "../styles/products.css";

import alitas from "../assets/alitas.png";
import filetesPollo from "../assets/filetes de pollo.png";
import hamburguesasPollo from "../assets/hammburguezasdepollosaborizadas.png";
import lomitosPollo from "../assets/lomiitosdepollodeshuesado.png";
import medallonesPollo from "../assets/medallonesdepollo.png";
import milanesaPollo from "../assets/milanesa pollo.png";
import pataMuslo from "../assets/pata muslo.png";
import muslitos from "../assets/muslitos en ala.png";
import pechugaPollo from "../assets/pechuga de pollo.png";
import polloEntero from "../assets/pollo entero.png";

import chorizos from "../assets/chorizos.png";
import milanesaCarne from "../assets/milanesa carne.png";
import ribsCerdo from "../assets/ribs de cerdo.png";
import solomillo from "../assets/solomillo.png";

import arandanos from "../assets/arandanos 1kg.png";
import bastoncitosMerluza from "../assets/bastoncitos de merluza.png";
import filetesMerluza from "../assets/filetes de merluza.png";
import frutillas from "../assets/frutillas 1kg.png";
import hamburguesasCarne from "../assets/hamburguesas de carne.png";
import medallones from "../assets/medallones.png";
import milanesas1 from "../assets/milanesa1.png";
import milanesas2 from "../assets/milanesas2.png";
import milanesas3 from "../assets/milanesas 3.png";
import milanesas from "../assets/milanesas.png";
import mixFrutos from "../assets/mix frutos rojs 1kg.png";
import productos from "../assets/productos.png";
import salmon from "../assets/salomon.png";
import tarta from "../assets/tarta.png";

function Products() {
    const categorias = [
        {
            titulo: "Pollo",
            productos: [
                { nombre: "Alitas de pollo", unidad: "x kilo", imagen: alitas },
                { nombre: "Filetes de pollo", unidad: "x kilo", imagen: filetesPollo },
                { nombre: "Hamburguesas de pollo saborizadas", unidad: "x unidad", imagen: hamburguesasPollo },
                { nombre: "Lomitos de pollo deshuesado", unidad: "x kilo", imagen: lomitosPollo },
                { nombre: "Medallones de pollo", unidad: "x unidad", imagen: medallonesPollo },
                { nombre: "Milanesas de pollo", unidad: "x kilo", imagen: milanesaPollo },
                { nombre: "Pata y muslo", unidad: "x kilo", imagen: pataMuslo },
                { nombre: "Muslitos en ala", unidad: "x kilo", imagen: muslitos },
                { nombre: "Pechuga de pollo", unidad: "x kilo", imagen: pechugaPollo },
                { nombre: "Pollo entero", unidad: "x kilo", imagen: polloEntero },
            ],
        },
        {
            titulo: "Cerdo",
            productos: [
                { nombre: "Chorizos", unidad: "x kilo", imagen: chorizos },
                { nombre: "Ribs de cerdo", unidad: "x kilo", imagen: ribsCerdo },
                { nombre: "Solomillo de cerdo", unidad: "x kilo", imagen: solomillo },
                { nombre: "Milanesa de carne", unidad: "x kilo", imagen: milanesaCarne },
            ],
        },
        {
            titulo: "Otros productos",
            productos: [
                { nombre: "Arándanos", unidad: "1kg", imagen: arandanos },
                { nombre: "Bastoncitos de merluza", unidad: "x kilo", imagen: bastoncitosMerluza },
                { nombre: "Filetes de merluza", unidad: "x kilo", imagen: filetesMerluza },
                { nombre: "Frutillas", unidad: "1kg", imagen: frutillas },
                { nombre: "Hamburguesas de carne", unidad: "x unidad", imagen: hamburguesasCarne },
                { nombre: "Medallones", unidad: "x unidad", imagen: medallones },
                { nombre: "Milanesas", unidad: "x kilo", imagen: milanesas },
                { nombre: "Milanesas 1", unidad: "x kilo", imagen: milanesas1 },
                { nombre: "Milanesas 2", unidad: "x kilo", imagen: milanesas2 },
                { nombre: "Milanesas 3", unidad: "x kilo", imagen: milanesas3 },
                { nombre: "Mix frutos rojos", unidad: "1kg", imagen: mixFrutos },
                { nombre: "Productos Del Solar", unidad: "selección", imagen: productos },
                { nombre: "Salmón", unidad: "x kilo", imagen: salmon },
                { nombre: "Tarta", unidad: "x unidad", imagen: tarta },
                
            ],
        },
    ];

    return (
        <section id="productos" className="products">
            <h2>Nuestros productos</h2>

            {categorias.map((categoria) => (
                <div className="catalog-category" key={categoria.titulo}>
                    <h3 className="category-title">{categoria.titulo}</h3>

                    <div className="catalog-grid">
                        {categoria.productos.map((item) => (
                            <article className="catalog-card" key={item.nombre}>
                                <img src={item.imagen} alt={item.nombre} />

                                <div className="product-info">
                                    <h3>{item.nombre}</h3>
                                    <span>{item.unidad}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Products;