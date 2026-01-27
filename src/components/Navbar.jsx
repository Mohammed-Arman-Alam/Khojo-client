import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navItems =<>
                    <NavLink to='/' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>Home</NavLink>
                      
                      <li>Lost Item</li>
                      <li>Found Item</li>
                    </>
    return (
        <div className='flex w-10/12 mx-auto justify-between pt-8 mb-5 bg-transparent items-center'>
            <div className='text-6xl font-poppins font-extrabold tracking-tight text-[#1E3A8A]'>
                K<span className='text-[#FF9B51]'>h</span>oj<span className='text-[#FF9B51]'>o</span>
            </div>
            <div className='flex w-3/6 justify-between items-baseline'>
                <ul className='flex text-[#1E3A8A] text-2xl font-semibold gap-5 flex-nowrap'>
                    {navItems}
                </ul>
                <p className='text-4xl font-semibold text-[#1E3A8A40]'>|</p>
                <div className='flex justify-between gap-3'>
                    <Link to='/login' className='btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-xl py-6 '>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;