import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, signOutUser,loading} = use(AuthContext);
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
                    {
                        user ?
                        <>
                        <NavLink to='/addItems' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>Add Lost & Found Items</NavLink>
                        <NavLink to='/myItems' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>My Items</NavLink>
                        <NavLink to='/allRecovered' className={({isActive})=>(isActive ? "font-bold border-b-2 border-[#1E3A8A] " : "")}>Recovered Items</NavLink>
                        </> : ''
                    }
                    
                    </>
    if(loading){
        return( 
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        );
    }                
    return (
        <div className='flex w-11/12 mx-auto justify-between pt-8 mb-5 bg-transparent items-center'>
            <Link to='/'>
            <div className='text-6xl font-poppins font-extrabold tracking-tight text-[#1E3A8A]'>
                K<span className='text-[#FF9B51]'>h</span>oj<span className='text-[#FF9B51]'>o</span>
            </div>
            </Link>
            <ul className='hidden lg:flex text-[#1E3A8A] text-2xl font-semibold gap-5 flex-nowrap text-nowrap '>
                {navItems}
            </ul>
            <div className='flex max-h-13'>
                <div className="lg:hidden dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-xl h-13 hover:bg-[#1E3A8A] hover:text-white mx-2">Pages</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-[#1E3A8A50] rounded-box z-1 w-52 p-2 shadow-sm text-[#1E3A8A] text-2xl font-semibold">
                        {navItems}
                    </ul>
                    </div>
                    {
                        (user) ?
                        <>
                            <button onClick={handleLogOut} className="btn shadow-none text-3xl text-[#1E3A8A] font-bold bg-white border-[#1E3A8A80] rounded-tl-xl rounded-bl-xl h-13 hover:bg-[#1E3A8A] hover:text-white">Signout</button>
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
    );
};

export default Navbar;