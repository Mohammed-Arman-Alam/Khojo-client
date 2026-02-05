import React from 'react';
const Banner = () => {
    return (
        <>
        <div className="bg-[url('https://i.ibb.co.com/PGV8Vjfk/banner-img.png')] h-120 -mt-35 bg-top bg-no-repeat bg-cover"> 
            <h1 className='text-center text-4xl sm:text-5xl pt-60 font-bold'>
                <span className='text-[#1E3A8A] tracking-tight'>হারানো জিনিস </span>
                <span className='text-[#D97706] tracking-tight'>ফিরে </span>
                <span className='text-[#1E3A8A] tracking-tight'>পান </span>
                <span className='text-[#15803D] tracking-tight'>সহজে! </span> 
            </h1>
            <h3 className='text-center text-[#1E3A8A90] text-xl sm:text-2xl mt-7 font-semibold'>Search for lost items or post what you'e found.</h3>
        </div>
        <h1></h1>
        </>
        
    );
};

export default Banner;