import { useState } from 'react'
import Navbar from '../components/navbar'
import bg from '../assets/images/bg.jpg'
import VideoCard from '../components/videoCard'
import Card from '../components/card'
import CardGrid from '../components/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Maps from '../components/maps'

//maps assets
import admin from '../assets/images/PETA-ADMINISTRASI.png'
import data from '../assets/images/PETA-DATA-PENDUDUK.png'

//video assets
import bg_1 from '../assets/videos/BG WEB 1.mp4'
import bg_2 from '../assets/videos/BG WEB 2.mp4'
import bg_3 from '../assets/videos/BG WEB 3.mp4'
import bg_4 from '../assets/videos/BG WEB 4.mp4'
import bg_5 from '../assets/videos/BG WEB 5.mp4'
const LandingPage  = () => {
    return (
        <div className='relative w-full h-full'>
            <Navbar />
                <VideoCard src={"https://www.youtube.com/embed/QzAKRzz7Lvk?si=o__p21Vuiy1GYv-7"} type='video' backgroundVideo={bg_1} heading={'VIDEO PROFILE PADUKUHAN PELEM'} style={{color: '#FF8C00'}}/>
                <br />
                <div className='relative w-full h-fit md:h-fit xl:h-fit flex-col align-middle justify-center pb-10 xl:py-24 bg-black bg-opacity-50'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute top-0 left-0 w-full h-full object-cover z-[-1] '
                    >
                        <source src={bg_2} type='video/mp4'/>
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
                        <source src={bg_3} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div className='relative z-10 '>

                        <h1 className='text-xl pt-5 text-center font-bold pb-5 md:text-2xl xl:text-3xl xl:pb-24' style={{ color: '#DAD3BE' }}>LOKASI UMKM PADUKUAN PELEM</h1>
                        <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center md:h-[36rem] xl:h-fit'>
                            {/* <Maps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d987.375073573984!2d110.7112472!3d-8.1522427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb9003e9f8989%3A0x493d0047f011c7a3!2sTempe%20Dangsul%2C%20Pelem%2C%20Jepitu!5e0!3m2!1sid!2sid!4v1720316969527!5m2!1sid!2sid' 
                            head={'TEMPE DANGSUL'} desc={'Merupakan salah satu UMKM pembuatan tempe di Padukuhan Pelem'}/> */}
                            <Maps src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.519572119302!2d110.7114201!3d-8.150290199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb900577d189b%3A0xafd979612f5d759c!2sBiyyu%20Giling%20Tepung%20Beras%20%26%20Jagung!5e0!3m2!1sid!2sid!4v1720320108904!5m2!1sid!2sid'
                            head ={'BIYYU GILING TEPUNG BERAS & JAGUNG'} desc={'Merupakan salah satu UMKM pembuatan tepung beras dan jagung di Padukuhan Pelem'}/>
                            <Maps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15798.022833388277!2d110.71125!3d-8.1516944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb900586aa031%3A0x4971cb9a434fa50a!2sKarin%20Snack!5e0!3m2!1sen!2sid!4v1721541949419!5m2!1sen!2sid' 
                            head={'KARIN SNACK'} desc={'Merupakan salah satu UMKM pembuatan Snack di Padukuhan Pelem'}/>
                            <Maps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15797.96583216201!2d110.7165156!3d-8.1531375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc7004e6d65db%3A0xabdab527ccd1ed43!2sSnack%20Bu%20Santi!5e0!3m2!1sen!2sid!4v1721542142037!5m2!1sen!2sid' 
                            head={'SNACK BU SANTI'} desc={'Merupakan salah satu UMKM pembuatan Snack di Padukuhan Pelem'}/>

                        </div>
                    </div>
                </div>
                <br/>
                <VideoCard type='vertical' src={data} backgroundVideo={bg_4} heading={'PETA DATA PENDUDUK PADUKUAN PELEM'} style={{color: '#DAD3BE'}}/>
                <br />
                <VideoCard type='foto' src={admin} backgroundVideo={bg_5} heading={'PETA ADMINISTRASI DAN POTENSI LAHAN PADUKUAN PELEM'} style={{color: '#DAD3BE'}}/>
        </div>
    );
}

export default LandingPage;