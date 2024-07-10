import React from 'react';
import bg from '../assets/images/bg.jpg';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import img1 from '../assets/images/dummy/1.jpeg';
import img2 from '../assets/images/dummy/2.jpeg';
import img3 from '../assets/images/dummy/3.jpeg';
import img4 from '../assets/images/dummy/4.jpeg';
import img5 from '../assets/images/dummy/5.jpeg';
import img6 from '../assets/images/dummy/6.jpeg';
import img7 from '../assets/images/dummy/7.jpeg';
import img8 from '../assets/images/dummy/8.jpeg';
import img9 from '../assets/images/dummy/9.jpeg';
import img10 from '../assets/images/dummy/10.jpeg';
import img11 from '../assets/images/dummy/11.jpeg';
import img12 from '../assets/images/dummy/12.jpeg';

export const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
];

export default function DocPage() {
    return (
        <div className='w-full h-screen xl:h-[58rem] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Navbar />
            <div className='flex-col align-middle justify-center'>
                <Carousel images={images} />
            </div>
        </div>
    );
}
