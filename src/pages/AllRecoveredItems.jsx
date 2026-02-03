import React from 'react';
import { useLoaderData } from 'react-router';

const AllRecoveredItems = () => {
    const recoveredItems = useLoaderData();
    return (
        <div>
            <div className="bg-white rounded-md py-5">
            <h2 className='text-center text-[#1E3A8A] font-bold text-3xl py-3'>Recovered Items</h2>
            <table className='w-11/12 mx-auto border'>
                <thead className=' bg-[#1E3A8A70]'>
                    <tr>
                        <th className='text-left py-2 px-4'>Image</th>
                        <th className='text-center px-1 sm:px-4'>Title</th>
                        <th className='text-center px-1 sm:px-4'>Category</th>
                        <th className='text-center px-1 sm:px-2 text-wrap'>Recovered By</th>
                        <th className='text-center px-1 sm:px-2 text-wrap'>Recovered Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recoveredItems.length ?
                        (
                            recoveredItems.map(item=>
                                <tr key={item._id} className='text-center bg-[#FAF8E8] border border-gray-300'>
                                    <td className='p-2'><img src={item.thumbnail} alt="url broken" className='rounded-sm w-15 sm:w-30'/></td>
                                    <td className='text-center px-1 sm:px-4'>{item.title}</td>
                                    <td className='text-center px-1 sm:px-4'>{item.category}</td>
                                    <td className='text-center px-1 sm:px-4'>{item.recoveredUserName}</td>
                                    <td className='text-center px-1 sm:px-4'>{item.recoveredLocation}</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center text-[#1E3A8A] py-6 sm:text-2xl sm:font-bold'>No Recovered Item Available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
         </div>
        </div>
    );
};

export default AllRecoveredItems;