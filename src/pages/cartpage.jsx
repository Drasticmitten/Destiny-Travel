import React, { useEffect, useState } from 'react'
import Navegation from '../components/Navegation'
import Footer from '../components/Footer'
import ItemDetails from '../components/ItemDetails'


const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const removeFromCart = (indexToRemove) => {
        const newCartItems = cartItems.filter((item, index) => index !== indexToRemove);
        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const encodeCartItemNames = () => {
        return cartItems.map(item => encodeURIComponent(item.title));
    };

    const sendtoWhats = () => {
        const encodedNames = encodeCartItemNames().join('%0A');
        window.open(`https://wa.me/573136308824?text=Hi%0Aim%0Ainterested%0Ain%0A${encodedNames}`, '_blank');
    };

    if (!cartItems.length) {
        return (
            <main>
                <Navegation />
                <div className='p-20'>
                    <h1>No hay elementos en el carrito.</h1>
                </div>
                <Footer />
            </main>
        );
    }

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <main>
            <Navegation />
            <h1>Tu carrito</h1>
            {cartItems.map((item, index) => (
                <div className="p-20 h-screen" key={index}>
                    <div className='flex justify-between h-full'>
                        <img className='rounded-xl h-[200px]' src={item.image} alt="Package Img" />
                        <h1 className="text-3xl font-semibold mb-4">{item.title}</h1>
                        <h2 className="text-3xl font-semibold mb-4">price: {item.price}</h2>
                        <button onClick={() => removeFromCart(index)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <h1>Total: {total}</h1>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={sendtoWhats}>Checkout</button>
            <Footer />
        </main>
    );
};

export default CartPage;

            
