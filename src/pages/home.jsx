import React from 'react'
import Navegation from '../components/Navegation'
import Arrow from '../assets/arrow.svg'
import Card from '../components/Card'

const Home = () => {
    return (
        <main>
            <Navegation />

            <section className='bg-hero w-full h-screen bg-cover flex flex-col justify-center items-start px-20 bg-fixed'>
                <div className='w-3/5 text-start flex flex-col gap-10'>
                    <h1 className='text-6xl font-bold text-white'>Live the Experience to the Fullest with Us</h1>

                    <a href="/" className='bg-[#0874bc] text-white w-[250px] flex justify-center gap-4 font-bold py-2 rounded-xl'>
                        Explore Packages <img className='w-[20px]' src={Arrow} alt="Right Arrow" />
                    </a>
                </div>
            </section>

            <section className='w-full h-screen p-20 flex flex-col justify-between'>
                <h1 className='text-6xl font-bold'>We Offer Best Services</h1>

                <div className='grid grid-cols-3 gap-10'>
                    <Card imgsrc='Beach' title='Vacation Tourism' description='short description' />
                    <Card imgsrc='Package' title='Tourist Packages' description='short description' />
                    <Card imgsrc='Education' title='Educational Tourism' description='short description' />
                    <Card imgsrc='Business' title='Business Tourism' description='short description' />
                    <Card imgsrc='Health' title='Health Tourism' description='short description' />
                    <Card imgsrc='Housing' title='Housing Search' description='short description' />
                </div>
            </section>
        </main>
    )
}

export default Home