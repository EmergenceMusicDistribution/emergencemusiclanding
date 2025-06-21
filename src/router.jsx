import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
import { Home } from './pages/home/home'
import { NewArtist } from './pages/new-artist'
import { Services } from './pages/services'
import { AmbassadorClubs } from './pages/ambassador-clubs'
import { EmdArtist } from './pages/emd-artist'
import useScrollToTop from './hooks/useScrollToTop'

const ScrollToTopWrapper = ({children})=>{
    useScrollToTop()
    return children
}

const router = createBrowserRouter([
 {
    path : '/', 
    element :(
        <ScrollToTopWrapper>
            <RootLayout/>
        </ScrollToTopWrapper>
    ), 
    children : [
        {
            path:'/', 
            element:<Home/>,
            index:true
        },
        {
            path:'/services', 
            element:<Services/>,
        },
        {
            path:'/ambassador-clubs', 
            element:<AmbassadorClubs/>,
        },
        {
            path:'/new-artist', 
            element:<NewArtist/>,
        },
        {
            path:'/emd-artist', 
            element:<EmdArtist/>,
        },
    ]
 }
])

export default router