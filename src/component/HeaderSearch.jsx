import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import '../index.css'

const HeaderSearch= () => {
  return (
    <div>
      <Box textAlign='center' mt={10}>
        <Heading fontSize={45} fontFamily="Roboto Slab" 
        fontStyle='normal'
         fontWeight={700}
         lineHeight='50px'
        
        >Find your dream job now</Heading>
        
        <p class='littlewhite'>5 lakh+ jobs for you to explore</p>
      </Box>
    </div>
  )
}

export default HeaderSearch

