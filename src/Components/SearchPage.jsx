import React, { useContext, useEffect } from 'react';
import { authContext } from '../Providers/AuthProviders';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const SearchPage = () => {
    const {searchModal} = useContext(authContext)
    useEffect(()=>{
        
    }, [])
    console.log(searchModal)
    return ( <>
{searchModal?
        <div className='absolute top-0 transition w-full bg-blue-300'>
       <div className='flex items-center justify-between h-24'>
        <img className='h-12' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1750931875/shera_masla_3_vt8w2n.png" alt="" />
            <form action="">
                <input type="search" name="search" id="search" />
            </form>
            <div>
                <PersonIcon />
                <ShoppingBagOutlinedIcon />
            </div>
       </div>
            </div>:<></>}
            </>
    );
};

export default SearchPage;