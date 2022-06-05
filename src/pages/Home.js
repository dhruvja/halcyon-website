import React from 'react';
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
  // theme
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import theme from './theme';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { IoMdMail } from 'react-icons/io';
import Illustration from './components/Icons';
import { BsSun, BsMoon } from 'react-icons/bs';
import TestimonialCard from './components/backdrop';
import { ReactElement } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import theme from './components/theme';
import { testimonials } from './components/testimonials';
import Footer from './components/footer';
import Navbar from './components/navbar'
import Hero from './components/Hero'

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { name, role, content, avatar, index } = testimonials;

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
              We welcome you to the Halcyon 2022.
            </Text>
            {/* <Stack
              spacing={4}
              divider={
                <StackDivider
                />
              }
            >
              <Feature
                icon={
                  <Icon as={FcAssistant} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning'}
              />
              <Feature
                icon={<Icon as={FcDonate} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={FcInTransit} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
              />
            </Stack> */}
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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
              <Box fontSize={'md'}>Total Categories</Box>
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
        {/* <Box>
          <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
            <path
              fill={'currentColor'}
              d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
            />
          </Icon>
        </Box> */}
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default Home;
