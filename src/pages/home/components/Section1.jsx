import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Page } from '../../../components/Page'

export const Section1 = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const mainHeading = t('Welcome').match(/\b\w+\b/g)
  return (
    <>
    <div style={{background:'linear-gradient(90deg, #382d50, #3a2d50 57%, #7a2e44)'}} className="flex sm:flex-col items-center md:flex-col px-20  pt-5 sm:px-2 text-white sm:gap-4 md:gap-4 bg-slate-950">

    <div className='space-y-7'>
    <h1 className='text-5xl sm:text-3xl font-bold uppercase sm:text-center md:text-center leading-snug'>
    {mainHeading.slice(0, -1).join(" ")} <span className='text-yellow-500'>{mainHeading[mainHeading.length - 1]}</span> 
    </h1>
 
    <div className='space-x-4 sm:space-x-0 sm:flex sm:flex-col md:flex justify-center  items-center gap-5 '>
    <button onClick={()=>navigate('/new-artist')} className='bg-gradient-to-r from-[#6c54ad] to-[#f04762] sm:w-fit hover:bg-blue-700 shadow-lg sm:px-5 sm:py-2 px-10 py-4 font-bold hover:text-blue-500 rounded-full uppercase text-xl'>{t('newArtist')}</button>
    <button onClick={()=>navigate('/emd-artist')} className='bg-teal-600 sm:w-fit hover:bg-teal-700 shadow-lg px-10 py-4 sm:px-5 sm:py-2 font-bold rounded-full uppercase text-xl'>EMD Artist</button>
    </div> 

<div className='space-y-5 sm:text-center md:text-center md:pb-10'>
    <div>
        <h2 className='uppercase text-pink-500 font-bold text-2xl'>{t('newArtist')}</h2>
        <p className='text-xl'>PLEASE REQUEST A MUSIC EVALUATION.</p>
    </div>

    <div className='space-y-1'>
        <h2 className='uppercase text-teal-500  font-bold text-2xl'>EMD Artist</h2>
        <p className='text-xl'>IF YOU HAVE A NEW RELEASE COMING SOON, PLEASE CONTACT US AT</p>
        <div className=' overflow-hidden break-all'>
        <a className='text-blue-500 hover:text-blue-600 uppercase text-xl' href="mailto:SUPPORT@EMERGENCEMUSICDISTRIBUTION.COM">support@emergencemusicdistribution.com</a>
        </div>
    </div>

</div>
  
</div>

{/* <div className=''> */}
    <img  className='w-1/2  md:w-full sm:w-full' src="/images/bg.png" alt="emergence music hero image" />
{/* </div> */}

    </div>
    </>
  )
}
