import React from 'react';
import RecentlyLost from './RecentlyLost';
import RecentlyFound from './RecentlyFound';
import { Link } from 'react-router';

const RecentlyLostAndFound = () => {
    return (
        <div className='w-11/12 mx-auto my-8  bg-white rounded-2xl p-5'>
            <div className='flex gap-8'>
                <aside className='w-5/10'>
                <RecentlyLost></RecentlyLost>
                </aside>
                <aside className='w-5/10'>
                    <RecentlyFound></RecentlyFound>
                </aside>
            </div>
            <div className='text-center'>
                <Link to='/allitems'>
                    <button className='btn w-40 text-2xl font-bold text-white bg-[#1E3A8A] py-7 rounded-2xl'>View All</button>
                </Link>
            </div>
            
        </div>
    );
};

export default RecentlyLostAndFound;