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
  HStack,
  Tag,
  // theme
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Center>
          <Image boxSize = "60px" src="https://ik.imagekit.io/halcyon2022/Logo2022_bWL_Yydym.png" alt="Dan Abramov" /> &nbsp;
          <Logo />
        </Center>
        {/* <Stack direction={'row'} spacing={6}> */}
        <p>
          Shreyas Upadhya: <Link href="tel:827-730-9055">827-730-9055</Link>
        </p>
        <p>
          Karthik Salera: <Link href="tel:938-026-8943">938-026-8943</Link>
        </p>
        <p>
          Urvi R Naidu: <Link href="tel:733-810-6255">733-810-6255</Link>
        </p>
        {/* <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link> */}
        {/* </Stack> */}
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© Halcyon 2022. Designed and Built by Dhruv</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Mail'} href={'mailto:halcyon.sit@gmail.com'}>
              <IoMdMail />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/halcyon_official/?hl=en'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Logo = props => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
      d="M 6.9 10.86 L 8.1 10.86 L 8.1 5.58 Q 8.1 4.709 7.952 4.226 A 1.527 1.527 0 0 0 7.86 3.99 A 0.803 0.803 0 0 0 7.374 3.582 Q 7.222 3.531 7.031 3.516 A 2.091 2.091 0 0 0 6.87 3.51 L 6.87 2.58 L 13.02 0 L 13.5 0.96 Q 12.976 0.96 12.49 1.451 A 3.081 3.081 0 0 0 12.24 1.74 A 2.402 2.402 0 0 0 11.916 2.396 Q 11.714 3.01 11.701 3.898 A 8.408 8.408 0 0 0 11.7 4.02 L 11.7 10.86 L 13.2 10.86 L 13.2 11.58 L 11.7 12.33 L 11.7 18.69 A 4.085 4.085 0 0 0 11.758 19.409 Q 11.824 19.779 11.967 20.051 A 1.32 1.32 0 0 0 12.93 20.76 L 12.93 21.42 L 9.9 23.13 A 3.182 3.182 0 0 1 9.11 22.658 A 4.137 4.137 0 0 1 8.67 22.245 Q 8.1 21.63 8.1 21.09 L 8.1 12.33 L 5.4 12.33 L 5.4 18.51 Q 5.4 19.381 5.548 19.864 A 1.527 1.527 0 0 0 5.64 20.1 A 0.803 0.803 0 0 0 6.126 20.508 Q 6.278 20.559 6.469 20.574 A 2.091 2.091 0 0 0 6.63 20.58 L 6.63 21.51 L 0.48 24.09 L 0 23.13 Q 0.524 23.13 1.01 22.639 A 3.081 3.081 0 0 0 1.26 22.35 A 2.402 2.402 0 0 0 1.584 21.694 Q 1.786 21.08 1.799 20.192 A 8.408 8.408 0 0 0 1.8 20.07 L 1.8 4.47 A 4.085 4.085 0 0 0 1.742 3.751 Q 1.676 3.381 1.533 3.109 A 1.32 1.32 0 0 0 0.57 2.4 L 0.57 1.74 L 3.6 0.03 A 3.182 3.182 0 0 1 4.39 0.502 A 4.137 4.137 0 0 1 4.83 0.915 Q 5.4 1.53 5.4 2.07 L 5.4 11.67 L 6.9 10.86 Z M 55.65 8.04 L 55.65 19.95 A 3.647 3.647 0 0 1 55.569 20.668 Q 55.415 21.427 54.968 22.466 A 19.011 19.011 0 0 1 54.63 23.205 A 29.103 29.103 0 0 1 53.512 25.308 A 22.324 22.324 0 0 1 52.47 26.925 Q 51.37 28.473 50.941 28.528 A 0.242 0.242 0 0 1 50.91 28.53 A 3.417 3.417 0 0 1 50.391 28.486 Q 49.854 28.403 49.139 28.163 A 13.242 13.242 0 0 1 48.9 28.08 Q 47.64 27.63 46.74 27.18 L 45.87 26.73 L 45.87 25.83 L 46.89 25.83 A 2.553 2.553 0 0 0 47.804 25.646 Q 48.617 25.335 49.56 24.495 A 9.102 9.102 0 0 0 51.124 22.656 A 12.297 12.297 0 0 0 52.05 20.94 A 109.254 109.254 0 0 1 51.247 21.313 Q 49.093 22.302 48.395 22.487 A 1.045 1.045 0 0 1 48.15 22.53 A 1.504 1.504 0 0 1 47.243 22.215 Q 46.841 21.919 46.485 21.345 Q 45.75 20.16 45.75 18.69 L 45.75 10.44 Q 45.75 8.79 44.28 8.49 L 44.28 7.83 L 47.55 6 A 3.182 3.182 0 0 1 48.34 6.472 A 4.137 4.137 0 0 1 48.78 6.885 Q 49.35 7.5 49.35 8.04 L 49.35 16.17 A 10.491 10.491 0 0 0 49.386 17.078 Q 49.464 17.969 49.708 18.507 A 1.713 1.713 0 0 0 50.01 18.975 A 2.039 2.039 0 0 0 50.85 19.504 Q 51.36 19.68 52.05 19.68 L 52.05 10.44 A 4.085 4.085 0 0 0 51.992 9.721 Q 51.926 9.351 51.783 9.079 A 1.32 1.32 0 0 0 50.82 8.37 L 50.82 7.71 L 53.85 6 A 3.182 3.182 0 0 1 54.64 6.472 A 4.137 4.137 0 0 1 55.08 6.885 Q 55.65 7.5 55.65 8.04 Z M 71.58 21.09 L 71.58 10.92 A 3.924 3.924 0 0 0 71.494 10.078 A 2.976 2.976 0 0 0 71.16 9.21 A 1.982 1.982 0 0 0 70.911 8.866 Q 70.565 8.49 70.11 8.49 L 70.11 7.83 Q 70.293 7.804 72.653 6.426 A 259.745 259.745 0 0 0 73.38 6 A 6.562 6.562 0 0 1 73.55 6.051 Q 73.626 6.075 73.711 6.104 A 13.629 13.629 0 0 1 73.89 6.165 A 1.039 1.039 0 0 1 74.073 6.253 Q 74.328 6.404 74.685 6.75 A 1.715 1.715 0 0 1 75.019 7.19 A 1.434 1.434 0 0 1 75.18 7.86 Q 75.348 7.776 76.094 7.35 A 154.396 154.396 0 0 0 76.2 7.29 A 48.809 48.809 0 0 1 76.969 6.862 Q 78.377 6.096 78.778 6.035 A 0.416 0.416 0 0 1 78.84 6.03 Q 79.561 6.03 80.214 6.741 A 4.494 4.494 0 0 1 80.64 7.29 Q 81.229 8.173 81.405 8.953 A 2.934 2.934 0 0 1 81.48 9.6 L 81.48 18.69 Q 81.48 20.34 82.95 20.64 L 82.95 21.3 L 79.68 23.13 A 3.182 3.182 0 0 1 78.89 22.658 A 4.137 4.137 0 0 1 78.45 22.245 Q 77.88 21.63 77.88 21.09 L 77.88 12.39 A 12.109 12.109 0 0 0 77.847 11.463 Q 77.777 10.556 77.559 9.963 A 3.02 3.02 0 0 0 77.505 9.825 A 1.607 1.607 0 0 0 77.205 9.349 Q 76.823 8.94 76.17 8.94 L 75.18 9.12 L 75.18 18.69 A 4.085 4.085 0 0 0 75.238 19.409 Q 75.304 19.779 75.447 20.051 A 1.32 1.32 0 0 0 76.41 20.76 L 76.41 21.42 L 73.38 23.13 A 3.182 3.182 0 0 1 72.59 22.658 A 4.137 4.137 0 0 1 72.15 22.245 Q 71.58 21.63 71.58 21.09 Z M 37.2 9.24 L 37.2 17.52 A 4.044 4.044 0 0 0 37.332 18.593 Q 37.672 19.829 38.893 20.279 A 3.497 3.497 0 0 0 39.18 20.37 A 8.311 8.311 0 0 0 40.138 20.533 Q 40.811 20.61 41.61 20.61 L 41.61 21.48 A 427.653 427.653 0 0 1 40.452 21.867 Q 36.992 23.016 36.441 23.12 A 0.487 0.487 0 0 1 36.36 23.13 Q 35.46 23.13 34.53 21.855 A 4.85 4.85 0 0 1 33.61 19.213 A 6.056 6.056 0 0 1 33.6 18.87 L 33.6 8.79 A 0.115 0.115 0 0 1 33.654 8.721 Q 33.975 8.464 36.214 7.613 A 112.25 112.25 0 0 1 37.035 7.305 A 127.835 127.835 0 0 1 37.848 7.006 Q 40.534 6.03 40.98 6.03 Q 41.16 6.03 41.4 6.9 A 86.544 86.544 0 0 1 41.591 7.603 Q 41.758 8.231 41.955 9 A 13.782 13.782 0 0 0 42.135 9.641 Q 42.324 10.255 42.524 10.647 A 3.051 3.051 0 0 0 42.615 10.815 Q 42.913 11.321 43.672 11.389 A 2.767 2.767 0 0 0 43.92 11.4 L 43.92 12 A 38.121 38.121 0 0 0 43.533 12.179 Q 42.937 12.458 41.928 12.947 A 308.654 308.654 0 0 0 41.685 13.065 A 97.46 97.46 0 0 1 41.314 13.244 Q 40.095 13.83 39.99 13.83 A 0.312 0.312 0 0 1 39.774 13.704 Q 39.384 13.276 38.85 11.385 Q 38.234 9.204 37.834 8.968 A 0.185 0.185 0 0 0 37.74 8.94 Q 37.44 8.94 37.2 9.24 Z M 24 9.99 L 24 18.48 Q 24 19.59 24.36 20.025 Q 24.663 20.391 25.242 20.576 A 3.181 3.181 0 0 0 25.47 20.64 L 25.47 21.3 L 22.2 23.13 A 3.182 3.182 0 0 1 21.41 22.658 A 4.137 4.137 0 0 1 20.97 22.245 A 3.209 3.209 0 0 1 20.698 21.912 Q 20.417 21.513 20.401 21.162 A 0.925 0.925 0 0 1 20.4 21.12 L 16.65 23.13 A 2.595 2.595 0 0 0 16.599 23.097 Q 16.541 23.06 16.459 23.012 A 11.251 11.251 0 0 0 16.38 22.965 A 1.887 1.887 0 0 1 16.278 22.9 Q 16.112 22.788 15.827 22.564 A 19.419 19.419 0 0 1 15.765 22.515 Q 15.33 22.17 15 21.78 A 3.501 3.501 0 0 1 14.318 20.705 A 3.183 3.183 0 0 1 14.1 19.53 L 14.1 14.61 Q 14.1 14.212 15.17 13.63 A 10.935 10.935 0 0 1 15.66 13.38 A 22.537 22.537 0 0 1 18.585 12.211 A 20.739 20.739 0 0 1 18.78 12.15 L 20.37 11.64 A 5.098 5.098 0 0 0 20.306 10.805 Q 20.233 10.36 20.072 10.016 A 1.963 1.963 0 0 0 19.47 9.255 A 2.388 2.388 0 0 0 18.831 8.929 Q 17.844 8.58 15.99 8.58 L 15.99 7.68 A 214.913 214.913 0 0 1 17.089 7.293 Q 19.949 6.296 20.862 6.086 A 1.792 1.792 0 0 1 21.21 6.03 A 1.664 1.664 0 0 1 22.104 6.304 Q 22.615 6.625 23.1 7.32 A 5.252 5.252 0 0 1 23.746 8.549 A 4.236 4.236 0 0 1 24 9.99 Z M 30.6 2.1 L 30.6 18.69 A 4.085 4.085 0 0 0 30.658 19.409 Q 30.724 19.779 30.867 20.051 A 1.32 1.32 0 0 0 31.83 20.76 L 31.83 21.42 L 28.8 23.13 A 3.182 3.182 0 0 1 28.01 22.658 A 4.137 4.137 0 0 1 27.57 22.245 Q 27 21.63 27 21.09 L 27 4.5 A 4.085 4.085 0 0 0 26.942 3.781 Q 26.876 3.411 26.733 3.139 A 1.32 1.32 0 0 0 25.77 2.43 L 25.77 1.77 L 28.8 0.06 A 3.182 3.182 0 0 1 29.59 0.532 A 4.137 4.137 0 0 1 30.03 0.945 Q 30.6 1.56 30.6 2.1 Z M 58.65 18.75 L 58.65 8.79 A 0.115 0.115 0 0 1 58.703 8.721 Q 59.077 8.421 62.07 7.305 A 126.38 126.38 0 0 1 62.88 7.006 Q 65.554 6.03 66 6.03 Q 66.51 6.03 67.545 7.26 Q 68.552 8.457 68.579 9.426 A 1.914 1.914 0 0 1 68.58 9.48 L 68.58 20.34 A 0.212 0.212 0 0 1 68.474 20.46 Q 67.99 20.809 65.295 21.855 Q 62.079 23.103 61.307 23.129 A 0.944 0.944 0 0 1 61.275 23.13 A 1.084 1.084 0 0 1 60.772 22.992 Q 60.231 22.708 59.595 21.84 A 4.876 4.876 0 0 1 58.691 19.473 A 6.305 6.305 0 0 1 58.65 18.75 Z M 64.95 19.89 L 64.95 11.04 A 4.768 4.768 0 0 0 64.892 10.257 Q 64.651 8.82 63.42 8.82 A 1.689 1.689 0 0 0 62.65 9.011 A 2.384 2.384 0 0 0 62.25 9.27 L 62.25 18.15 A 4.768 4.768 0 0 0 62.308 18.933 Q 62.549 20.37 63.78 20.37 Q 64.35 20.37 64.95 19.89 Z M 20.4 19.77 L 20.4 12.99 A 24.899 24.899 0 0 0 20.048 13.119 Q 19.71 13.247 19.471 13.351 A 5.764 5.764 0 0 0 19.275 13.44 A 2.497 2.497 0 0 0 18.951 13.629 Q 18.794 13.736 18.63 13.876 A 4.901 4.901 0 0 0 18.48 14.01 A 2.06 2.06 0 0 0 17.979 14.759 Q 17.7 15.442 17.7 16.5 L 17.7 18.45 A 2.138 2.138 0 0 0 17.777 19.037 A 1.649 1.649 0 0 0 18.165 19.725 A 1.792 1.792 0 0 0 18.513 20.017 A 1.266 1.266 0 0 0 19.2 20.22 A 1.655 1.655 0 0 0 19.776 20.111 Q 19.994 20.03 20.221 19.889 A 3.321 3.321 0 0 0 20.4 19.77 Z"
        fill="currentColor"
      />
      {/* <path
        d="M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
        fill="#2F855A"
      /> */}
    </svg>
  );
};

export default Footer;
