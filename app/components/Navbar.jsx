"use client"
import React from 'react'
import styles from "./styles/navbar.module.css";
import { useEffect } from 'react';

import Link from 'next/link';


export default function Navbar() {
  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll('.smooth-scroll');

      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          const target = document.querySelector(href);
          const offsetTop = target.offsetTop;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        });
      });
    };

    smoothScroll();
  }, []);
  return (
    <>
  <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className={styles.maincontainer}>
            <div className={styles.logo}>2op Commerce</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.menu}>
     
      <Link href="#range" className={`${styles.link} smooth-scroll`}>Products</Link>
      <Link href="#contact" className={`${styles.link} smooth-scroll`}>Contact</Link>
      <Link href="#faq" className={`${styles.link} smooth-scroll`}>Faqs</Link>    
          </div>
        </div>
      </div>
    </div>
    </>
  
  )
}



