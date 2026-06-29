import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

import Hero from "./sections/Hero";
import FeaturedProducts from "./sections/FeaturedProducts";
import Products from "./sections/Products";
import Delivery from "./sections/Delivery";
import Reviews from "./sections/Reviews";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedProducts />

        <Products />

        <Delivery />

        <Reviews />
      </main>

      <Footer />

      <WhatsappButton />
    </>
  );
}

export default App;