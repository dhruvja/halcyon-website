import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';

function Hero() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(https://ik.imagekit.io/3aff7hsp7/heroo.png?updatedAt=1687668433917)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             
          </Text>
          
        </Stack>
        <Text
            color={'white'}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            
          </Text>
      </VStack>
    </Flex>
  )
}

export default Hero