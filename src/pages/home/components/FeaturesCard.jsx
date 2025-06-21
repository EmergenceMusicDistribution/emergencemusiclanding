
export const FeaturesCard = ({title,description,image}) => {
  return (
    <div className='feature text-white hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:-translate-y-3 py-3 px-2 sm:px-4 space-y-4 text-center'>
        {/* <div className='flex justify-center'> */}
        <img className='h[60px] w-[70px] m-auto' src={image} alt="Emergence music distribution features image" />
        {/* </div> */}
        <h2 className='text-xl font-medium capitalize'>{title}</h2>
        <p className='text-gray-400'>
         {description}
        </p>

    </div>
  )
}
