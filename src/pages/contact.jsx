import React from 'react'
import Navegation from '../components/Navegation';
import Whatsapp from '../assets/brandslogo/whatsapp.svg'
import Gmail from '../assets/brandslogo/gmail.svg'
import Facebook from '../assets/brandslogo/facebook.svg'
import Instagram from '../assets/brandslogo/instagram.svg'

const Contact = () => {
    return (
        <main>
            <Navegation />

            <section id='contact' className='p-20 w-full h-screen flex gap-10'>
                <div className='w-8/12 bg-langford bg-cover rounded-xl bg-right-bottom flex flex-col justify-center gap-5 text-center text-white'>
                    <h1 className='text-5xl font-bold'>Peatt Road 2830</h1>
                    <p className='text-xl font-bold'>British Columbia - Canada</p>
                </div>

                <div className='w-4/12 flex flex-col justify-center gap-10'>
                    <h1 className='text-3xl font-bold text-center'>You can also contact us through the following social networks and media</h1>

                    <div className='grid grid-cols-1 gap-5 items-center'>
                        <a className='flex justify-center items-center gap-4' href="https://api.whatsapp.com/send?phone=12502179382" target='_blank' rel='noopener noreferrer'>
                            <img src={Whatsapp} className='w-[30px]' alt="Whatsapp Logo" />
                            <span>+1 250 217 9382</span>
                        </a>

                        <a className='flex justify-center items-center gap-4' href="https://www.instagram.com/destinyandtravelcanada/" target='_blank' rel='noopener noreferrer'>
                            <img src={Instagram} className='w-[30px]' alt="Whatsapp Logo" />
                            <span>@destinyandtravelcanada</span>
                        </a>

                        <a className='flex justify-center items-center gap-4' href="https://www.facebook.com/profile.php?id=61553222615647" target='_blank' rel='noopener noreferrer'>
                            <img src={Facebook} className='w-[30px]' alt="Whatsapp Logo" />
                            <span>Destiny & Travel</span>
                        </a>

                        <a className='flex justify-center items-center gap-4' href="mailto:destinytravelcanada@gmail.com" target='_blank' rel='noopener noreferrer'>
                            <img src={Gmail} className='w-[30px]' alt="Whatsapp Logo" />
                            <span>destinytravelcanada@gmail.com</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact
