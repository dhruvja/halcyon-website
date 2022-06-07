import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  Flex,
  Container,
  Heading,
  Stack,
  useColorModeValue,
  SimpleGrid,
  chakra,
  Image,
  GridItem,
  // theme
} from '@chakra-ui/react';
import TestimonialCard from './components/backdrop';
import theme from './components/theme';
import { testimonials } from './components/testimonials';
import Footer from './components/footer';
import Navbar from './components/navbar'
import Hero from './components/Hero'

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              About Halcyon
            </Text>
            <Heading>
              To Mysteries and Buried Secrets From The Tales Of Old
            </Heading>
            <Text fontSize={'lg'}>
            Halcyon, the annual summer fest of Siddaganga Institute of Technology, Tumakuru is the largest event that SIT hosts, held for a span of 3 days. The charm of this annual festival has anything but not diminished with the spirits of the participants, organizers and the audience growing stronger and bigger every year. With a footfall of 5000+ participants in and around the state participating in the events, the fest is growing every year. We have 38+ events along with several informal events. This Halcyon is bigger than ever before, celebrating its 30th year.
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://ik.imagekit.io/halcyon2022/Logo2022_bWL_Yydym.png'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <Container py={5} maxW={'container.lg'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {/* <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
            <Heading as={'h2'}>Medium Length Title</Heading>
          </GridItem> */}
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                35
              </Text>
              <Box fontSize={'md'}>More than 35 Events will take place</Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                ₹290,000+
              </Text>
              <Box fontSize={'md'}>Total Cash Prizes</Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                6
              </Text>
              <Box fontSize={'md'}>Total Genres</Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                3000+
              </Text>
              <Box fontSize={'md'}>Participants from more than 30 places</Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
      >
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'purple.400'}
          >
            People love us
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
          >
            Welcome to Halcyon
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
          >
            There are over {' '}
            <chakra.strong >
              3000+
            </chakra.strong>{' '}
            people attending events from various places.
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}
        >
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}

export default Home;
