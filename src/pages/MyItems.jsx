import React, { use, useEffect, useState } from 'react';
import {myItemsPromise} from '../api/MyItemsApi';
import { AuthContext } from '../context/AuthProvider';
import 'primeicons/primeicons.css';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const {user} = use(AuthContext);
    useEffect(()=>{
        if(!user?.email) return;
        myItemsPromise(user.email).then(data => setMyItems(data));
    },[user])
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`http://localhost:3000/lost-found/${id}`
                )
                    if(res.data?.deletedCount > 0){
                        Swal.fire({
                        title: "Item Deleted",
                        text: "Your item was deleted from the database successfully.",
                        icon: "success",
                        confirmButtonText: "ok"
                        
                    })
                    setMyItems(prev => prev.filter(item=> item._id !== id));
                    }
                
                }
                catch(err){
                    Swal.fire("Error!", "Failed to delete item.", "error");
                    console.error(err);
                }
        }
    })
}
    return (
        <div className="bg-white rounded-md py-5">
            <table className='w-full sm:w-11/12 mx-auto border'>
                <thead className='w-full bg-[#1E3A8A70]'>
                    <tr>
                        <th className="text-3xl font-bold text-[#1E3A8A] mb-3 border-2 text-center  p-2" colSpan={4}>My Items</th>
                    </tr>
                    <tr>
                        <th className='text-left py-2 px-4'>Image</th>
                        <th className='text-start px-1 sm:px-4'>Title</th>
                        <th className='text-start px-1 sm:px-4'>Category</th>
                        <th className='text-center sm:text-end sm:pr-12'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.length ?
                        (
                            myItems.map(item=>
                                <tr key={item._id} className='text-center bg-[#FAF8E8] border border-gray-300'>
                                    <td className='p-2'><img src={item.thumbnail} alt="url broken" className='rounded-sm w-15 sm:w-30'/></td>
                                    <td className='text-start px-1 sm:px-4'>{item.title}</td>
                                    <td className='text-start px-1 sm:px-4'>{item.category}</td>
                                    <td className='text-center sm:text-end sm:px-4'>
                                        
                                        <Link to={`/updateItems/${item._id}`}>
                                            <button className='btn bg-[#FF9B51] rounded-md text-[#FAFAF5] m-1 hover:text-black'>
                                            <i className="pi pi-pen-to-square"></i></button>
                                        </Link>
                                        <button onClick={()=>handleDelete(item._id)} className='btn bg-[#FF9B51] rounded-md text-[#FAFAF5] m-1 hover:text-red-500'>
                                            <i className='pi pi-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center text-[#1E3A8A] py-6 sm:text-2xl sm:font-bold'>No Item Available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;