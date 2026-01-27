import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navItems =<>
                    <NavLink to='/' className={({isActive})=>(isActive && "font-bold border-b-2 border-[#1E3A8A] ")}>Home</NavLink>
                      
                      <li>Post an Item</li>
                      <li>How It Works</li>
                    </>
    return (
        <div className='flex w-10/12 mx-auto justify-between mt-10 bg-transparent items-center'>
            <div className='text-6xl font-poppins font-extrabold tracking-tight text-[#1E3A8A]'>
                K<spam className='text-[#FF9B51]'>h</spam>oj<spam className='text-[#FF9B51]'>o</spam>
            </div>
            <div className='flex w-4/7 justify-between items-baseline'>
                <ul className='flex text-[#1E3A8A] text-2xl font-semibold justify-between w-3/5'>
                    {navItems}
                </ul>
                <p className='text-4xl font-semibold text-[#1E3A8A40]'>|</p>
                <div className='flex justify-between gap-3'>
                    <Link className='btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-xl py-6 '>Login</Link>
                    <Link className='btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-xl py-6'>SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;