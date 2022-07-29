import React, { Component } from 'react';
import {
  Box,
  Flex,
  Container,
  Text,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import { getPlanFromLocal } from '../../LocalStorage/planformStorage';

class GiftOptionComponent extends Component {
  state = {
    show: false,
    plan: '',
    loading: false,
    giftCode: '',
  };

  async componentDidMount() {
    const plan = await getPlanFromLocal()[0];
    await this.setState({ plan: plan });
  }

  giftOption = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    
    const { giftCode } = this.state;
    const { router } = this.props;

    if (giftCode) {
      router.push('/browse');
    }
  };

  render() {
    return (
      <Box>
        <Header />
        <Box w="full" borderBottom="1px #e3e3e3 solid">
          <Container maxW="container.sm" p="30px" pl={20} pr={20} pb="140px">
            <Box mt="20px" color="#333333">
              <Text as="span" m={2} mt={7} fontSize="lg">
                STEP <strong>3</strong> OF <strong>3</strong>
              </Text>
              <Heading m={2} size="lg">
                Enter your gift code
              </Heading>
              <Flex
                as="form"
                m={2}
                onSubmit={this.giftOption}
                justify="flex-start"
                align="center"
                direction="column"
              >
                <Input
                  type="text"
                  h="60px"
                  ml={2}
                  mr={2}
                  mt={3}
                  name="code"
                  onChange={(e) => this.setState({ giftCode: e.target.value })}
                  borderRadius="none"
                  placeholder="Gift Card Pin or Code"
                  _placeholder={{ fontSize: '14px' }}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  errorBorderColor="red"
                  border="black 1px solid"
                  borderColor={'#8c8c8c'}
                  isRequired
                  bgColor="white"
                  size="lg"
                  mb={3}
                />

                <Flex
                  justify="space-between"
                  align="center"
                  w="full"
                  h="72px"
                  bgColor="#f4f4f4"
                  borderRadius="5px"
                >
                  <Box p={2} pl={5} pr={5}>
                    {this.state.plan == 'Basic' ? (
                      <Text color="#333333" fontSize="lg" fontWeight="semibold">
                        26.99TL/month
                      </Text>
                    ) : null}
                    {this.state.plan == 'Standard' ? (
                      <Text color="#333333" fontSize="lg" fontWeight="semibold">
                        40.99TL/month
                      </Text>
                    ) : null}
                    {this.state.plan == 'Premium' ? (
                      <Text color="#333333" fontSize="lg" fontWeight="semibold">
                        54.99TL/month
                      </Text>
                    ) : null}

                    <Text color="#73737f" fontSize="md" fontWeight="">
                      {this.state.plan} Plan
                    </Text>
                  </Box>
                  <Link href="/signup/planform">
                    <a>
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        cursor="pointer"
                        p={2}
                        pl={4}
                        pr={4}
                        color="#1871eb"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Change
                      </Text>
                    </a>
                  </Link>
                </Flex>

                <Button
                  colorScheme="red"
                  type="submit"
                  bgColor="#e50914"
                  _hover={{ bgColor: '#f6121D' }}
                  _active={{ bgColor: '#e50914' }}
                  size="lg"
                  w="full"
                  h="64px"
                  isLoading={this.state.loading ? true : false}
                  mt={3}
                >
                  <Text fontSize="24px">Redeem Gift Code</Text>
                </Button>
              </Flex>
              <Text fontSize="sm" m={2} color="#73737f">
                This page is protected by Google reCAPTCHA to ensure you&apos;re
                not a bot.
              </Text>

              {this.state.show ? (
                <Box m={2} mt={6} color="#73737f">
                  <Text fontSize="sm">
                    The information collected by Google reCAPTCHA is subject to
                    the Google{' '}
                    <Link href="https://policies.google.com/privacy">
                      <a
                        style={{
                          color: '#1871eb',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </Link>{' '}
                    and{' '}
                    <Link href="https://policies.google.com/terms">
                      <a
                        style={{
                          color: '#1871eb',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                      >
                        Terms of Service
                      </a>
                    </Link>{' '}
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalized advertising by Google).
                  </Text>
                </Box>
              ) : (
                <Box m={2} w="min">
                  <Text
                    fontSize="sm"
                    w="71px"
                    cursor="pointer"
                    color="#1871eb"
                    _hover={{ textDecoration: 'underline' }}
                    onClick={(e) => this.setState({ show: !this.state.show })}
                  >
                    Learn More
                  </Text>
                </Box>
              )}
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }
}

export default GiftOptionComponent;
