import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, signOutUser} = use(AuthContext);
    const handleLogOut =()=>{
        signOutUser()
        .then(()=>{
            Swal.fire({
                        title: "Logout Successful!",
                        icon: "success",
                        draggable: true
                        });
        })
        .catch((error)=>{
            Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Unable to logout!",
                    });
        })
    }
    const navItems =<>
                    <NavLink to='/' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>Home</NavLink>
                    
                    <NavLink to='allitems' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>Lost & Found Item</NavLink>
                    <NavLink to='/addItems' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>Add Lost & Found Items</NavLink>
                    <NavLink to='/myItems' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>My Items</NavLink>
                    </>
    return (
        <div className='flex w-11/12 mx-auto justify-between pt-8 mb-5 bg-transparent items-center'>
            <div className='text-6xl font-poppins font-extrabold tracking-tight text-[#1E3A8A]'>
                K<span className='text-[#FF9B51]'>h</span>oj<span className='text-[#FF9B51]'>o</span>
            </div>
            <div className='flex w-4/6  lg:w-4/7 justify-between items-baseline'>
                <ul className='flex text-[#1E3A8A] text-2xl font-semibold gap-5 flex-nowrap text-nowrap'>
                    {navItems}
                </ul>
                <p className='text-4xl font-semibold text-[#1E3A8A40]'>|</p>
                <div className='flex justify-between max-h-12'>
                    {
                        (user) ?
                        <>
                            <button onClick={handleLogOut} className="btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-tl-xl rounded-bl-xl py-6 ">Signout</button>
                            <div className='max-h-12 group cursor-pointer'>
                                <img src={user.photoURL} alt="profile" className='w-20 h-13 border border-[#1E3A8A] rounded-tr-xl rounded-br-xl'/>
                                <span className='opacity-0 font-semibold text-xl group-hover:opacity-100 transition'>
                                    {user.displayName}
                                </span>
                            </div>
                        </>
                        :
                        <Link to='/login' className='btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-xl py-6 '>Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;