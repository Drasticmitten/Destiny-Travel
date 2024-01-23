import React, { useEffect, useState } from 'react'
import Navegation from '../components/Navegation'

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

    const sendToWhats = () => {
        const message = cartItems.map(item => `
        
*- Name:* ${item.title}
    *- Description:* ${item.s_description}
    *- Price:* ${item.price} CAD`);
    
        const whatsappLink = `https://wa.me/573136308824?text=${encodeURIComponent(`Hi, I'm interested in the following items:${message}

*Total:* ${total} CAD`)}`;
    
        window.open(whatsappLink, '_blank');
    };    

    if (!cartItems.length) {
        return (
            <main>
                <Navegation />

                <div className='p-20 flex items-center h-screen justify-center'>
                    <h1 className='text-5xl font-bold'>Without Items in Cart</h1>
                </div>
            </main>
        );
    }

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <main>
            <Navegation />

            <div className="p-20 flex justify-between gap-10 h-screen">
                <div className='flex flex-col gap-5 w-8/12 overflow-auto'>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <div className='flex justify-between gap-10 items-center border-2 p-4 rounded-xl border-[#f0f0f0]'>
                                <img className='rounded-xl h-[60px]' src={item.image} alt="Package Img" />
                                <h1 className="text-xl">{item.title}</h1>
                                <h2 className="text-xl font-semibold">{item.price} CAD</h2>
                                <button className='font-bold text-[#ff7272] hover:text-[#a73131]' onClick={() => removeFromCart(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-4/12 text-center p-10'>
                    <h1 className='text-xl'>Total Price</h1>
                    <p className='text-5xl font-bold mt-5 mb-20'>{total} CAD</p>

                    <div className='flex justify-between'>
                        <button className='bg-[#ff7272] hover:bg-[#a73131] text-white px-4 py-2 rounded-md font-bold' onClick={clearCart}>Clear Cart</button>
                        <button className="bg-[#25D366] hover:bg-[#075E54] text-white px-4 py-2 rounded-md font-bold" onClick={sendToWhats}>Checkout</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;