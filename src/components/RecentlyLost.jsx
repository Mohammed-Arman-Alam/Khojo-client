import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const RecentlyLost = () => {
    const [lostItem, setLostItem] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:3000/lost-found/lost')
            .then(res => res.json())
            .then(data=> setLostItem(data.slice(0,3)))
        },[])
    console.log(lostItem);
    return (
        <div>
            <h1 className='text-[#1E3A8A] text-center sm:text-start text-2xl sm:text-3xl font-bold text-nowrap '>--Recently Lost Items------</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 my-5 gap-2 justify-between w-full'> 
                {
                    lostItem.map(item =><ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default RecentlyLost;