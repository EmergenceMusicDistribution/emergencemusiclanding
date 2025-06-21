import { ServiceCard } from "../../../components/ServiceCard";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      image: "images/services/Graphic.svg",
      title: "Graphic Design | ON DEMAND",
      description:
        "Get the best visual content for your musical project with our top-of-the-line graphic design team.",
    },
    {
      image: "images/services/Marketing.svg",
      title: "Marketing Campaign",
      description: "Plan your promotional music campaign.",
    },
    {
      image: "images/services/Public-Relation.svg",
      title: "Public relations (PR)",
      description:
        "Plan your specific media rollout locally or internationally to reach your target audience and get your brand more visibility.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#35222d] to-[#3e2b47]  py-7 space-y-5 sm:px-1.5">


      <h2 className="Capitalize text-4xl sm:text-3xl text-white font-bold text-center">
        <span className="">
          Digital Artist Development <span className="text-pink-500">Services</span> 
        </span>
      </h2>

      <div className="w-1/3 md:w-2/3 sm:w-full m-auto text-center">
        <p className=" text-lg text-[#a1a1a1]">
          We empower the artist by digitally branding themselves, By assisting
          them with all the tools to guide them to numerous revenue
          opportunities.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 md:text-center gap-5 px-36 md:px-10 sm:px-5">
        {
          services.map((service,i)=>{
            return <ServiceCard key={i} title={service.title} image={service.image} description={service.description} />
          })
        }
        
      </div>

      <button onClick={()=>navigate('/services')} className="flex shadow capitalize justify-center bg-gradient-to-r from-[#6c54ad] to-[#f04762] px-7 py-3.5 rounded-full w-fit m-auto text-white hover:text-blue-400 font-semibold">
        view all services
      </button>
    </div>
  );
};
