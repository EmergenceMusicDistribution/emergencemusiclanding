import { FaCheck, FaRegCheckCircle } from "react-icons/fa"
import { clubs } from "../data/clubs"
import { Page } from "../components/Page"
import { Link } from "react-router-dom"

export const AmbassadorClubs = () => {

  return (
    <div style={{background:'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}}  className='px-20 sm:px-5 md:px-10 py-8 '>
    <Page
    title={"Emergence Music Ambassador Clubs"}
    description={"Emergence Music Distribution ambassador clubs."}
    name={"Emergence Music Distribution"}
    type={"website"}
    headingStyles={'text-4xl font-bold text-center text-yellow-500'}
    >

        {/* <h1 className='text-4xl font-bold text-center text-yellow-500'>Emergence Music Ambassador Clubs</h1> */}
        <p className='text-[#a1a1a1] text-center text-lg py-4'>Join one of our clubs and become part of the Elite of Music Artists.</p>
        
        <div className='text-[#a1a1a1] text-center space-y-5 text-[16px]'>
            <p>Emergence Music Distribution has created the EMERGENCE MUSIC AMBASSADOR CLUBS for artists who want to grow in the music industry, challenge themselves and perform better in a competitive environment.
             We believe this is crucial to professional digital artistic development, which is why we created a revolutionary structure where artists can sharpen their musical skills, their music marketing strategies, 
             improve their professional leaderships compared to international artists regardless of musical genres. They will learn how to generate income, 
             get support for their artistic career development from Emergence Music Distribution, get career opportunities and receive prizes.</p>

             <p>
             The EMERGENCE MUSIC AMBASSADOR CLUBS was designed because music distribution plays a major role in an artist’s visibility, 
             even on the international music scene. However, this is not how artists make a career out of music. We want to push and challenge artists by inviting them to find out through this new adventure who has the best career plan.
              Each year, different artists will compete against each other. They will be split into 4 programs DISRUPTOR SOUND, WILD CARD SOUND, SOUND BREAKER AND GLOBAL SOUND. Every month, 
             specific calculations will help determine their ranking. Every artist of a specific club will receive the same services. This is our way of giving our members the same opportunities for career development. This way, 
             we can also find out who has the best entrepreneurial vision and the best game plan to become the next international music sensation.
             </p>

             <p>
             At the end of each year, artists who perform beyond the required minimum for each Emergence Music Ambassador Clubs program will be promoted to the next program. For instance,
              they can be upgraded from WILD CARD SOUND to SOUND BREAKER, from SOUND BREAKER to GLOBAL SOUND. If they are already in the GLOBAL SOUND program,
              they will keep on enjoying the benefits of their ranking. At the end of each year, artists who perform below the required minimum for each Emergence Music Ambassador Clubs program will be downgraded to a lower program. 
              For instance, they can be demoted from GLOBAL SOUND to SOUND BREAKER, from SOUND BREAKER to WILD CARD SOUND and from WILD CARD SOUND to DISRUPTOR SOUND.
             </p>
        </div>

<div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 py-10 px-7 sm:px-3">
      {clubs.map((club,i)=>{
        return (
          <div style={{background:'hsla(0, 0%, 100%, .08)'}} className='transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-lg text-white space-y-2 py-7 px-6 shadow' key={i}>
            <div className="">
            <img className="w-1/2 m-auto" src={club.image} alt="" />
            </div>
            <h2 className="font-bold text-lg">{club.title}</h2>
            <h2 >{club.subTitle}</h2>
              <ul className="px-4">
                {club.list.map((list,i)=>{
                 return (
                   <li className=" flex items-center gap-2" key={i}>
                     <span className="bg-green-600 rounded-full w-fit h-fit p-0.5">
                       <FaCheck
                       size={10}
                         style={{
                           color: "#ffffff",
                           
                         }}
                       />
                     </span>
                    <span>{list}</span> 
                   </li>
                 );
                })}
              </ul>
              <p className=" italic">
                {club?.subTitleText}
              </p>
          </div>
        )
      })}
</div>


<Link to={'/new-artist'} className="flex shadow uppercase justify-center bg-gradient-to-r from-[#6c54ad] to-[#f04762] px-7 py-3.5 rounded-full w-fit m-auto text-white hover:text-blue-400 font-semibold">
        emerge now
      </Link>

    </Page>
    </div>
      
  )
}
