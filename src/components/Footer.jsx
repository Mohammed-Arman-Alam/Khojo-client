import { FacebookAuthProvider } from 'firebase/auth';
import React from 'react';
import { FcOk, FcComments } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-[#1E3A8A50] w-11/12 mx-auto flex rounded-xl justify-around py-5'>
            <div className='flex'>
                <FaSearch  size={60} className='text-[#1E3A8A]'/>
                <div>
                    <h2 className='text-[#1E3A8A] text-2xl font-bold'>Search & Report</h2>
                    <h5 className='text-[#00000080] text-lg font-semibold'>Find or report lost item easily</h5>
                </div>
            </div>
            <div className='flex'>
                <IoIosChatbubbles size={60} className='text-[#FF9B51]'/>
                <div>
                    <h2 className='text-[#1E3A8A] text-2xl font-bold'>Connect with Finders</h2>
                    <h5 className='text-[#00000080] text-lg font-semibold'>Chat securely with those who found your item</h5>
                </div>
            </div>
            <div className='flex'>
                <FcOk  size={60}/>
                <div>
                    <h2 className='text-[#1E3A8A] text-2xl font-bold'>Reclaim & Recover</h2>
                    <h5 className='text-[#00000080] text-lg font-semibold'>Get your lost items back safely</h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;