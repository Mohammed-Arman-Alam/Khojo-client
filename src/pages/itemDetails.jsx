import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const itemDetails = ()=> {
    const {postType, title, description, location, date, userName, email, thumbnail} = useLoaderData();
    return (
        <div className="w-11/12 mx-auto my-10 rounded-2xl card card-side shadow-sm bg-[#1E3A8A90]">
          <figure>
            <img
              src={thumbnail}
              alt="Item Image" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold border-dotted border-b-3 py-2">{postType} Item Details</h2>
            <h3 className='text-lg font-medium'>{postType} Item Name : {title}</h3>
            <h3 className='text-lg font-medium'>{postType} Date : {date}</h3>
            <h3 className='text-lg font-medium'>{postType} Location : {location}</h3>
            <h3 className='text-lg font-medium'>{postType} by : {userName}</h3>
            <h3 className='text-lg font-medium'>Contact : {email}</h3>
            <p className='text-lg font-medium'>Details : {description}</p>
          </div>
        </div>
    );
};

export default itemDetails;