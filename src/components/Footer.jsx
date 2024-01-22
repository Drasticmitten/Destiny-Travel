import React from 'react'
import { Link } from 'react-router-dom';
import Whatsapp from '../assets/brandslogo/whatsapp.svg'
import Gmail from '../assets/brandslogo/gmail.svg'
import Facebook from '../assets/brandslogo/facebook.svg'
import Instagram from '../assets/brandslogo/instagram.svg'

const Footer = () => {
    return (
        <footer className='w-full p-20 bg-[#f0f0f0] flex justify-between items-center'>
            <div className='w-8/12 flex flex-col gap-10 justify-between'>
                <div className='text-start'>
                    <h1 className='text-4xl font-bold mb-3'>Destiny & Travel</h1>
                    <p className='text-xl'>Live the Experience to the Fullest with Us.</p>
                </div>

                <div className='flex gap-6'>
                    <a className='bg-white p-4 rounded-full' href="https://api.whatsapp.com/send?phone=12502179382" target='_blank' rel='noopener noreferrer'><img src={Whatsapp} className='w-[25px]' alt="" /></a>
                    <a className='bg-white p-4 rounded-full' href="https://www.instagram.com/destinyandtravelcanada/" target='_blank' rel='noopener noreferrer'><img src={Instagram} className='w-[25px]' alt="" /></a>
                    <a className='bg-white p-4 rounded-full' href="https://www.facebook.com/profile.php?id=61553222615647" target='_blank' rel='noopener noreferrer'><img src={Facebook} className='w-[25px]' alt="" /></a>
                    <a className='bg-white p-4 rounded-full' href="mailto:destinytravelcanada@gmail.com" target='_blank' rel='noopener noreferrer'><img src={Gmail} className='w-[25px]' alt="" /></a>
                </div>
            </div>

            <div className='flex gap-10'>
                <div className='w-[180px]'>
                    <h1 className='font-bold text-start mb-5'>Useful Links</h1>
                    
                    <nav>
                        <ul className='text-end'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/packages">Packages</Link></li>
                            <li><Link to="/trips">Trips</Link></li>
                            <li><Link to="/souvenirs">Souvenirs</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className='w-[180px]'>
                    <h1 className='font-bold text-start mb-5'>Other Resources</h1>

                    <ul className='text-end'>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
