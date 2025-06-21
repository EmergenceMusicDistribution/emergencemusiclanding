import React from 'react'
import { FaDollarSign, FaHome, FaSuitcase } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom' 


export const Tab = () => {
  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
  });
  }
  const location = useLocation()
  return (
    <div className={`tabs ${location.pathname==='/new-artist' || location.pathname==='/emd-artist'? 'sm:hidden md:hidden':'block'} bg-[#1e1f26] hidden sm:flex md:flex w-full justify-between items-center  fixed bottom-0 text-white`}>
       
        <NavLink onClick={scrollToTop} to={'/'} className='flex flex-col gap-1 items-center hover:text-white flex-1 py-1.5 md:py-3'>
            <FaHome size={20}/>
        <span className='text-[10px]'>Home</span>
        </NavLink>
      
        <NavLink onClick={scrollToTop} to={'services'} className='flex flex-col items-center gap-1 hover:text-white flex-1 py-1.5 md:py-3'>
        <FaDollarSign size={20}/>
        <span className='text-[10px]'>Services</span>
        </NavLink>

        <NavLink onClick={scrollToTop} to={'ambassador-clubs'} className='flex flex-col items-center gap-1 hover:text-white flex-1 py-1.5 md:py-3'>
        <FaSuitcase size={20}/>
        <span className='text-[10px]'>Ambassador</span>
        </NavLink>

        
    </div>
  )
}
