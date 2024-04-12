
"use client"
import React from 'react'

import Image from 'next/image'


// _app.js or pages/_app.js
// _app.js or pages/_app.js
import styles from "./styles/carousal.module.css"


const src=[
  "front.jpeg"
]


export default function Carousal() {
  const handleRedirect = () => {
    // Redirect the user to the specified URL
    window.location.href = 'https://vrindavan-phi.vercel.app/';
  };
  return (
    <>
    
    <div className={styles.main} >
    <img className={styles.img} src='https://i.pinimg.com/736x/84/fb/68/84fb68af0cc11b680afc4a8e24bdb245.jpg'></img>
    <div className={styles.square}>
        <p className={styles.para}>New Arrival</p>
        <h1 className={styles.heading}>Discover our New Collection</h1>
        <span className={styles.span}>Lorem ipsum dolor, sit amet consectetur adsa ab.</span>
       <button onClick={handleRedirect} className={styles.button}>Shop Now</button> 
    </div>
</div>
    </>
  )
}
