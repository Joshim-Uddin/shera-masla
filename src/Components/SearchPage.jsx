import React, { useContext, useEffect } from 'react';
import { authContext } from '../Providers/AuthProviders';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const SearchPage = () => {
    const {searchModal, setSearchModal} = useContext(authContext)
    useEffect(()=>{
        
        window.onclick=(event)=>{
            const modal = document.getElementById('searchModal')
            if(event.target== modal){
                modal.style.display = 'none'
            }else{
                modal.style.display = 'block'
            }
            console.log(event.target)
        }
        // window.onclick=(event)=>{
        //     if(event.target == modal){
        //         modal.style.display = 'none'
        //     }
        // }
        
    }, [])
   // console.log(searchModal)
    
    return ( <>
{searchModal?
        <div id='searchModal' className='fixed top-0 left-0 transition w-full h-full bg-[rgba(0,0,0,0.4)]'>
       <div className='bg-[#fefefe] w-4/5'>
        <div className='flex items-center justify-between h-24'>
        <img className='h-12' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1750931875/shera_masla_3_vt8w2n.png" alt="" />
            <form action="">
                <input type="search" name="search" id="search" />
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