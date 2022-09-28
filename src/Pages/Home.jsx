import { Container } from '@chakra-ui/react'
import React from 'react'
import HeaderSearch from '../component/HeaderSearch'
import JobButton from '../component/JobButton'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <div >
        <Navbar/>
        <HeaderSearch/>
        <JobButton/>
    </div>
  )
}

export default Home
