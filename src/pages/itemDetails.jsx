import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ItemDetails = ()=> {
    const itemDetails = useLoaderData();
    const {postType, title, description, location, date, userName, email, thumbnail, _id, status} = itemDetails;
    const {user} = use(AuthContext);
    const [itemStatus , setStatus] = useState(status);
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        setStartDate(date);
        };
    const handleRecover =e=>{
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const recovereInfo = Object.fromEntries(formData.entries());
      const recovereData ={...itemDetails, ...recovereInfo};
      axios.post('http://localhost:3000/recoveredItems',recovereData)
      .then(res=>
        axios.patch(`http://localhost:3000/lost-found/${_id}`, {status : 'recovered'})
        .then(res=>{
            if(res.data.modifiedCount){
                Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Item Recovered successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setStatus('recovered');
                    document.getElementById('my_modal_2').close();
            }
        })
        .catch(error => console.log(error))
      )
      .catch(error => console.log(error))
    }
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
            <div>
              {
                itemStatus ? 
                <button className='bg-[#FF9B51] text-white text-lg rounded-lg text-wrap mt-2 p-2'>
                    Recovered
                </button> :
                <button 
                className='btn bg-[#FF9B51] text-white text-lg rounded-lg text-wrap mt-2'
                onClick={()=>document.getElementById('my_modal_2').showModal()} >
                {
                  (postType === 'Lost') ?
                  'Found This!'
                  :
                  'This is Mine!'
                }
              </button>
              }
              
            </div>
          </div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-center text-[#1E3A8A]">Recover Item</h3>
            <form onSubmit={handleRecover}>
            <div>
                <label className="font-semibold text-lg">Recovered Location</label>
                <input type="text" name="recoveredLocation" placeholder="Where the item was lost or found"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required></input>
                </div>
                <div className='w-full'>
                <label className="font-semibold text-lg">Recovered Date</label>
                <br />
                <DatePicker
                  name = 'recoveredDate'
                  selected={startDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  className="w-full block border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#1E3A8A] focus:border-2 focus:bg-white" required
                  maxDate={new Date()}
                  />
                </div>
                <div><h3 className='text-center font-semibold text-xl'>Your Contact Information</h3></div>
                <hr className='border-dashed' />
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-lg">Name</label>
                  <input type="text" name="recoveredUserName" value={user?.displayName} readOnly
                  className="w-full border border-[#1E3A8A] rounded-md p-2 cursor-not-allowed">
                  </input>
                </div>
                <div>
                <label className="font-semibold text-lg">Email</label>
                <input type="email" name="recoveredEmail" value={user?.email} readOnly
                className="w-full border border-[#1E3A8A] rounded-md p-2  cursor-not-allowed">
                </input>
                  </div>
                  </div>
                  <div className="text-center my-2">
                    <button type="submit"
                    className="bg-[#1E3A8A] text-white px-6 py-2 rounded-md font-semibold sm:text-lg hover:text-[#1E3A8A] hover:bg-white hover:border-2 hover:border-[#1E3A8A] hover:-mt-1">Submit</button>
                    <button 
                    type='button'
                    onClick={() => document.getElementById('my_modal_2').close()}
                    className="bg-[#1E3A8A] text-white px-6 py-2 rounded-md font-semibold sm:text-lg hover:text-[#1E3A8A] hover:bg-white hover:border-2 hover:border-[#1E3A8A] hover:-mt-1 modal-backdrop my-2">Cancel</button>
                  </div>
          </form>
          </div>
        </dialog>
        </div>
    );
};

export default ItemDetails;