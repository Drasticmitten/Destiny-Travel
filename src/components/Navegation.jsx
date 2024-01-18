import React from 'react'
import Logo from '../assets/logo.webp'
import Bag from '../assets/bag.svg'

const Navegation = () => {
    return (
        <header className='flex justify-between items-center px-12 py-2 fixed w-screen bg-white'>
            <a href="/">
                <img className='w-[150px]' src={Logo} alt="Destiny & Travel Logo" />
            </a>

            <div className='flex items-center gap-10'>
                <nav>
                    <ul className='flex gap-5 items-center'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Packages</a></li>
                        <li><a href="/">Trips</a></li>
                        <li><a href="/">Souvenirs</a></li>
                    </ul>
                </nav>

                <a href="/">
                    <img className='w-[35px]' src={Bag} alt="Bag Logo" />
                </a>
            </div>
        </header>
    )
}

export default Navegation