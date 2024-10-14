'use client';
import Header from '@/app/header';
import Image from 'next/image';
import Footer from '@/app/footer';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from '@/app/ui/home.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function About() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = 4; // Jumlah gambar dalam slider

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.content}`);
    const imageElements = document.querySelectorAll(`.${styles.image}`);

    contentElements.forEach((el) => el.classList.add(styles.active));
    imageElements.forEach((el) => el.classList.add(styles.active));
  }, []);

  const changeSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth; // Ambil lebar slider
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
      setCurrentIndex(index); // Update current index
    }
  };

  // Fungsi untuk pindah ke gambar sebelumnya
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? imageCount - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  // Fungsi untuk pindah ke gambar berikutnya
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % imageCount;
    changeSlide(newIndex);
  };

  return (
    <main>
      <Header />
      <div className={styles.slide}>
        <div className={styles.slides} ref={sliderRef}>
          <div className={styles.slider}>
            <img src="/slide1.jpg" alt="slide1" />
            <img src="/slide2.jpg" alt="slide2" />
            <img src="/slide3.jpg" alt="slide3" />
            <img src="/slide4.jpg" alt="slide4" />
          </div>
        </div>
        <div className={styles.arrowLeft} onClick={handlePrev}>
          <FaArrowLeft />
        </div>
        <div className={styles.arrowRight} onClick={handleNext}>
          <FaArrowRight />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-1 items-center justify-center">
          <img src="/gambar2.jpg" alt="Image 1" width="100%" height="100%" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1>Welcome to Kopion!</h1>
          <p>Your perfect coffee experience starts here.</p>
        </div>
      </div>
      <div className="flex" style={{ height: '400px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.106839225952!2d110.4194674747379!3d-7.7784952771731035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5937038c41ef%3A0x262b46abf2010694!2zS29waU9OIGJ5IE9tYWggTmF5YW4g6qeL6qaP6qa66qa06qal6qa26qaq6qa66qa06qak6qeA6qan6qeA6qaq6qeA6qaO6qap6qaD6qak6qaq6qak6qeA!5e0!3m2!1sid!2sid!4v1726733376821!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </main>
  );
}
