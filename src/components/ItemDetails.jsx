import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navegation from './Navegation';

import packagesData from '../database/packages.json';
import tripsData from '../database/trips.json';
import souvenirsData from '../database/souvenirs.json';

function addtoCart(selectedItem) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(selectedItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

const ItemDetails = () => {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemType, setItemType] = useState(null);

    useEffect(() => {
        const packageById = packagesData.find(item => item.id.toString() === id);
        const tripById = tripsData.find(item => item.id.toString() === id);
        const souvenirById = souvenirsData.find(item => item.id.toString() === id);

        if (packageById) {
            setSelectedItem(packageById);
            setItemType('package');
        } else if (tripById) {
            setSelectedItem(tripById);
            setItemType('trip');
        } else if (souvenirById) {
            setSelectedItem(souvenirById);
            setItemType('souvenir');
        } else {
            setSelectedItem(null);
            setItemType(null);
        }
    }, [id]);

    if (!selectedItem) {
        return <div>Item not Found.</div>;
    }

    const sendToWhats = () => {
        const message = `Hi, I'm interested in the following item:

*- Name:* ${selectedItem.title}
*- Description:* ${selectedItem.l_description}
*- Services:* ${selectedItem[itemType + 'Services'].join(', ')}
*- Price:* ${selectedItem.price} CAD`;
    
        const whatsappLink = `https://wa.me/573136308824?text=${encodeURIComponent(message)}`;
    
        window.open(whatsappLink, '_blank');
    };
    

    return (
        <main>
            <Navegation />

            <div className="p-20 h-screen flex flex-col justify-center gap-10">
                <h1 className="text-4xl font-bold">{selectedItem.title}</h1>

                <div className='flex justify-between gap-10'>
                    <div style={{ flex: 1 }}>
                        <img className='rounded-xl w-full h-auto object-cover' src={selectedItem.image} alt="Item Img" />
                    </div>

                    <div className='w-8/12 flex flex-col justify-center gap-10'>
                        <p className='text-xl'>{selectedItem.l_description}</p>

                        <div className="flex flex-col justify-center gap-4">
                            <h2 className="text-2xl font-bold">Item Details</h2>
                            <ul>
                                {itemType === 'package'
                                    ? selectedItem.packageServices.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                    : itemType === 'trip'
                                    ? selectedItem.tripServices.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                    : itemType === 'souvenir'
                                    ? selectedItem.souvenirServices.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                    : null}
                            </ul>
                        </div>
                        
                        <div className='flex gap-10 items-center'>
                            <button className="bg-[#25D366] text-white px-4 py-2 rounded-md font-bold" onClick={sendToWhats}>
                                Ask on WhatsApp
                            </button>

                            <button 
                                onClick={() => addtoCart(selectedItem)}
                                className="bg-[#0874bc] text-white px-4 py-2 rounded-md font-bold">
                                    Add to Cart
                            </button>

                            <p className='font-bold text-2xl'>{selectedItem.price} CAD</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ItemDetails;