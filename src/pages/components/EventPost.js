import React, { useEffect, useState } from 'react';
import {
  Box,
  Link,
  Image,
  Text,
  Heading,
  useColorModeValue,
  HStack,
  Button,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { BsArrowRight } from 'react-icons/bs';
import {Redirect} from 'react-router-dom'

function EventPost(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState({});
  const [present, setPresent] = useState(false);
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    setData(props.data);
    setPresent(true);
  }, []);

  const handleClick = () => {
    setRedirect(true)
  }


  return (
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between"
    >
      {redirect && <Redirect push to={`/events/${props.genre}/${props.index}`} />}
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
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={`/events/${props.genre}/${props.index}`}>
            <Image
              borderRadius="lg"
              src={
                data.image
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
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={`/events/${props.genre}/${props.index}`}>
            {data.name}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
        >
          {present &&
            data.rules.map((value, index) => {
              return value + ' ';
            })}
        </Text>
        <BlogAuthor name={data.date} date={new Date('2021-04-06T19:01:27Z')} />
        <br />
        <br />
          <Button
            rightIcon={<BsArrowRight />}
            colorScheme="blue"
            variant="solid"
            onClick={handleClick}
          >
            Know More
          </Button>
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
