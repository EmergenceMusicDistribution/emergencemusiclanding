import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
  return (
    <div style={{background: location.pathname==='/'? 'linear-gradient(90deg, #382d50, #3a2d50 57%, #7a2e44)' : 'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className={`${location.pathname==='/new-artist' || location.pathname==='/emd-artist'?"hidden":null} flex items-center justify-between sm:px-2 md:px-16 px-20 py-4`}>
      <div onClick={()=>navigate('/')} className=' cursor-pointer sm:pl-4 '>
        <img className='sm:w-4/5 ' src="/sitelogo.svg" alt="Emergence music logo" />
      </div>
        <div className='nav-link text-gray-300 sm:hidden md:hidden uppercase space-x-7'>
        <NavLink to={'/'} className='hover:text-pink-700'>Home</NavLink>
          <NavLink to={'services'} className='hover:text-pink-700'>Services</NavLink>
          <NavLink to={'ambassador-clubs'} className='hover:text-pink-700'>Ambassador clubs</NavLink>
          {/* <Link className='hover:text-pink-700'>About us</Link> */}
        </div>
        <LanguageSwitcher/>
    </div>
  )
}
