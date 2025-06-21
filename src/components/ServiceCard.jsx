
export const ServiceCard = ({...props}) => {
  return (
    <div style={{background:'hsla(0, 0%, 100%, .08)'}} className='transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-lg text-white space-y-2 py-7 px-6 shadow'>
        <div className='flex justify-center py-2'>
        <img className='w-1/4 m-auto' src={props.image} alt="Service image" />
        </div>
        <h2 className='text-lg font-bold'>{props.title}</h2>
        <p className='text-[#b9b6b6]'>
        {props.description}
        {props.duration}
        </p>
    </div>
  )
}

export const MiniServiceCard = ({...props})=>{

  return (
    <div style={{background:'hsla(0, 0%, 100%, .08)'}} className='w-5/6 sm:w-full md:w-full m-auto transition-transform duration-500 ease-in-out transform hover:scale-105 w--7 rounded-lg text-white space-y-2 py-4 px-5 shadow'>
        <div className='flex justify-center '>
        <img className='w-1/3 ' src={props.img} alt="service image" />
        </div>
        <h2 className='text-lg font-bold capitalize'>{props.title}</h2>
        <p className='text-[#b9b6b6]'>
          Duration : {props.duration}
        </p>

        <p className={ `${props.pricing.prevPrice?'space-x-1':''} text-[#b9b6b6] `}>
         <span> Pricing :</span> 
            <span className={ `${props.pricing.prevPrice?'line-through':''}`}> {props.pricing.prevPrice}</span>
          <span> {props.pricing.currentPrice}</span> 
        
        </p>

          {props?.list?.map((list,i)=>{
            return <div className="px-4" key={i}>
              <ul className=" list-disc">
                <li className="font-medium capitalize">{list.title}</li>
                {list?.subList?.map((sub,i)=>{
                  return <ul key={i}>
                    <li className="text-[#d7d3d3] capitalize"> - {sub}</li>
                  </ul>
                })} 
                 </ul>
            </div>
          })}

        <div onClick={()=>{window.location.href = "https://calendly.com/emergencemusicdistribution/30min?month=2024-09"}} className='flex justify-center pt-3'>
        <button className='bg-gradient-to-r from-[#6c54ad] to-[#f04762] hover:text-blue-500 border px-5 py-2.5 rounded-full uppercase shadow-lg font-semibold'>emerge now</button>
        </div>
    </div>
  )
}