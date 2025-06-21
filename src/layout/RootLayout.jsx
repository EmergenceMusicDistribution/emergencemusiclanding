import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Tab } from './Tab'
import { Footer } from './Footer'

export const RootLayout = () => {
  return (
    <div className=' font-roboto'>
        <nav>
            <Navbar/>
        </nav>

        <main>
        <Outlet/>
        </main>

    <footer>
      <Footer/>
    </footer>
    
        <Tab/>
    </div>
  )
}
