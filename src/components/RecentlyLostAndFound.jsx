import React from 'react';
import RecentlyLost from './RecentlyLost';
import RecentlyFound from './RecentlyFound';

const RecentlyLostAndFound = () => {
    return (
        <div className='w-11/12 mx-auto my-6 flex bg-white rounded-2xl p-5 justify-between'>
            <aside>
                <RecentlyLost></RecentlyLost>
            </aside>
            <aside>
                <RecentlyFound></RecentlyFound>
            </aside>
        </div>
    );
};

export default RecentlyLostAndFound;