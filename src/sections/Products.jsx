import "../styles/products.css";

import producto1 from "../assets/producto1.jpg";
import producto2 from "../assets/producto2.jpg";
import producto3 from "../assets/producto3.jpg";
import producto4 from "../assets/producto4.jpg";
import producto5 from "../assets/producto5.jpg";
import producto6 from "../assets/producto6.jpg";
import producto7 from "../assets/producto7.jpg";
import producto8 from "../assets/producto8.jpg";
import producto9 from "../assets/producto9.jpg";
import producto10 from "../assets/producto10.jpg";


function Products() {

const productos = [

{
nombre:"alitas",
imagen:producto1
},

{
nombre:"reef",
imagen:producto2
},

{
nombre:"solomillo",
imagen:producto3
},

{
nombre:"pechuga",
imagen:producto4
},

{
nombre:"pollo entero",
imagen:producto5
},

{
nombre:"Pechuga fileteada",
imagen:producto6
},

{
nombre:"Productopata y muslo",
imagen:producto7
},

{
nombre:"Pata de pollo ",
imagen:producto8
},

{
nombre:"milanesa",
imagen:producto9
},

{
nombre:"hamburguesa ",
imagen:producto10
},

];


return (

<section 
id="productos"
className="products"
>

<h2>
Nuestros productos
</h2>


<div className="catalog-grid">


{productos.map((item)=>(

<div 
className="catalog-card"
key={item.nombre}
>

<img 
src={item.imagen}
alt={item.nombre}
/>

<h3>
{item.nombre}
</h3>


</div>


))}


</div>


</section>

);

}


export default Products;