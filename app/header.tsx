import React, { useState, useEffect } from 'react';
import styles from './ui/home.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CartPage from './cart/cartPage';
import { RootState } from '../stores'; // Ensure correct import of RootState

const Header: React.FC = () => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const carts = useSelector((state: RootState) => state.cart.items);

  // Calculate total quantity
  const totalQuantity = carts.reduce((total, item) => total + item.quantity, 0);

  const toggleCartVisibility = () => {
    setCartVisible((prev) => !prev); // Toggle the visibility of the cart
  };

  return (
    <main>
      {/* Render CartPage conditionally based on cartVisible state */}

      <nav className={styles.navbar}>
        {cartVisible && <CartPage />}
        <h1 className="text-3xl font-bold italic text-white">
          Kopion<span className="text-[#b6895b]"> by Omah Nayan's</span>
        </h1>
        <div className="flex">
          <a href="/">Home</a>
          <Link href="/about">About</Link>
          <a href="/menu">Menu</a>

          {/* CART */}
          <div
            onClick={toggleCartVisibility}
            className='relative w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer'
            aria-label="Toggle cart visibility"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="black"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span className='absolute top-2/3 right-2/3 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
          </div>

          {/* LOGIN */}
          <div>
            <Link href="/login" id={styles.person}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
