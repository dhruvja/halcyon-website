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
        'url(https://ik.imagekit.io/halcyon2022/halcyon-coverpage/sea-of-thieves-forsaken-shores-4k_copy_XbJVQ_btS.jpg)'
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
            Halcyon 2022
          </Text>
          
        </Stack>
        <Text
            color={'white'}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            To Mysteries and Buried Secrets From The Tales Of Old
          </Text>
      </VStack>
    </Flex>
  )
}

export default Hero