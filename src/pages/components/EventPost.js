import React, { useEffect, useState } from 'react';
import {
  Box,
  Link,
  Image,
  Text,
  Heading,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';

function EventPost(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState({});
  const [present, setPresent] = useState(false)

  useEffect(() => {
    console.log(props.data);
    setData(props.data)
    setPresent(true)
  },[])

  return (
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between"
    >
    <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%"
        >
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image
              borderRadius="lg"
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Link>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)'
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}
      >
        {/* <BlogTags tags={['Engineering', 'Product']} /> */}
        <Heading marginTop="1">
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            {data.name}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
        >
          {present && data.rules.map((value, index) => {
              console.log(value)
              return value + " ";
          })}
        </Text>
        <BlogAuthor name={data.date} date={new Date('2021-04-06T19:01:27Z')} />
      </Box>
    </Box>
  );
}

const BlogAuthor = props => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://100k-faces.glitch.me/random-image"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>—</Text>
        <Text>{props.date.toLocaleDateString()}</Text>
      </HStack>
    );
  };

export default EventPost;
