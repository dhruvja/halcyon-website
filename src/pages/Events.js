import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Container,
  Heading,
  Stack,
  Button,
  Icon,
  IconProps,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  // useColorMode,
  Center,
  SimpleGrid,
  chakra,
  StackDivider,
  Image,
  VisuallyHidden,
  GridItem,
  useBreakpointValue,
  HStack,
  Tag,
  // theme
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import theme from './theme';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Illustration from './components/Icons';
import { BsSun, BsMoon } from 'react-icons/bs';
import TestimonialCard from './components/backdrop';
import { ReactElement } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import theme from './components/theme';
import { testimonials } from './components/testimonials';
import EventPost from './components/EventPost';
import data from '../data.json';
import { Redirect } from 'react-router-dom';
import Footer from './components/footer'
import Navbar from './components/navbar'

function Events(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [index, setIndex] = useState(-1);
  const [present, setPresent] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [dataItems, setDataItems] = useState([]);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    setDataItems(data.list);
    setGenre(props.match.params.genre);
    switch (props.match.params.genre) {
      case 'literary':
        setIndex(1);
        setPresent(true);
        break;
      case 'gaming':
        setIndex(4);
        setPresent(true);
        break;
      case 'dance':
        setIndex(2);
        setPresent(true);
        break;
      case 'theatre':
        setIndex(5);
        setPresent(true);
        break;
      case 'finearts':
        setIndex(3);
        setPresent(true);
        break;
      case 'music':
        setIndex(0);
        setPresent(true);
        break;
      default:
        setRedirect(true);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {redirect && <Redirect to="/" />}
      <Navbar />
      <Container maxW={'7xl'} p="12">
        <Heading as="h1">Genre Events</Heading>
        {present &&
          dataItems[index].events.map((value, index) => {
            console.log(value);
            return <EventPost data={value} genre={genre} index={index} />;
          })}
      </Container>
      <Footer />
    </ChakraProvider>
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

const BlogTags = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default Events;
