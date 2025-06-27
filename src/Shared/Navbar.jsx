import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import { styled, Tooltip, tooltipClasses } from '@mui/material';
import { authContext } from '../Providers/AuthProviders';
import SearchPage from '../Components/SearchPage';

const Navbar = () => {
    const {searchModal,setSearchModal} = useContext(authContext)
    const [topbar, setTopbar] = useState(true)
    useEffect(()=>{
        if(window.screenY >=45){
            setTopbar(false)
        }else{
            setTopbar(true)
        }
        }, [])
const OrangeTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'var(--primary)',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
console.log(searchModal)
    return (
        <div>
            <div className="top-bar bg-[var(--primary)] text-center h-10 flex items-center justify-center text-white font-semibold">আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:  +8801712113334</div>
            
            <nav className='flex justify-between items-center h-20 wrapper'>
                <img className='h-16' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1750931875/shera_masla_3_vt8w2n.png" alt="" />
                <div onClick={()=>setSearchModal(true)}>
                    <OrangeTooltip title="Search">
                <SearchIcon  className='text-[var(--primary)] cursor-pointer' />
                </OrangeTooltip>
                </div>
                <ul className='flex justify-between items-center gap-4'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'></NavLink>
                    </li>
                </ul>
            </nav>
            <SearchPage />
        </div>
    );
};

export default Navbar;