import React from 'react'
import { Helmet } from 'react-helmet-async'
import SEO from './SEO'

export const Page = ({title,description,Name,type,children, headingStyles}) => {
  return (
    <>
    <SEO
    title={title}
    description={description}
    Name={Name}
    type={type}
    />
    <main>
        <h1 className={headingStyles}>{title}</h1>
        {children}
    </main>
        
    </>
  )
}
