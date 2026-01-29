import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import axios from 'axios';

const AddLostFound = () => {
    const {user} = use(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    
    const handleDateChange = (date) => {
        setStartDate(date);
        };
    const handleAddItems =e=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const itemData = Object.fromEntries(formData.entries());
        axios.post('http://localhost:3000/lost&found',itemData)
        .then(res=>{
            if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your  post added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
        .catch(err =>{
            Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Sorry unable to add post",
                                    });
        });
    }
    return (
        <div className='sm:w-11/12 mx-auto rounded-md my-10'>
        <div className="bg-[#1E3A8A50] p-6  rounded-md">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 text-center border-b border-dashed p-2 border-[#1E3A8A]">Add Lost & Found Items</h2>
            <form onSubmit={handleAddItems} className="flex flex-col gap-4">
                <div>
                    <label className="font-semibold text-lg">Post Type</label>
                    <select name="postType"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" placeholder="Select Type" required >
                        <option value="">Select Type</option>
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                    </select>
                </div>
                <div>
                    <label className="font-semibold text-lg">Thumbnail</label>
                    <input type="text" name="imageUrl" placeholder='Lost/Found Items Image Url' 
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required>
                </input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Title</label>
                    <input type="text" name="title" placeholder="Post Title"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white"  required></input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Description</label>
                    <textarea name="description" rows="3" placeholder="Lost/Found item details..."
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required></textarea>
                </div>
                <div>
                   <label className="font-semibold text-lg">Category</label>
                    <select name="category"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required>
                    <option value="">Select Item Category</option>
                    <option value="Pets">Pets</option>
                    <option value="Document">Document</option>
                    <option value="Gadget">Gadget</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Others">Others</option>
                </select>
                </div>
                <div>
                    <label className="font-semibold text-lg">Location</label>
                    <input type="text" name="location" placeholder="Where the item was lost or found"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required></input>
                </div>
                <div className='w-full'>
                    <label className="font-semibold text-lg">Date</label>
                    <br />
                        <DatePicker
                        name = 'date'
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        className="w-full block border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required
                        maxDate={new Date()}
                    />
                    
                    
                </div>
                <div><h3 className='text-center font-semibold text-xl'>Contact Information</h3></div>
                <hr className='border-dashed' />
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="font-semibold text-lg">Name</label>
                    <input type="text" name="userName" value={user?.displayName} readOnly
                    className="w-full border border-[#1E3A8A] rounded-md p-2 cursor-not-allowed">
                    </input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Email</label>
                    <input type="email" name="email" value={user?.email} readOnly
                    className="w-full border border-[#1E3A8A] rounded-md p-2  cursor-not-allowed">
                    </input>
                </div>
                </div>
                <div className="text-center">
                    <button type="submit"
                    className="bg-[#1E3A8A] text-white px-6 py-2 rounded-md font-semibold sm:text-lg hover:text-[#1E3A8A] hover:bg-white hover:border-2 hover:border-[#1E3A8A] hover:-mt-1">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddLostFound;