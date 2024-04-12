"use client"
import React from 'react'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
export default function Scrollsmooth({children}) {

    useEffect( () => {
        const lenis = new Lenis()
    
        const raf = (time) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
       raf();
    
       return () => {
        // Stop the animation loop
        cancelAnimationFrame(raf);
      };
      }, [])
  return (
    <div>
      {children}
    </div>
  )
}
