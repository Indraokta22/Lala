// app/menu/page.tsx
'use client';
import Header from '../header';
import Footer from '../footer';
import { menu } from '../lib/placeholder-data'; // Adjust this import based on your structure
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { RootState } from '../stores'; // Import RootState type

export default function Menu() {
    // Access the cart items from the Redux store
    const carts = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = (menu_id: string) => {
      console.log("Adding to cart", menu_id); // Check if this logs
        dispatch(addToCart({
            productId: menu_id,
            quantity: 1,
        }));
    };

    return (
        <main>
            <Header />
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">OUR MENU</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    {menu.map((item) => (
                        <div key={item.menu_id} className="group relative border-2 border-black p-2">
                            <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <img src={item.image_url} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div className="mt-4 flex flex-col items-center justify-center">
                                <h3 className="text-center text-sm text-gray-700">{item.name}</h3>
                                <p className="text-center text-sm font-medium text-gray-900">Rp {item.price}</p>
                                <button onClick={() => handleAddToCart(item.menu_id)} className="mt-2 rounded border border-black px-3 py-1">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
