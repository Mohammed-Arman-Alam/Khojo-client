import React from 'react';
import { Link } from 'react-router';

const ItemCard = ({item}) => {
    const {thumbnail, title, _id} = item;
    return (
        <div className='text-center w-full mx-auto px-2'>
            <img src={thumbnail} alt=""  className='h-40 w-full image-full'/>
            <h3 className='font-semibold text-xl my-2 text-[#1E3A8A]'>{title}</h3>
            <Link to={`/itemdetails/${_id}`}>
                <button className='btn w-4/5 bg-[#FF9B51] text-white text-lg rounded-xl'>View Details</button>
            </Link>
        </div>
    );
};

export default ItemCard;