import Product from "./components/Product";
import Carousal from "./components/Carousal";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import style from "./components/styles/allproducts.module.css"
import Extra from "./components/Extra";
import Parallax from "./components/Parallax";
import Contact from "./components/Contact";
export default function Home() {
  return (
   <>
   <marquee className={style.marq} behavior="scroll" direction="left"> Let's bring your vision to Life  </marquee>
    <Navbar />
    <section id="home">
    <Carousal/>
    </section>


   


    <section id="range">
    <Product />
    </section>

    <section>
<Extra />
</section>

    <section>
  <Products/>
</section>


<section id="faq">
<Parallax />
</section>
   
    




    <section id="contact">
      <Contact />
    </section>
    
   </>
  );
}
