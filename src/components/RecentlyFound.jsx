import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const RecentlyFound = () => {
    const [foundItem, setFoundItem] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:3000/lost&found/found')
            .then(res => res.json())
            .then(data=> setFoundItem(data.slice(0,3)))
        },[])
        
        return (
            <div>
                <h1 className='text-[#1E3A8A] text-3xl font-bold flex'>--Recently Found Items------</h1>
                <div className='flex my-5 justify-evenly'> 
                    {
                        foundItem.map(item =><ItemCard item={item}></ItemCard>)
                    }
                </div>
            </div>
        );
};

export default RecentlyFound;