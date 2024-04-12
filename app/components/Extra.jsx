"use client"
import styles from "./styles/extra.module.css"
import Photoswitch from "./Photoswitch"
export default function Extra() {
  return (  
    
<>
 <div className={styles.main}>
<div className={styles.text}>
  <h2 className={styles.head}>8+ Products crafted for you</h2>
  <p className={styles.para}>Lorem ipsum dolor s wdwd wd d wdw eaque neque consequatur.</p>
  <button className={styles.button}>Explore More</button>
</div>
<div className={styles.one}>
  <img className={styles.image} src="https://www.kolorshealthcare.com/blog/wp-content/uploads/2023/07/Skincare-Facts-and-Myths.jpg" alt="image" />
  <div className={styles.inner}>
    <h4>Product Name</h4>
    <p>blah blah...</p>
  </div>
  <button className={styles.button2}>➞</button>
</div>
<div className={styles.two}>
  <Photoswitch />
</div>
 </div>

</>
  )
}
