"use client"

import styles from "./styles/product.module.css"
export default function Product() {
  const handleRedirect = () => {
    // Redirect the user to the specified URL
    window.location.href = 'https://vrindavan-phi.vercel.app/';
  };
  return (
    <>
   
    <div className={styles.main}>
     <div>
        <h2 className={styles.head}>Browse The Range</h2>
        <p className={styles.para}>any thing wdw d wd wd you want can be written </p>
     </div>

     <div className={styles.eighty}>
        <div className={styles.one} onClick={handleRedirect}>
          <div> <img className={styles.img} src="/images/resized.jpeg" /></div>
          <div className={styles.overlay}>
          <h1 className={styles.text}>Toys</h1>
          </div>
        
          </div>

        <div className={styles.one} onClick={handleRedirect}>   <div> <img className={styles.img} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=800&dpr=2.0" /></div>
          <div className={styles.overlay}>
          <h1 className={styles.text}>Tshirts</h1>
          </div></div>

        <div className={styles.one} onClick={handleRedirect}>
        <div> <img className={styles.img} src="https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/en_IN/dw5451ca9a/2022/elixir_ultime/KER_00042/Elixir-Ultime-L-Huile-Originale-Serum1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=80" /></div>
          <div className={styles.overlay}>
          <h1 className={styles.text}>Serums</h1>
          </div>
        </div>
     </div>
    </div>
    </>
  )
}
