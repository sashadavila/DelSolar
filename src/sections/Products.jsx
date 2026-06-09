import "../styles/products.css";

function Products() {

const products = [
"Fiambres",
"Quesos",
"Congelados",
"Panificados",
"Gourmet",
"Almacén"
];

return (

<section 
id="productos"
className="products"
>

<h2>Nuestros productos</h2>


<div className="product-grid">

{products.map((item)=>(
<div className="product-card" key={item}>
{item}
</div>
))}

</div>


</section>

)

}


export default Products;