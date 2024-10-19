import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem'; // Ensure the case matches your filename
import { RootState } from '../stores'; // Adjust the import according to your file structure
import { toggleStatusTab } from '../stores/cart'; // Import your toggle action

const CartPage: React.FC = () => {
    const dispatch = useDispatch(); // Initialize dispatch
    const carts = useSelector((state: RootState) => state.cart.items); // Get cart items from the Redux store
    const statusTab = useSelector((store: RootState) => store.cart.statusTab);

    return (
        <div className={`fixed top-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transition-transform duration-300 ${statusTab ? "" : "translate-x-full"}`}>
            <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
            <div className='p-5 overflow-auto'> {/* Add overflow for scrolling if needed */}
                {carts.length > 0 ? (
                    carts.map((item) => (
                        <CartItem key={item.productId} data={item} /> // Render each cart item, using productId as the key
                    ))
                ) : (
                    <p className="text-white">Your cart is empty.</p> // Display a message if the cart is empty
                )}
            </div>
            <div className='grid grid-cols-2 p-5'>
                <button className='bg-black text-white'>CLOSE</button>
                <button className='bg-amber-600 text-white'>CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartPage;
