import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';

const AllLostFound = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/lost&found')
        .then(res => res.json())
        .then(data=>setItems(data))
    },[])
    return (
         <div className='sm:w-11/12 mx-auto rounded-md my-10'>
                <div className="bg-[#1E3A8A50] p-6  rounded-md">
                    <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 text-center border-b border-dashed p-2 border-[#1E3A8A]">All Lost & Found Items</h2>  
                    <div className='grid grid-cols-4 gap-4 justify-between'> 
                    {
                        items.map(item =><ItemCard className='w-full mx-auto' key={item._id} item={item}></ItemCard>)
                    }
                    </div>
                </div>
                
                </div>
    );
};

export default AllLostFound;