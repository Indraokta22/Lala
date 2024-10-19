// app/cart/cartItem.tsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores'; // Ensure this import path is correct

interface CartItemProps {
    data: {
        productId: string;
        quantity: number;
    };
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState<{ name: string; price: number } | null>(null);
    const menu = useSelector((state: RootState) => state.menu.items); // Use menu items from state
    const dispatch = useDispatch();

    useEffect(() => {
        const menuItem = menu.find(item => item.id === productId); // Find the menu item
        if (menuItem) {
            setDetail({ name: menuItem.name, price: menuItem.price });
        }
    }, [menu, productId]); // Add dependencies

    return (
        <div>
            {detail && (
                <div>
                    <h2>{detail.name}</h2>
                    <p>Price: {detail.price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            )}
        </div>
    );
};

export default CartItem;
