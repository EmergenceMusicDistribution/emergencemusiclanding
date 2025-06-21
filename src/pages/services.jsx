import React from 'react'
import { MiniServiceCard, ServiceCard } from '../components/ServiceCard'
import { services } from '../services'
import { Page } from '../components/Page'

export const Services = () => {
    const promotionServices = [
        {
            title:'Base Single Promotion',
            img:'images/single-promo-icon.svg', 
            pricing : {
                prevPrice:'$399.99 USD',
                currentPrice:'$299.99 USD + tax'
            },
            duration:'30 days',
            list: [
             {
                title: 'Graphic design', 
                subList:['Social media promotion', 'audio video social media', 'press release']
             }, 

             {
                title: 'marketing campaign', 
                subList:['marketing campaign','social media ads','youtube ads', '*influencer',]
             },
              {
                title : 'Email Promo (Playlist Curator, Music Blog)'
             }
            ]

        }, 
        {
            title:'Subscription Base Single Promotion (Full Price 399.99$)',
            img:'images/single-promo-icon.svg', 
            pricing : {
                // prevPrice:'',
                currentPrice:' 133.33$ USD / Monthly + tax'
            },
            duration:'90 days',
            list: [
                {
                   title: 'Graphic design', 
                   subList:['Social media promotion', 'audio video social media', 'press release']
                }, 
   
                {
                   title: 'marketing campaign', 
                   subList:['marketing campaign','social media ads','youtube ads', '*influencer',]
                },
                 {
                   title : 'Email Promo (Playlist Curator, Music Blog)',
                   subList:[]
                }
               ]
        }
    ]

  return (
    <div style={{background:'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className=' px-28 md:px-10 sm:px-0 py-10'>

        {/* <Page
            title={"Emergence Music Services"}
            description={"Emergence Music Distribution Services page"}
            name={"Emergence Music Distribution"}
            type={"website"}
            headingStyles={'uppercase sm:px-5 font-bold text-white text-lg'}
        > */}

        
        {/* <h1 className='uppercase sm:px-5 font-bold text-white text-lg'>Welcome to emergence music distribution services.</h1> */}
        
        <div className=' sm:px-2 text-white pt-4 space-y-1 w-3/4 m-auto sm:w-full md:w-full'>
            <h3 className='text-lg font-bold text-center text-teal-500'>Single Promotion Service</h3>
            <p className='text-gray-300 text-center leading-7'>
          <b className='text-white'>The Single Promotion Pack</b>  is designed to help artists maximize exposure for their music. This all-in-one service includes <b className='text-white'>Graphic Design</b>  for eye-catching visuals,
             a tailored <b className='text-white'>Marketing Campaign</b>  to boost visibility, and <b className='text-white'>Email Promotion</b>  to engage your target audience. Perfect for artists looking to amplify their reach, 
            this pack ensures your music stands out across platforms.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-7 sm:gap-6 py-8 sm:px-6 md:px-6'>
        {
            promotionServices.map((service,i)=>{
             return <MiniServiceCard key={i} title={service.title} img={service.img} duration={service.duration} pricing={service.pricing} list={service.list}/>
            })
        }
        </div>
        <div className='pt-5'>

        <div className='space-y-2 sm:px-4'>
        <h2  className='bg-gradient-to-r from-[#f7522b] to-[#941f7a] bg-clip-text text-transparent font-bold text-5xl py-2 sm:text-3xl text-center'>Digital Artist Development Services</h2>
    <div className='w-1/2 sm:w-full md:w-2/3 m-auto'>
    <p className='text-center text-gray-400'>
    We empower the artist by digitally branding themselves. By assisting them with all the tools
    to guide them to numerous revenue opportunities.
    </p>
    </div>
        </div>

        </div>
    <div  className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 py-8 sm:px-6 md:px-6'>
        {services.map((service,i)=>{
            return (
                <ServiceCard key={i} title={service.title} image={service.image} description={service.description}/>
            )
        })}
        </div>

        {/* </Page> */}
        
            </div>
  )
}
