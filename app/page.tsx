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
            <p>silahkan cek pesanan kamu disini!</p>

            <form className="mx-auto mt-5 max-w-md">
              <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-3 w-3 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-full p-4 ps-10 text-sm text-gray-900"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="absolute bottom-2.5 right-2.5 rounded-full px-4 py-2 text-sm font-medium text-black bg-orange-200"
                >
                  Search
                </button>
              </div>
            </form>
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

        <div className={styles.maps}>
          <div className={styles.maps2}>
            <h1>Welcome to Kopion!</h1>
            <p>Your perfect coffee experience starts here.</p>
          </div>
          <div className={styles.row}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.106839225952!2d110.4194674747379!3d-7.7784952771731035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5937038c41ef%3A0x262b46abf2010694!2zS29waU9OIGJ5IE9tYWggTmF5YW4g6qeL6qaP6qa66qa06qal6qa26qaq6qa66qa06qak6qeA6qan6qeA6qaq6qeA6qaO6qap6qaD6qak6qaq6qak6qeA!5e0!3m2!1sid!2sid!4v1726733376821!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
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
