import { Box, Container, Flex, Text,
    Image,
    Heading
    } from '@chakra-ui/react'
    import { ChevronRightIcon } from '@chakra-ui/icons'

import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css'


const FeatureCompony = () => {
  return (
    <div>
      <Heading mt={10} mb={10} textAlign='center'>Featured companies actively hiring</Heading>
      <Box className='container py-4 px-4 justify-conten-center '>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='mySwiper'
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
                0:{
                    slidesPerView:1,
                    spaceBetween:10,
                },
                480:{
                    slidesPerView:2,
                    spaceBetween:10,
                },
                768:{
                    slidesPerView:3,
                    spaceBetween:10,
                },
                1024:{
                    slidesPerView:4,
                    spaceBetween:10,
                },
                1280:{
                    slidesPerView:5,
                    spaceBetween:10,
                }
            }}
        >
            <SwiperSlide>
               
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {/* <FeatureCard/> */}
                <div>
             <Box  
   
                w={250}
                h={180}
                p={5}
                boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                _hover={{
                    
                    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                }}
                >
                    <Flex><Text fontSize={20} fontWeight='bold'>MNCs</Text><ChevronRightIcon fontSize={28}/></Flex> 
                    <Text className='littlewhite'>1.3K+ are actively hiring</Text>
                    <Flex mt={4} width='100%' justifyContent='space-around'><Image src='https://img.naukimg.com/logo_images/groups/v1/4618029.gif' border='1px solid RGBA(0, 0, 0, 0.24)' height={12}/>
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' /> 
                        
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/1477040.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)' />
                        <Image src='https://img.naukimg.com/logo_images/groups/v1/386732.gif' height={12} border='1px solid RGBA(0, 0, 0, 0.24)'/>
                        </Flex> 
                </Box>
                </div>
            </SwiperSlide>
           

        </Swiper>

      </Box>
    </div>
  )
}

export default FeatureCompony
