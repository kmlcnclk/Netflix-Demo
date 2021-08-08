import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Flex, Box, Text, Heading, Button } from '@chakra-ui/react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { CheckIcon } from '@chakra-ui/icons';
import Link from 'next/link';

class IndexComponent extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Box w="full" borderBottom="1px #e3e3e3 solid">
          <Container maxW="container.sm" p="40px" pb="140px">
            <Flex justify="center" align="center" direction="column" mt="60px">
              <HiOutlineCheckCircle color="red" size="50px" />
              <Text as="span" m={3} fontSize="lg">
                STEP <strong>2</strong> OF <strong>3</strong>
              </Text>
              <Heading m={2} size="lg" textAlign="center">
                Choose your plan.
              </Heading>
              <Flex align="center" mt="20px" w="310px">
                <CheckIcon color="red" w="24px" h="24px" />
                <Text pl="10px" fontSize="lg">
                  No commitments, cancel anytime.
                </Text>
              </Flex>
              <Flex mt="20px" w="310px">
                <Box mt="2px">
                  <CheckIcon color="red" w="24px" h="24px" />
                </Box>
                <Text pl="10px" fontSize="lg">
                  Everything on Netflix for one low price.
                </Text>
              </Flex>
              <Flex mt="20px" w="310px">
                <Box mt="2px">
                  <CheckIcon color="red" w="24px" h="24px" />
                </Box>
                <Text pl="10px" fontSize="lg">
                  Unlimited viewing on all your devices.
                </Text>
              </Flex>
              <Link href="/signup/planform">
                <a>
                  <Button
                    colorScheme="red"
                    bgColor="#e50914"
                    _hover={{ bgColor: '#f6121D' }}
                    _active={{ bgColor: '#e50914' }}
                    size="lg"
                    w="340px"
                    h="64px"
                    mt={10}
                  >
                    <Text fontSize="24px">Next</Text>
                  </Button>
                </a>
              </Link>
            </Flex>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default IndexComponent;
