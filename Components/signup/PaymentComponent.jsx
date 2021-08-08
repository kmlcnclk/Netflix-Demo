import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AiOutlineLock } from 'react-icons/ai';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Container, Text, Heading } from '@chakra-ui/react';

class PaymentComponent extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Box w="full" borderBottom="1px #e3e3e3 solid">
          <Container maxW="container.sm" p="40px" pb="140px">
            <Flex justify="center" align="center" direction="column" mt="20px">
              <AiOutlineLock color="red" size="35px" />
              <Text as="span" m={4} mt={7} color="#333333" fontSize="lg">
                STEP <strong>3</strong> OF <strong>3</strong>
              </Text>
              <Heading m={2} size="lg" color="#333333" textAlign="center">
                Set up your payment
              </Heading>
              <Flex
                align="center"
                justify="center"
                color="#333333"
                mt="20px"
                w="310px"
                direction="column"
              >
                <Text pl={10} pr={10} fontSize="lg" textAlign="center">
                  Your membership starts as soon as you set up payment.
                </Text>
                <Text
                  pl={14}
                  mt={6}
                  pr={14}
                  fontWeight="semibold"
                  fontSize="lg"
                  textAlign="center"
                >
                  No commitments. Cancel online anytime.
                </Text>
              </Flex>
            </Flex>
            <Flex justify="flex-end" align="center" mt={6}>
              <Text fontSize="sm" color="#333333">
                Secure Server
              </Text>
              <AiOutlineLock color="#ffb53f" size="20px" />
            </Flex>
            <Flex
              justify="center"
              color="#333333"
              direction="column"
              align="center"
            >
              <Box w="full">
                <Link href="/signup/creditoption">
                  <a>
                    <Flex
                      justify="space-between"
                      align="center"
                      w="full"
                      p={4}
                      color="#333333"
                      mt="3px"
                      h="64px"
                      cursor="pointer"
                      borderRadius="2px"
                      border="#cccccc solid 1px"
                    >
                      <Flex align="center">
                        <Text pr={2}> Credit or Debit Card </Text>
                        <Flex align="center">
                          <Image
                            src="/visa-v3.svg"
                            width="40px"
                            height="25px"
                            objectFit="contain"
                            alt="Visa"
                          />
                        </Flex>
                        <Flex align="center" pl={1}>
                          <Image
                            src="/mastercard-v2.svg"
                            width="40px"
                            height="25px"
                            objectFit="contain"
                            alt="Master Card"
                          />
                        </Flex>
                        <Flex align="center" pl={1}>
                          <Image
                            src="/amex-v2.svg"
                            width="40px"
                            height="25px"
                            objectFit="contain"
                            alt="American Express"
                          />
                        </Flex>
                        <Flex align="center" pl={1}>
                          <Image
                            src="/icon_troy.png"
                            width="40px"
                            height="25px"
                            objectFit="contain"
                            alt="Troy"
                          />
                        </Flex>
                      </Flex>
                      <ChevronRightIcon color="#cccccc" w="30px" h="30px" />
                    </Flex>
                  </a>
                </Link>
              </Box>
              <Box w="full">
                <Link href="/signup/giftoption">
                  <a>
                    <Flex
                      justify="space-between"
                      align="center"
                      color="#333333"
                      w="full"
                      p={4}
                      mt="5px"
                      cursor="pointer"
                      h="64px"
                      borderRadius="2px"
                      border="#cccccc solid 1px"
                    >
                      <Flex align="center">
                        <Text pr={2}> Gift Code </Text>
                        <Flex align="center">
                          <Image
                            src="/netflix-gift-card-v2.svg"
                            width="40px"
                            height="25px"
                            objectFit="contain"
                            alt="Netflix"
                          />
                        </Flex>
                      </Flex>
                      <ChevronRightIcon color="#cccccc" w="30px" h="30px" />
                    </Flex>
                  </a>
                </Link>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default PaymentComponent;
