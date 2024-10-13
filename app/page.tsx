'use client';
import Header from '@/app/header';
import Footer from './footer';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './ui/home.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { reviews } from './lib/placeholder-data';

export default function Home() {
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
      <main>
        <div className="relative">
          <video
            className="h-auto w-full object-cover"
            autoPlay
            muted
            loop
            src="/header.mp4"
          />
        </div>
        <div className={styles.location}>
          <h1>Welcome to Kopion!</h1>
        </div>
        <div className={styles.gambar}>
          <div className={styles.row}>
            <img
              className={styles.image}
              src="/gambar2.jpg"
              alt="Image 1"
              width="100%"
              height="100%"
            />
          </div>
          <div className={styles.content}>
            <h1>Welcome to Kopion!</h1>
            <p>Your perfect coffee experience starts here.</p>
          </div>
          <div className={styles.content}>
            <h1>Welcome to Kopion!</h1>
            <p>Your perfect coffee experience starts here.</p>
          </div>
          <div className={styles.row}>
            <img
              className={styles.image}
              src="/gambar2.jpg"
              alt="Image 4"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.container}></div>
          <div className={styles.pesan}>
            <h1>ORDER ONLINE</h1>
            <p>Pick Up Your Favorite Menu</p>
            <p>Not feel like cooking today? We got you covered - order now!</p>
            <a href="pesan.php" className={styles.buttonpesan}>
              ORDER
            </a>
          </div>
        </div>
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
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h1 className="mb-5 mt-10 text-4xl font-bold">
            A Historic Gathering House
          </h1>
          <p>
            Backatown Coffee Parlour, located at the very site of old
            Storyville,
          </p>
          <p>
            embodies the aura of the time where you could hear the sounds of
            Jelly
          </p>
          <p>
            Roll Morton, Louis Armstrong, and King Oliver and meet folks from
            all
          </p>
          <p>
            walks of life. We strive to present Backatown as an authentic New
          </p>
          <p>
            Orleans gathering space that helps cultivate our neighborhoods
            through
          </p>
          <p>the fostering of ideas and conversations.</p>
        </div>
        <div className="flex">
          <section className="grid grid-cols-5">
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu1.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu2.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu6.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-2 row-span-2 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu4.jpg"
                alt="Image 1"
                width={600}
                height={600}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu5.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu3.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu7.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-2 row-span-2 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu9.jpg"
                alt="Image 1"
                width={600}
                height={600}
              />
            </div>
            <div className="felx-col hover:scale-110x col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10">
              <Image
                src="/menu/menu10.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu11.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu12.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu13.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu17.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu16.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu19.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-2 row-span-3 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu3.jpg"
                alt="Image 1"
                width={600}
                height={600}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu20.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu6.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu10.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu8.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div className="felx-col col-span-1 row-span-1 flex transform transition-transform duration-300 hover:z-10 hover:scale-110">
              <Image
                src="/menu/menu11.jpg"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
          </section>
        </div>

        {/* <div className='w-3/4 m-auto bg-gray-200'>
        <div className='mt-10'>
          {reviews.map((d) =>(
            <div className='h-[450px] rounded-xl'>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.nama}</p>
                <p>{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6'>Read More</button>
              </div>
            </div>
            
          ))}
        </div>
        </div> */}

        <Footer />
      </main>
    </main>
  );
}
