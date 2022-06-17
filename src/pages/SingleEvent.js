import React, { useEffect, useState } from 'react';
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
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import theme from './components/theme';
import { BsSun, BsMoon } from 'react-icons/bs';
import data from '../data/halcyon.json';
import { Redirect } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';

function SingleEvent(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [index, setIndex] = useState(-1);
  const [present, setPresent] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [dataItems, setDataItems] = useState([]);
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    console.log(props.match.params.genre, props.match.params.id);
    setDataItems(data.list);
    switch (props.match.params.genre) {
      case 'literary':
        setIndex(1);
        if (data.list[1].events[props.match.params.id] === undefined) {
          setRedirect(true);
        } else {
          console.log(data.list[1].events[props.match.params.id]);
          setSingleData(data.list[1].events[props.match.params.id]);
        }
        setPresent(true);
        break;
      case 'gaming':
        setIndex(4);
        if (data.list[4].events[props.match.params.id] === undefined) {
          setRedirect(true);
        } else {
          console.log(data.list[4].events[props.match.params.id]);
          setSingleData(data.list[4].events[props.match.params.id]);
        }
        setPresent(true);
        break;
      case 'dance':
        setIndex(2);
        if (data.list[2].events[props.match.params.id] === undefined) {
          setRedirect(true);
        } else {
          console.log(data.list[2].events[props.match.params.id]);
          setSingleData(data.list[2].events[props.match.params.id]);
        }
        setPresent(true);
        break;
      case 'theatre':
        setIndex(5);
        if (data.list[5].events[props.match.params.id] === undefined) {
          setRedirect(true);
        } else {
          console.log(data.list[5].events[props.match.params.id]);
          setSingleData(data.list[5].events[props.match.params.id]);
        }
        setPresent(true);
        break;
      case 'finearts':
        setIndex(3);
        if (data.list[3].events[props.match.params.id] === undefined) {
          setRedirect(true);
        } else {
          console.log(data.list[3].events[props.match.params.id]);
          setSingleData(data.list[3].events[props.match.params.id]);
        }
        setPresent(true);
        break;
      case 'music':
        setIndex(0);
        if (data.list[0].events[props.match.params.id] === undefined) {
          setRedirect(true);
        } else {
          console.log(data.list[0].events[props.match.params.id]);
          setSingleData(data.list[0].events[props.match.params.id]);
        }
        setPresent(true);
        break;
      default:
        setRedirect(true);
    }
    console.log(data.list[0].co_ordinators[0].name);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {redirect && <Redirect to="/" />}
      <Navbar />
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={singleData.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {singleData.name}
              </Heading>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                {/* <Text as={'span'} fontWeight={'bold'}>Prize Money:</Text> */}
                Cash prize: ₹{singleData.prize} <br />
                {singleData.name === 'Creative Photography' && "Topic: Symmetry in nature"}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                {/* <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text> */}
                <Text fontSize={'lg'}>
                  <Text as={'span'} fontWeight={'bold'}>
                    General Rules:
                  </Text>{' '}
                  {present && dataItems[index].rules}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Event Details
                </Text>

                {present &&
                  (singleData.final === true ? (
                    <List spacing={2}>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Registration Fee:
                        </Text>{' '}
                        {singleData.registration_fee}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Prelims Date and time:
                        </Text>{' '}
                        {singleData.date} {singleData.time}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Prelims Location:
                        </Text>{' '}
                        {singleData.location}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Finals Date and Time:
                        </Text>{' '}
                        {singleData.finaldate} {singleData.finaltime}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Finals Location:
                        </Text>{' '}
                        {singleData.finallocation}
                      </ListItem>
                    </List>
                  ) : (
                    <List spacing={2}>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Registration Fee:
                        </Text>{' '}
                        {singleData.registration_fee}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Date and Time:
                        </Text>{' '}
                        {singleData.date}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Location:
                        </Text>{' '}
                        {singleData.location}
                      </ListItem>
                    </List>
                  ))}
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Rules
                </Text>
                <List spacing={2}>
                  {present &&
                    singleData.rules.map((value, index) => {
                      return <ListItem>{value}</ListItem>;
                    })}
                </List>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Co-Ordinator Details
                </Text>

                <List spacing={2}>
                  {present &&
                    dataItems[index].co_ordinators.map((value, index) => {
                      return (
                        <ListItem>
                          {value.name}:{' '}
                          <Link href={`tel:${value.phone}`}>{value.phone}</Link>
                        </ListItem>
                      );
                    })}
                </List>
              </Box>
            </Stack>

            {singleData.name === 'Creative Photography' ? (
              <Link href={present && singleData.link} target="_blank">
                <Button
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  size={'lg'}
                  py={'7'}
                  // bg={useColorModeValue('gray.900', 'gray.50')}
                  // color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Register Now
                </Button>
              </Link>
            ) : (
              <Link href={present && dataItems[index].link} target="_blank">
                <Button
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  size={'lg'}
                  py={'7'}
                  // bg={useColorModeValue('gray.900', 'gray.50')}
                  // color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Register Now
                </Button>
              </Link>
            )}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'center'}
            >
              <Text>Please pay the Registration fee on SIT website</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </ChakraProvider>
  );
}

export default SingleEvent;
