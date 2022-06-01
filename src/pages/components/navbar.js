import React from 'react'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    ChakraProvider,
    useColorMode,
    Link,
  } from '@chakra-ui/react';  
  import { BsSun, BsMoon } from 'react-icons/bs';


function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('white.100', 'white.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href="/">
            <Box>Logo</Box>
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button
                aria-label="Toggle Color Mode"
                onClick={() => toggleColorMode()}
                _focus={{ boxShadow: 'none' }}
                w="fit-content"
              >
                {colorMode === 'light' ? <BsMoon /> : <BsSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  )
}

export default Navbar