import React, { useContext, useEffect } from 'react';
import { authContext } from '../Providers/AuthProviders';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';

const SearchPage = () => {
    const {searchModal, setSearchModal} = useContext(authContext)
    useEffect(()=>{
        
        window.onclick=(event)=>{
            const modal = document.getElementById('searchModal')
            const searchDiv = document.getElementById('searchDiv')
            const search = document.getElementById('search')
            const path = document.querySelector('svg#search>path')
            if(event.target== modal){
                modal.style.display = 'none'
            }else if(event.target == search || event.target== searchDiv || event.target== path){
                modal.style.display = 'block'
            }
        }
        
    }, [])
    
    return ( <>
{searchModal?
        <div id='searchModal' className='fixed top-0 left-0 transition w-full h-full bg-[rgba(0,0,0,0.4)]'>
       <div className='bg-[#fefefe] w-full'>
        <div className='flex items-center justify-between h-28 px-10'>
        <img className='h-12' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1750931875/shera_masla_3_vt8w2n.png" alt="" />
            <form action="" className='relative'>
                <input className='border border-black focus:outline-none bg-white w-80 rounded-lg py-2 ps-2' type="search" name="search" id="search" /> 
                <span className='absolute right-1 bg-white top-1/4 cursor-pointer ' onClick={()=>setSearchModal(false)}><SearchIcon /></span>
            </form>
            <div className="flex items-center justify-between gap-4">
                <PersonIcon />
                <ShoppingBagOutlinedIcon />
            </div>
       </div>
       </div>
            </div>:<></>}
            </>
    );
};

export default SearchPage;