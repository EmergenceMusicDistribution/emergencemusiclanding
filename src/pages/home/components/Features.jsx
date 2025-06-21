import { FeaturesCard } from './FeaturesCard'

export const Features = () => {

  const features  = [
    {
      image: "images/features/analytic.png",
      title:"analytic reports",
      description:"Access your monthly financial reports. Find out where you are trending."
    },
    {
      image: "images/features/funding.png",
      title:"artist initiative return funding 3%",
      description:"We give 3% of our annual income back to our distributed artists."
    },
    {
      image: "images/features/digital.png",
      title:"digital artist development",
      description:"The world’s leading online platform for professional artistic development"
    },
    {
      image: "images/features/marketing.png",
      title:"music marketing strategies",
      description:" Our team will map out the best strategies for your new release."
    },
    {
      image: "images/features/royalties.png",
      title:"sound collection royalties",
      description:"You will always get 100% of your royalties, there are no hidden fees."
    },
  ]

  return (
    <div style={{background:'linear-gradient(90deg, #212129, #3e2b47 50%, #35222d)'}} className="flex sm:flex-col py-10 md:flex-col sm:gap-7 bg-[url('images/30.svg')] md:bg-cover bg-cover bg-no-repeat text-white ">

    <div className='space-y-10'>
    <h2 className='text-4xl sm:text-3xl capitalize text-white font-bold text-center '>
    <span className='uppercase text-yellow-500'>enter</span> the emergence music center
    </h2>

<div className='grid grid-cols-5 cursor-pointer items-center sm:grid-cols-1 md:grid-cols-3 gap-4 px-20 md:px-10 sm:px-6'>
    {
      features.map((feature, i)=>{
        return <FeaturesCard key={i} image={feature.image} title={feature.title} description={feature.description} />
      })
    }  
</div>
  
    </div>

    </div>
  )
}
