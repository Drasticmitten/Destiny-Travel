import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navegation from '../components/Navegation';
import Footer from '../components/Footer';

import souvenirsData from '../database/souvenirs.json';

const Souvenirs = () => {
    const [travelSouvenirs, setTravelSouvenirs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setTravelSouvenirs(souvenirsData);
    }, []);

    const handleSouvenirsClick = (item) => {
        navigate(`/souvenirs/${item.id}`);
    };

    return (
        <main>
            <Navegation />

            <div className="w-full p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {travelSouvenirs.map((item) => (
                    <div key={item.id} className="bg-[#f7f7f7] p-5 rounded-xl shadow-md">
                        <img className='rounded-xl' src={item.image} alt="Trip Img" />

                        <h2 className="text-lg font-bold mt-5">{item.title}</h2>
                        <p className="text-gray-600">{item.s_description}</p>

                        <div className='flex items-center justify-between mt-5'>
                            <p className='font-bold'>{item.price} CAD</p>
                            <button
                                onClick={() => handleSouvenirsClick(item)}
                                className="bg-[#0874bc] text-white px-4 py-2 rounded-md font-semibold"
                            >
                                Show More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
};

export default Souvenirs;