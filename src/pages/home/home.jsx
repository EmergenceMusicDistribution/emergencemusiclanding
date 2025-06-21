import { Section2 } from './components/Section2'
import { Section1 } from './components/Section1'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { LastSection } from './components/LastSection'
export const Home = () => {
  return (
    <div>
    <Section1/>
    <Section2/>  
    <Services/> 
    <Features/>
    <LastSection/>
    </div>
  )
}
