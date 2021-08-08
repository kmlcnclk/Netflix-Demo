import React, { Component } from 'react';
import { Flex, Box, Container, Text, Heading, Button } from '@chakra-ui/react';
import Header from './Header';
import Image from 'next/image';
import Footer from './Footer';
import Link from 'next/link';

class RegistrationComponent extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Box w="full" borderBottom="1px #e3e3e3 solid">
          <Container maxW="container.sm" p="20px" pb="60px">
            <Flex justify="center" align="center" direction="column" mt="60px">
              <Flex
                justify="center"
                align="center"
                direction="column"
                w="340px"
                h="390.8px"
              >
                <Image
                  src="/registration.png"
                  width="260px"
                  height="90px"
                  alt="Registration Image"
                  objectFit="contain"
                />
                <Text as="span" m={2} fontSize="lg">
                  STEP <strong>1</strong> OF <strong>3</strong>
                </Text>
                <Heading m={2} size="lg" textAlign="center">
                  Finish setting up your account
                </Heading>
                <Text m={2} fontSize="lg" textAlign="center">
                  Netflix is personalised for you. Create a password to watch on
                  any device at any time.
                </Text>
                <Link href="/signup/regform" passHref>
                  <a>
                    <Button
                      colorScheme="red"
                      bgColor="#e50914"
                      _hover={{ bgColor: '#f6121D' }}
                      _active={{ bgColor: '#e50914' }}
                      size="lg"
                      w="340px"
                      h="64px"
                      mt={3}
                    >
                      <Text fontSize="24px">Next</Text>
                    </Button>
                  </a>
                </Link>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default RegistrationComponent;
