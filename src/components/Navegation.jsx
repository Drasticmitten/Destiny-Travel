import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp';
import Bag from '../assets/bag.svg';

const Navigation = () => {
    return (
        <header className='flex justify-between items-center px-12 py-2 fixed w-screen bg-white z-10'>
            <Link to="/">
                <img className='w-[150px]' src={Logo} alt="Destiny & Travel Logo" />
            </Link>

            <div className='flex items-center gap-10'>
                <nav>
                    <ul className='flex gap-5 items-center'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="/trips">Trips</Link></li>
                        <li><Link to="/souvenirs">Souvenirs</Link></li>
                        <li><a href="/#contact">Contact Us</a></li>
                    </ul>
                </nav>

                <Link to="/cartpage">
                    <img className='w-[35px]' src={Bag} alt="Bag Logo" />
                </Link>
            </div>
        </header>
    );
}

export default Navigation;
