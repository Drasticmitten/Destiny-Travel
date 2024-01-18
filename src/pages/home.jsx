import React from 'react'
import Navegation from '../components/Navegation'
import Arrow from '../assets/arrow.svg'

const Home = () => {
    return (
        <main>
            <Navegation />

            <section className='bg-hero w-screen h-screen bg-cover flex flex-col justify-center items-start px-20'>
                <div className='w-3/5 text-start flex flex-col gap-10'>
                    <h1 className='text-6xl font-bold text-white'>Live the Experience to the Fullest with Us</h1>

                    <a href="/" className='bg-[#0874bc] text-white w-[250px] flex justify-center gap-4 font-bold py-2 rounded-xl'>
                        Explore Packages <img className='w-[20px]' src={Arrow} alt="Right Arrow" />
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Home