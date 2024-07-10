import { useState } from 'react'
import { Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' w-full relative top-0 p-4' style={{backgroundColor: '#254336', opacity: '0.75'}}>
            <ul className='flex justify-center space-x-3 '>
                <li><Link to='/' className='text-white font-semibold hover:text-gold text-sm'>HOME PAGE</Link></li>
                <li><Link to='/dokumentasiKKN85UAJY' className='text-white font-semibold hover:text-gold text-sm'>DOKUMENTASI KKN 85 UAJY</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;