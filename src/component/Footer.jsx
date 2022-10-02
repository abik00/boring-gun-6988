import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInstagramSquare,FaTwitter,FaLinkedin } from 'react-icons/fa';
import  {GrFacebook} from 'react-icons/gr'
import { Navigate } from 'react-router-dom';


const Footer = () => {
  return (
    <Box height='300px' width='100%' justifyContent='space-evenly' display='flex' p={8}>
        <hr/>
        <Box  height='170px' width='20%'>
            <Image src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' />
            <br/>
            <Text className='littlewhite' fontWeight='bold'>Connect with us</Text>
            <Box width='50%'  mt={5} >
            <Flex>
            <FaInstagramSquare className='icon' fontSize={20} /> <GrFacebook className='icon' fontSize={20}/> 
            <FaTwitter className='icon' fontSize={20}/>
            <FaLinkedin className='icon' fontSize={20}/>
            </Flex>
            </Box>
        </Box>
        <Box height='170px' width='10%' >
            <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>About us</Text>
            <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Carrers</Text>
            <Text  mb={4} color='RGBA(0, 0, 0, 0.80)'>Employer Name</Text>
            <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Sitemate</Text>
        </Box>
        <Box height='170px' width='10%' >
        <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Help center</Text>
        <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Summer/Notices</Text>
        <Text  mb={4} color='RGBA(0, 0, 0, 0.80)'>Grievances</Text>
        <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Report issue</Text>
    </Box>



    <Box  height='170px' width='10%' >
            <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Privacy policy</Text>
            <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Terms & conditions</Text>
            <Text  mb={4} color='RGBA(0, 0, 0, 0.80)'>Fraud alert</Text>
            <Text mb={4} color='RGBA(0, 0, 0, 0.80)'>Trust & safety</Text>
            
        </Box>
        <Box border='1px solid RGBA(0, 0, 0, 0.36)' height='170px' width='25%' padding={5}>
            <Text fontWeight='bold' >Apply on the go</Text>
            <Text color='RGBA(0, 0, 0, 0.80)'>Get real-time job updates on our App</Text>
            <Box mt={2}><Flex>
                <Image  src='https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png'   />
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png'/>
            </Flex></Box>
        </Box>
        {/* </Flex> */}
    
    </Box>
  )
}

export default Footer
