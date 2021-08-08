import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginFooter from './LoginFooter';
import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';

class LogoutComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.router.push('/');
    }, 60000);

    if (this.props.router.route == '/') {
      clearTimeout();
    }
  }

  render() {
    return (
      <Box
        bgImage="https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg"
        w="1349px"
        h="auto"
        minH="100%"
        minW="100%"
        bgAttachment="scroll"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box bgColor="rgba(0, 0, 0, 0.40)">
          <Flex justify="space-between" align="center">
            <Flex justify="flex-start" align="center" ml={10}>
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/net.png"
                    width={'170'}
                    height={'120'}
                    objectFit="contain"
                    alt="Netflix"
                  />
                </a>
              </Link>
            </Flex>
            <Link href="/login" passHref>
              <a>
                <Button
                  mr={10}
                  colorScheme="red"
                  style={{ backgroundColor: '#e50914' }}
                  size="sm"
                >
                  Sign In
                </Button>
              </a>
            </Link>
          </Flex>

          <Flex w="100%" justify="center" align="center" color="#333333">
            <Flex
              bgColor="#fafafa"
              align="flex-start"
              pt="30px"
              pb="30px"
              pl="45px"
              pr="45px"
              w="440px"
              h="auto"
              direction="column"
              justify="flex-start"
            >
              <Heading size="xl" mb="20px">
                Leaving So Soon?
              </Heading>
              <Text mt="16px" mb="16px" fontSize="md">
                Just so you know, you don’t always need to sign out of Netflix.
                It’s only necessary if you’re on a shared or public computer.
              </Text>
              <Text fontSize="md" mb="16px" mt="16px">
                You’ll be redirected to the Netflix home page in 30 seconds.
              </Text>
              <Flex w="100%">
                <Link href="/" passHref>
                  <a style={{ width: '100%' }}>
                    <Button
                      size="lg"
                      h="48px"
                      w="100%"
                      mt={8}
                      borderRadius="3px"
                      colorScheme="blue"
                      style={{ backgroundColor: '#0080ff' }}
                      type="button"
                    >
                      <Text fontSize="xl">Go Now</Text>
                    </Button>
                  </a>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <LoginFooter />
      </Box>
    );
  }
}

export default LogoutComponent;
