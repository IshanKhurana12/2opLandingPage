import { useState,useEffect } from "react";
import styles from "./styles/switch.module.css";
const image2="https://cdn.shopify.com/s/files/1/0390/2985/files/Build-your-skincare-routine_Blog-Tile_480x480.jpg?v=1673343711";
const image1="https://www.byrdie.com/thmb/vkK8odMxCbDvBXlBR5RO4faUGF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Byr_BeautyAwards_Skin_Social-31595ff792af4b029a6f714f332a4f13.jpg";
const image3="https://cdn.shopify.com/s/files/1/0071/6197/0758/files/shutterstock_1416346496_1024x1024.jpg?v=1594210464";
const images = [
    image1,
    image2,
    image3,
  // Add more image URLs as needed
];

export default function Photoswitch() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };



  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <button className={styles.button} onClick={handleNextImage}>
          ﹥
        </button>
      </div>

      <div className={styles.imagecontainer}>
  {images.map((imageUrl, index) => (
    <div
      key={index}
      className={`${styles.images} ${
        index === currentImageIndex ? styles.visible : styles.hidden
      }`}>
      <img src={imageUrl} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div>
    </div>
  );
}
