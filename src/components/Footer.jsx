import { FacebookAuthProvider } from 'firebase/auth';
import React from 'react';
import { FcOk, FcComments } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-[#1E3A8A50] sm:w-11/12 grid grid-cols-1 mx-auto  sm:grid-cols-3 gap-3 rounded-xl sm:justify-around py-8'>
            <div className='sm:flex mx-auto text-center sm:text-start'>
                <FaSearch  size={60} className='text-[#1E3A8A] mx-auto'/>
                <div>
                    <h2 className='text-[#1E3A8A] text-2xl font-bold'>Search & Report</h2>
                    <h5 className='text-[#00000080] text-lg font-semibold'>Find or report lost item easily</h5>
                </div>
            </div>
            <div className='sm:flex  mx-auto text-center sm:text-start'>
                <IoIosChatbubbles size={60} className='text-[#FF9B51] mx-auto'/>
                <div>
                    <h2 className='text-[#1E3A8A] text-2xl font-bold'>Connect with Finders</h2>
                    <h5 className='text-[#00000080] text-lg font-semibold'>Chat securely with those who found your item</h5>
                </div>
            </div>
            <div className='sm:flex mx-auto text-center sm:text-start'>
                <FcOk className='mx-auto' size={60}/>
                <div>
                    <h2 className='text-[#1E3A8A] text-2xl font-bold'>Reclaim & Recover</h2>
                    <h5 className='text-[#00000080] text-lg font-semibold'>Get your lost items back safely</h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;