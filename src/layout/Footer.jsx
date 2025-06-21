import React, { useState } from 'react'
import { GiCheckMark, GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [subScribeStatus, setSubscribeStatus] = useState("Subscribe")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const isSubscribed = JSON.parse(localStorage.getItem('subscribed'))

  return (
    <div className={`bg-[#212121] py-4 ${location.pathname==='/new-artist' || location.pathname==='/emd-artist' ? 'hidden': ''}`}>
    <div className='flex justify-between flex-wrap px-32 md:px-10 sm:px-5 gap-5 md:gap-3 py-10 sm:py-1 md:py-5 text-white'>
        <div onClick={()=>navigate('/')} className=' md:w-full sm:m-auto pb-7'>
            <img src="sitelogo.svg" alt="Emergence music logo" />
        </div>

        <div className='flex flex-col gap-3 sm:flex-1'>
            <h3 className='font-bold text-lg'>Resources</h3>
            {/* <Link className='text-gray-400'>About</Link> */}
            <a href="mailto:SUPPORT@EMERGENCEMUSICDISTRIBUTION.COM" className='text-gray-400'>Contact Us</a>
            {/* <Link className='text-gray-400'>Terms & Conditions</Link> */}
        </div>

        <div className='flex flex-col gap-3 sm:flex-1'>
            <h3 className='font-bold text-lg'>Services</h3>
            {/* <Link to={'/'} className='text-gray-400'>About</Link> */}
            <Link to={'/services'} className='text-gray-400'>Services</Link>
            {/* <Link className='text-gray-400'>Pricing</Link> */}
        </div>

        <div className='flex flex-col gap-3 sm:flex-1'>
            <h3 className='font-bold text-lg'>Community</h3>
            <a href='https://www.facebook.com/p/Emergence-Music-Distribution-100064302362140/' className='text-gray-400'>Facebook</a>
            <a href='https://x.com/emergence_music' className='text-gray-400'>Twitter</a>
            <a href='https://www.instagram.com/emergencemusicdistribution/' className='text-gray-400'>Instagram</a>
            <a href='https://www.tiktok.com/@emergencemusic?is_from_webapp=1&sender_device=pc ' className='text-gray-400'>Tiktok</a>
            <a href='www.youtube.com/@emergencemusicdistribution' className='text-gray-400'>Youtube</a>
        </div>

        <div className='flex flex-col gap-3 sm:items-center'>
            <h3 className='font-bold text-lg'>Newsletter</h3>

            <form className='flex flex-col gap-2' action="">
                <label htmlFor="email" className='text-gray-400'>Email Address *</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} required={true} style={{background:'rgba(218, 223, 229, .1)'}} className={`p-4 rounded-lg ${error ?'border-2 border-red-500':''}`} placeholder='Enter your email address' value={email} type="email" name="email" id="email" />
                <span className='text-red-500'>{error?'Required':''}</span>
                {
                    message === "" ? null :
                <div className='flex gap-1 items-center'>
                <span><GiCheckMark className='text-green-500'/></span>
                <span className='text-green-500 font-semibold'>{message}</span>
                </div>
                }
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className={`h-5 w-5`} name="" id="" />
                    <p className='text-gray-400'>I would like to recieve emails from <span className='text-white font-bold'>Emergence</span></p>
                </div>
                <button
                onClick={(e)=>{
                    e.preventDefault()
                    if (isSubscribed) {
                        setSubscribeStatus("Subscribing...")
                        setTimeout(() => {
                        setMessage("You are already subscribed.")
                        setSubscribeStatus("Subscribe")
                        }, 1000);

                      return setTimeout(() => {
                         setMessage("")
                         }, 5000) 
                    }
                    if (!email) {
                        return (
                            setError(true)
                        )
                    }
                    setError(false)
                    setSubscribeStatus("Subscribing...")
                    setTimeout(() => {
                        setSubscribeStatus("Subscribed")
                        localStorage.setItem('subscribed', "true")
                        setEmail('')
                    }, 3000);
                }}
                 className='text-white uppercase font-semibold w-fit bg-gradient-to-r from-[#6c54ad] to-[#f04762] hover:text-blue-500 rounded-md py-3.5 px-5 sm:m-auto' type='submit'> {subScribeStatus}</button>
            </form>
        </div>

    </div>

        <p className='text-center text-gray-400 pt-5 sm:px-2 sm:mb-14'>© Copyright Emergence Music Distribution Inc. 2020-2024. All Rights Reserved.</p>
    </div>
  )
}
