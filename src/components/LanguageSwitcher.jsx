import React from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation()
    const changeLanguage = (event)=>{
        i18n.changeLanguage(event.target.value)
    }

  return (
    <div className='hidden'>
        <select onChange={changeLanguage} value={i18n.language} className='py-2.5 px-1 bg-slate-900 text-white border font-bold' name="" id="">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
        </select>
    </div>
  )
}
