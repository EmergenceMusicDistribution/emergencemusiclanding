import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useTranslation, Trans } from 'react-i18next'


function App() {
// const {t,i18n} = useTranslation()

// const langs = {
//   en:{nativeName:"English"},
//   fr:{nativeName:"French"}
// }
  return (
    <>
  {/* {Object.keys(langs).map((lang)=>{
  return <button className='bg-blue-600 m-1' type='submit' key={lang}
    onClick={()=>{i18n.changeLanguage(lang)}}
    disabled={i18n.resolvedLanguage === lang}
    >{langs[lang].nativeName}</button>
  })} */}


  {/* <Trans i18nKey="hello"> 
    <p>Hello my brother</p>
  </Trans> */}
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
