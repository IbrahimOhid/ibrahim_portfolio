import React from 'react'
import Header from './Header'
import AboutMe from '../components/AboutMe/AboutMe'

const Root = () => {
  return (
    <div className='font-Inter bg-gradient-to-b from-teal-900 to-gray-900 '>
        <Header/>
        <AboutMe/>
    </div>
  )
}

export default Root