import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navegation from './Navegation'

import packagesData from '../database/packages.json';


function addtoCart(selectedPackage) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(selectedPackage);
    localStorage.setItem('cart', JSON.stringify(cart));
}


const ItemDetails = () => {
    const { id } = useParams();
    const [selectedPackage, setSelectedPackage] = useState(null);

    useEffect(() => {
        const packageById = packagesData.find(item => item.id.toString() === id);
        setSelectedPackage(packageById);
    }, [id]);

    if (!selectedPackage) {
        return <div>Item not Found.</div>;
    }

    return (
        <main>
            <Navegation />

            <div className="p-20 h-screen">
                <h1 className="text-3xl font-semibold mb-4">{selectedPackage.title}</h1>

                <div className='flex justify-between h-full'>
                    <img className='rounded-xl h-[200px]' src={selectedPackage.image} alt="Package Img" />

                    <div>
                        <p>{selectedPackage.l_description}</p>

                        <div className="my-8">
                            <h2 className="text-xl font-semibold mb-4">Package Details</h2>
                            <ul>
                                {selectedPackage.packageServices.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className='flex gap-10'>
                            <button className="bg-[#25D366] text-white px-4 py-2 rounded-md font-bold">
                                Ask on WhatsApp
                            </button>

                            <button 
                                onClick={() => addtoCart(selectedPackage)}
                                className="bg-[#0874bc] text-white px-4 py-2 rounded-md font-bold">
                                    Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ItemDetails;
