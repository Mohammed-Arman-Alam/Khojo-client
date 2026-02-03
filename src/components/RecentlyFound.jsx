import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const RecentlyFound = () => {
    const [foundItem, setFoundItem] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:3000/lost-found/found')
            .then(res => res.json())
            .then(data=> setFoundItem(data.slice(0,3)))
        },[])
        
        return (
            <div>
                <h1 className='text-[#1E3A8A] text-center sm:text-start text-2xl sm:text-3xl font-bold text-nowrap'>--Recently Found Items------</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 my-5 gap-2 justify-between w-full'> 
                    {
                        foundItem.map(item =><ItemCard item={item}></ItemCard>)
                    }
                </div>
            </div>
        );
};

export default RecentlyFound;