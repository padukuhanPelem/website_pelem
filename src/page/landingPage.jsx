import { useState } from 'react'
import Navbar from '../components/navbar'
import bg from '../assets/images/bg.jpg'
import VideoCard from '../components/videoCard'
import Card from '../components/card'
import CardGrid from '../components/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import test from '../assets/videos/test.mp4'
import maps from '../assets/images/maps.jpg'
import Maps from '../components/maps'
import expoFix from '../assets/videos/expoFix.mp4'
import atma from '../assets/videos/atma.mp4'
const LandingPage  = () => {
    return (
        <div className='relative w-full h-full'>
            <Navbar />
                <VideoCard src={atma} type='video' backgroundVideo={expoFix} heading={'VIDEO PROFILE PADUKUAN PELEM'} style={{color: '#FF8C00'}}/>
                <br />
                <div className='relative w-full h-[134rem] md:h-[72rem] xl:h-[56rem] flex-col align-middle justify-center pb-10 xl:py-24 bg-black bg-opacity-50'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute top-0 left-0 w-full h-full object-cover z-[-1] '
                    >
                        <source src={expoFix} type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                    <div className='relative z-10'>
                        <h1 className='text-gold text-5xl text-center font-bold pt-5'>PELEM</h1>
                        <br />
                        <h2 className='text-white text-center '>Dusun kecil yang tersembunyi di jantung pedesaan yang rindang</h2>
                        <br />
                        <CardGrid />
                    </div>
                </div>
                <br />
                <div className='relative w-full h-full align-middle justify-center xl:py-16 bg-black bg-opacity-50'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                    >
                        <source src={atma} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div className='relative z-10 '>

                        <h1 className='text-xl pt-5 text-center font-bold pb-5 md:text-2xl xl:text-3xl xl:pb-24' style={{ color: '#DAD3BE' }}>LOKASI UMKM PADUKUAN PELEM</h1>
                        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center md:h-[36rem] xl:h-[56rem]'>
                            <Maps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d987.375073573984!2d110.7112472!3d-8.1522427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb9003e9f8989%3A0x493d0047f011c7a3!2sTempe%20Dangsul%2C%20Pelem%2C%20Jepitu!5e0!3m2!1sid!2sid!4v1720316969527!5m2!1sid!2sid' 
                            head={'TEMPE DANGSUL'} desc={'Merupakan salah satu UMKM pembuatan tempe di desa Pelem'}/>
                            <Maps src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.519572119302!2d110.7114201!3d-8.150290199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb900577d189b%3A0xafd979612f5d759c!2sBiyyu%20Giling%20Tepung%20Beras%20%26%20Jagung!5e0!3m2!1sid!2sid!4v1720320108904!5m2!1sid!2sid'
                            head ={'BIYYU GILING TEPUNG BERAS & JAGUNG'} desc={'Merupakan salah satu UMKM pembuatan tepung beras dan jagung di desa Pelem'}/>
                            <Maps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d987.375073573984!2d110.7112472!3d-8.1522427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb9003e9f8989%3A0x493d0047f011c7a3!2sTempe%20Dangsul%2C%20Pelem%2C%20Jepitu!5e0!3m2!1sid!2sid!4v1720316969527!5m2!1sid!2sid' 
                            head={'TEMPE DANGSUL'} desc={'Merupakan salah satu UMKM pembuatan tempe di desa Pelem'}/>
                            <Maps src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.519572119302!2d110.7114201!3d-8.150290199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb900577d189b%3A0xafd979612f5d759c!2sBiyyu%20Giling%20Tepung%20Beras%20%26%20Jagung!5e0!3m2!1sid!2sid!4v1720320108904!5m2!1sid!2sid' 
                            head ={'BIYYU GILING TEPUNG BERAS & JAGUNG'} desc={'Merupakan salah satu UMKM pembuatan tepung beras dan jagung di desa Pelem'}/>
                        </div>
                    </div>
                </div>
                <br/>
                <VideoCard type='foto' src={maps} backgroundVideo={expoFix} heading={'PETA POTENSI TANAH PADUKUAN PELEM'} style={{color: '#DAD3BE'}}/>
        </div>
    );
}

export default LandingPage;